import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  TextStyle
} from 'react-native'

import styles from './styles'

interface TextInputProps extends NativeTextInputProps {
  style?: TextStyle
}

const TextInput = ({ style, ...props }: TextInputProps) => (
  <NativeTextInput
    {...props}
    style={[style, styles.input]}
    placeholder='Search...'
  />
)

export default TextInput
