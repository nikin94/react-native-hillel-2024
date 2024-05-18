import { View } from 'react-native'

import { AppSettings, Contacts } from '@components'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'

const ModalScreen = ({ navigation }) => {
  const { colors } = useTheme()
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.modalContent,
        { backgroundColor: colors.background, paddingBottom: insets.bottom }
      ]}
    >
      <AppSettings />
      <Contacts />
      <AntDesign
        style={styles.closeModal}
        onPress={navigation.goBack}
        name='closecircle'
        size={50}
        color={colors.primary}
      />
    </View>
  )
}

export default ModalScreen
