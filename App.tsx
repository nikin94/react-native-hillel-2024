import 'react-native-gesture-handler'

import { AppNavigator } from '@navigation'
import { CharacterProvider } from '@store'

const App = () => (
  <CharacterProvider>
    <AppNavigator />
  </CharacterProvider>
)

export default App
