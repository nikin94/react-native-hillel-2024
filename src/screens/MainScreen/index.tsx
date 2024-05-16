import { CharactersList } from '@components'
import { SafeAreaView, StatusBar } from 'react-native'
import styles from './styles'

const MainScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar />
    <CharactersList />
  </SafeAreaView>
)

export default MainScreen
