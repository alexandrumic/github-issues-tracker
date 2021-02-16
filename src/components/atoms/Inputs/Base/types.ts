import { TextInputProps, TextStyle, StyleProp } from 'react-native';

export type Props = TextInputProps & {
  baseRef?: any;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  name?: string;
  isDisabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
};
