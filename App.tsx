import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'

import { CharacterCard } from './src/components'
import ICharacter from './src/interfaces/ICharacter'

const App = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const getData = async () => {
    const resp = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/characters`)
    setCharacters(resp.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <CharacterCard data={characters[0]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
