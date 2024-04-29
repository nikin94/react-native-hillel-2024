import { useEffect, useMemo, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import axios from 'axios'

import { ICharacter } from '@interfaces'
import { CharacterCard, SearchBar } from '@components'

import styles from './styles'

const CharactersList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [isFavoriteFilterOn, setIsFavoriteFilterOn] = useState(false)

  const getData = async () => {
    if (!process.env.EXPO_PUBLIC_API_URL) {
      console.error('API URL is not defined')
      return
    }

    const res = await axios.get(process.env.EXPO_PUBLIC_API_URL, {
      params: {
        name: debouncedInputValue
      }
    })

    setCharacters(res.data)
  }

  const filteredCharacters = useMemo(() => {
    if (!favoriteIds || !isFavoriteFilterOn) {
      return characters
    }

    return characters.filter(character => favoriteIds.includes(character._id))
  }, [characters, favoriteIds, isFavoriteFilterOn])

  useEffect(() => {
    getData()
  }, [debouncedInputValue])

  const onChangeText = (text: string) => {
    setInputValue(text)
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue)
    }, 500)

    return () => clearTimeout(delayInputTimeoutId)
  }, [inputValue])

  const renderEmptyListContent = () => (
    <View style={styles.emptyList}>
      <Text>No characters found</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={onChangeText}
        isFavoriteFilterOn={isFavoriteFilterOn}
        setIsFavoriteFilterOn={setIsFavoriteFilterOn}
      />
      <FlatList
        style={styles.cardsList}
        contentContainerStyle={styles.cardsListContent}
        showsVerticalScrollIndicator={false}
        data={filteredCharacters}
        keyExtractor={item => item._id}
        renderItem={({ item, index }) => (
          <CharacterCard
            character={item}
            index={index + 1}
            style={styles.characterCard}
            setFavorite={() => setFavoriteIds([...favoriteIds, item._id])}
            removeFavorite={() =>
              setFavoriteIds(favoriteIds.filter(id => id !== item._id))
            }
          />
        )}
        ListEmptyComponent={renderEmptyListContent}
      />
    </View>
  )
}

export default CharactersList
