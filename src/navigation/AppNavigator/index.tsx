import { useColorScheme } from 'react-native'

import { TabNavigator } from '@navigation'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CharacterScreen, ModalScreen } from '@screens'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator initialRouteName='Tabs'>
        <Stack.Group>
          <Stack.Screen
            name='Tabs'
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Character' component={CharacterScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='Modal'
            component={ModalScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
