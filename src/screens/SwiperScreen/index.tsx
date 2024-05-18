import { useCallback, useEffect, useRef, useState } from 'react'
import {
  FlatList,
  Image,
  NativeScrollEvent,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useWindowDimensions
} from 'react-native'

import { useCharacters } from '@hooks'

import styles from './styles'

const SwiperScreen = () => {
  const flatListRef = useRef<FlatList>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const dimensions = useWindowDimensions()
  const { characters } = useCharacters({
    uri: '/random',
    params: { count: 20 }
  })

  useEffect(() => {
    if (!isDataLoaded) return

    const interval = setInterval(() => {
      if (isTouching) return

      setCurrentIndex(prevIndex =>
        currentIndex < characters.length - 1 ? prevIndex + 1 : 0
      )
    }, 2000)

    scrollToIndex(currentIndex)

    return () => clearInterval(interval)
  }, [isDataLoaded, isTouching, currentIndex])

  useEffect(() => {
    if (!isDataLoaded && characters.length > 0) {
      setIsDataLoaded(true)
    }
  }, [characters.length])

  const scrollToIndex = (index: number) => {
    if (!isTouching && flatListRef.current && isDataLoaded) {
      flatListRef.current.scrollToIndex({ animated: true, index })
    }
  }

  const onMomentumScrollEnd = ({
    nativeEvent
  }: {
    nativeEvent: NativeScrollEvent
  }) => {
    setCurrentIndex(
      Math.floor(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      )
    )
  }

  const renderPagination = useCallback(
    () =>
      characters.map((_, index) => (
        <View
          key={index}
          style={[
            styles.paginationItem,
            index === currentIndex && {
              backgroundColor: 'white'
            }
          ]}
        />
      )),
    [characters.length, currentIndex]
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.flatList}>
        <FlatList
          horizontal
          decelerationRate='fast'
          ref={flatListRef}
          data={characters}
          keyExtractor={item => item._id}
          initialScrollIndex={currentIndex}
          snapToInterval={dimensions.width}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => setIsTouching(false)}
          renderItem={({ item }) => (
            <Image
              style={{ width: dimensions.width, height: dimensions.width }}
              source={{ uri: item.photoUrl }}
            />
          )}
        />
        <View style={styles.pagination}>{renderPagination()}</View>
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
    </SafeAreaView>
  )
}

export default SwiperScreen
