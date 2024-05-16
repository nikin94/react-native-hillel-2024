import { ICharacter } from '@interfaces'
import { useEffect } from 'react'
import { Image, SafeAreaView, StatusBar, Text } from 'react-native'
import styles from './styles'

const CharacterScreen = ({ navigation, route }) => {
  const { photoUrl, name } = (route.params as { character: ICharacter })
    .character

  useEffect(() => {
    navigation.setOptions({ title: name })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: photoUrl }}
      />
      <Text style={styles.description}>Character description</Text>
    </SafeAreaView>
  )
}

export default CharacterScreen
