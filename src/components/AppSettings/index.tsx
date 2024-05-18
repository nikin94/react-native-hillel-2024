import { useState } from 'react'
import {
  Appearance,
  ColorSchemeName,
  Switch,
  Text,
  View,
  useColorScheme
} from 'react-native'

import styles from './styles'

const AppSettings = () => {
  const [isUsePhoneTheme, setIsUsePhoneTheme] = useState(false)
  const [appTheme, setAppTheme] = useState<ColorSchemeName>('light')
  const [isDarkModeSelectorDisabled, setIsDarkModeSelectorDisabled] =
    useState(false)

  const colorScheme = useColorScheme()

  const switchIsPhoneTheme = () => {
    setIsUsePhoneTheme(prev => !prev)

    if (isUsePhoneTheme) {
      setIsDarkModeSelectorDisabled(false)
      setAppTheme(colorScheme)
      return
    }

    setIsDarkModeSelectorDisabled(true)
  }

  const switchAppTheme = () => {
    Appearance.setColorScheme(appTheme === 'light' ? 'dark' : 'light')
    setAppTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subTitle}>Theme</Text>
      <View style={styles.item}>
        <Text style={styles.itemText}>Use phone theme</Text>
        <Switch value={isUsePhoneTheme} onChange={switchIsPhoneTheme} />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Switch to Dark Mode</Text>
        <Switch
          value={appTheme === 'dark'}
          disabled={isDarkModeSelectorDisabled}
          onChange={switchAppTheme}
        />
      </View>
      <Text style={styles.subTitle}>Current theme: {appTheme}</Text>
    </View>
  )
}

export default AppSettings
