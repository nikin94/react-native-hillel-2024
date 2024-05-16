import { View } from 'react-native'

import { Button } from '@components'
import styles from './styles'

const ModalScreen = ({ navigation }) => (
  <View style={styles.modalContent}>
    <Button onPress={() => navigation.goBack()}>Close modal</Button>
  </View>
)

export default ModalScreen
