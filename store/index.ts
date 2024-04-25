import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { Collection } from "types/collection.types";
import { mergeDeepLeft } from "ramda";

import AsyncStorage from "@react-native-async-storage/async-storage";

type CollectionSlice = {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
};

type SyncSlice = {
  lastPulledAt: Date | number;
  setLastPulledAt: (date: Date | number) => void;
};

type State = {
  collection: CollectionSlice;
  sync: SyncSlice;
}
type ImmerStateCreator<T, U> = StateCreator<
  State,
  [
    ["zustand/immer", never],
    ["zustand/persist", State],
    ["zustand/devtools", never],
    never
  ],
  [],
  U
>;

const createCollectionStore: ImmerStateCreator<State, CollectionSlice> = (
  set
) => ({
  collections: [],
  addCollection: (collection) =>
    set((state) => {
      state.collection.collections.push(collection);
    }),
});

const createSyncStore: ImmerStateCreator<State, SyncSlice> = (set) => ({
  lastPulledAt: new Date(),
  setLastPulledAt: (date) =>
    set((state) => {
      state.sync.lastPulledAt = date;
    }),
});

const store: ImmerStateCreator<State, State> = (...a) => ({
  collection: createCollectionStore(...a),
  sync: createSyncStore(...a),
});

const useLocalStore = create(
  devtools(
    persist(immer(store), {
      name: "zustand",
      storage: createJSONStorage(() => AsyncStorage),
      merge: (persistedState, currentState) =>
        mergeDeepLeft(persistedState as object, currentState),
    })
  )
);

export default useLocalStore;
