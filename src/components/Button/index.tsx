import { ReactNode } from 'react'
import { Pressable, PressableProps, Text } from 'react-native'

import styles from './styles'

interface ButtonProps extends PressableProps {
  children: ReactNode | string
}

const Button = ({ children, ...props }: ButtonProps) => (
  <Pressable
    {...props}
    style={styles.container}
    android_ripple={{
      color: 'rgba(0, 0, 0, 0.32)',
      borderless: false,
      radius: 30
    }}
  >
    {typeof children === 'string' ? (
      <Text style={styles.text}>{children}</Text>
    ) : (
      children
    )}
  </Pressable>
)

export default Button
