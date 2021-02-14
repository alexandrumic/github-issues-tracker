import { TouchableOpacityProps, TextStyle, StyleProp } from 'react-native';

export type Props = TouchableOpacityProps & {
  isDisabled?: boolean;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
};
