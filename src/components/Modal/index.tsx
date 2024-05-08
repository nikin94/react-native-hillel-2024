import { ReactNode } from 'react'
import {
  Modal as NativeModal,
  ModalProps as NativeModalProps,
  Pressable,
  View
} from 'react-native'

import styles from './styles'

interface ModalProps extends NativeModalProps {
  visible: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal = ({ visible, children, onClose, ...props }: ModalProps) => (
  <NativeModal transparent animationType='slide' visible={visible} {...props}>
    <Pressable onPress={onClose} style={styles.emptySpace} />
    <View style={styles.modalContent}>{children}</View>
  </NativeModal>
)

export default Modal
