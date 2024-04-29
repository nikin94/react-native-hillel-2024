import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import { CharactersList } from '@components'

const App = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar />
    <CharactersList />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  }
})

export default App
