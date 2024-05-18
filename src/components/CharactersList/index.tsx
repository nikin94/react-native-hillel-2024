import { useCallback, useEffect, useMemo, useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'

import { CharacterCard, SearchBar } from '@components'
import { useCharacters } from '@hooks'

import styles from './styles'

const CharactersList = () => {
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [isFavoriteFilterOn, setIsFavoriteFilterOn] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [isRandom, setIsRandom] = useState(true)
  const [itemsNumber, setItemsNumber] = useState(20)

  const { characters, reload } = useCharacters({
    uri: isRandom ? '/random' : '',
    params: {
      name: debouncedInputValue,
      count: itemsNumber
    }
  })

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    await reload()
    setRefreshing(false)
  }, [])

  const filteredCharacters = useMemo(() => {
    if (!favoriteIds || !isFavoriteFilterOn) {
      return characters
    }

    return characters.filter(character => favoriteIds.includes(character._id))
  }, [characters, favoriteIds, isFavoriteFilterOn])

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
        keyExtractor={(item, index) => item._id + index}
        onEndReachedThreshold={0.5}
        onEndReached={() => setItemsNumber(prev => prev + 10)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
