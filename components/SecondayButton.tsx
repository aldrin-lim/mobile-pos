import { Button, XGroup, XStack, YStack, type ButtonProps } from 'tamagui'
import Colors from '../constants/Colors'
import BaseButton from './BaseButton'

export default (props: ButtonProps) => <BaseButton backgroundColor={Colors.dark.secondary} {...props} />