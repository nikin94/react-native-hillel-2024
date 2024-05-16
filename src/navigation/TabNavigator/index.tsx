import AntDesign from '@expo/vector-icons/AntDesign'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainScreen, SwiperScreen } from '@screens'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen
      name='Home'
      component={MainScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign name='home' color={focused ? '#333' : '#888'} size={30} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name='Swiper'
      component={SwiperScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <AntDesign
            name='slack-square'
            color={focused ? '#333' : '#888'}
            size={30}
          />
        ),
        headerShown: false
      }}
    />
  </Tab.Navigator>
)

export default TabNavigator
