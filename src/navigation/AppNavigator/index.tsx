import { TabNavigator } from '@navigation'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Character, ModalScreen } from '@screens'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Tabs'>
      <Stack.Group>
        <Stack.Screen
          name='Tabs'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Character'
          component={Character}
          options={({ route }) => ({ title: route.params?.character.name })}
        />
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

export default AppNavigator
