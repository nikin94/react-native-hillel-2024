import { ICharacter } from '@interfaces'
import { useRoute } from '@react-navigation/native'
import { Image, SafeAreaView, StatusBar, Text } from 'react-native'
import styles from './styles'

const Character = () => {
  const { params } = useRoute()
  const { photoUrl } = (params as { character: ICharacter }).character

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

export default Character
