import { TextInputProps, TextStyle, StyleProp } from 'react-native';

export type Props = TextInputProps & {
  baseRef?: any;
  error?: string | {};
  label?: string;
  name?: string;
  isValid?: Boolean;
  isDisabled?: Boolean;
  textStyle?: StyleProp<TextStyle>;
};
