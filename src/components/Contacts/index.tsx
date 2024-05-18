import { useCallback } from 'react'
import { Alert, Linking, Share, Text, View } from 'react-native'

import { Button } from '@components'
import * as SMS from 'expo-sms'
import styles from './styles'

const Contacts = () => {
  const handleOpenUrl = useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url)

    if (!supported) return

    await Linking.openURL(url)
  }, [])

  const handleSendSms = useCallback(async (phones: string[], text: string) => {
    const { result } = await SMS.sendSMSAsync(phones, text)

    Alert.alert('result', result)
  }, [])

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share the application!'
      })

      if (result.action === Share.dismissedAction)
        return Alert.alert('dismissed')

      Alert.alert(
        result.activityType ? 'shared with activityType' : 'just shared'
      )
    } catch (error: any) {
      console.warn(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <Button
        onPress={() =>
          handleOpenUrl(
            'mailto:support@example.com?subject=SendMail&body=Description'
          )
        }
        style={styles.item}
      >
        email
      </Button>
      <Button
        onPress={() =>
          handleSendSms(['+3801234567', '32132123'], 'Hello World!')
        }
        style={styles.item}
      >
        SMS
      </Button>
      <Button
        onPress={() => handleOpenUrl('https://example.com')}
        style={styles.item}
      >
        Website
      </Button>
      <Button onPress={onShare} style={styles.item}>
        Share
      </Button>
    </View>
  )
}

export default Contacts
