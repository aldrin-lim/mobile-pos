import Text from "components/Text";
import type { CardProps } from "tamagui";
import { Button, Card, H2, Image, Paragraph, View, XStack } from "tamagui";
import * as Icon from "@tamagui/lucide-icons";
import { formatToPeso } from "util/currency";

type ProductCardProps = {
  image?: string;
  name?: string;
  availability?: string;
};
export default function ProductCard(props: ProductCardProps) {
  const { image, name = "", availability, price } = props;
  return (
    // <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" space>
    <Card
      animation="bouncy"
      backgroundColor={"white"}
      width={160}
      height={145}
      borderRadius={"$4"}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      // elevate
    >
      {image && (
        <Image
          borderTopRightRadius={"$4"}
          borderTopLeftRadius={"$4"}
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: 160,
            height: 90,
            uri: "https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg",
          }}
        />
      )}
      {!image && (
        <View
          width={160}
          height={90}
          backgroundColor={"rgb(209, 213, 219)"}
          borderTopRightRadius={"$4"}
          borderTopLeftRadius={"$4"}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Icon.Image color={"rgb(156, 163, 175)"} size="$6" />
        </View>
      )}

      {/* Price */}
      <Text
        position="absolute"
        alignSelf="flex-start"
        backgroundColor={"rgba(0,0,0,.4)"}
        color={"white"}
        top={"$2"}
        left={"$2"}
        size={"$4"}
        padding={"$1"}
        paddingHorizontal={"$1.5"}
        borderRadius={"$1"}
      >
        {formatToPeso(price)}
      </Text>
      <View padding={"$1"} paddingHorizontal={"$2"}>
        {/* Product Name */}
        <Text
          color={"black"}
          alignSelf="flex-start"
          fontSize={"$7"}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {name}
        </Text>
        {/* Status */}
        <Text color={"black"} alignSelf="flex-start" fontSize={"$5"}>
          {availability}
        </Text>
      </View>
    </Card>
    // <DemoCard size="$5" width={250} height={300} />
    // </XStack>
  );
}
