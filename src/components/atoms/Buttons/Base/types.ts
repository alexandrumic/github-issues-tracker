import { TouchableOpacityProps, TextStyle, StyleProp } from 'react-native';

export type Props = TouchableOpacityProps & {
  baseRef?: any;
  isDisabled?: boolean;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
};
