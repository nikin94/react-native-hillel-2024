import { observer } from 'mobx-react-lite'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { RefreshControl, Text, View } from 'react-native'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import { CharacterCard, SearchBar } from '@components'
import { useCharacters } from '@hooks'
import { ICharacter } from '@lib'
import styles from './styles'

const keyExtractor = (item: ICharacter, index: number) => item._id + index

const CharactersList = observer(() => {
  const [inputValue, setInputValue] = useState('')
  const [debouncedInputValue, setDebouncedInputValue] = useState('')
  const [favoriteIds, setFavoriteIds] = useState<string[]>([])
  const [isFavoriteFilterOn, setIsFavoriteFilterOn] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [page, setPage] = useState(1)

  const opacity = useSharedValue(1)

  const params = useMemo(
    () =>
      debouncedInputValue
        ? { name: debouncedInputValue }
        : { perPage: 20, page },
    [debouncedInputValue, page]
  )

  const { characters, reload } = useCharacters({ params })

  const onChangeText = (text: string) => setInputValue(text)

  const onEndReached = () => setPage(prev => prev + 1)

  const onScroll = useAnimatedScrollHandler(event => {
    const offset = event.contentOffset.y
    const currentOpacity = 1 - offset / 60
    opacity.value = offset > 0 ? currentOpacity : 1
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

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue)
    }, 500)

    return () => clearTimeout(delayInputTimeoutId)
  }, [inputValue])

  useEffect(() => {
    reload()
  }, [page, debouncedInputValue])

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value }
  })

  const renderEmptyListContent = () => (
    <View style={styles.emptyList}>
      <Text>No characters found</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <SearchBar
        style={animatedStyle}
        isFavoriteFilterOn={isFavoriteFilterOn}
        onChangeText={onChangeText}
        setIsFavoriteFilterOn={setIsFavoriteFilterOn}
      />
      <Animated.FlatList
        style={styles.cardsList}
        contentContainerStyle={styles.cardsListContent}
        showsVerticalScrollIndicator={false}
        data={filteredCharacters}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        onScroll={onScroll}
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
})

export default CharactersList
