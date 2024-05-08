import { useState } from 'react'
import { View, Text, Image, ViewStyle, ActivityIndicator } from 'react-native'

import { ICharacter } from '@interfaces'
import { HeartFillSvg, AddFriendSvg, HeartSvg } from '@assets/icons'
import { Button } from '@components'

import styles from './styles'

interface CharacterCardProps {
  character: ICharacter
  index: number
  setFavorite: () => void
  removeFavorite: () => void
  style?: ViewStyle
}

const CharacterCard = ({
  character,
  index,
  setFavorite,
  removeFavorite,
  style
}: CharacterCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const HeartIcon = isFavorite ? HeartFillSvg : HeartSvg

  if (!character) {
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  const { affiliation, allies, enemies, name, photoUrl } = character

  const onHeartPress = () => {
    setIsFavorite(!isFavorite)
    isFavorite ? removeFavorite() : setFavorite()
  }

  const onAddFriendPress = () => {
    console.log('Add friend pressed')
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: photoUrl }}
        />
        <View style={styles.badge}>
          <Text style={styles.bold}>{index}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.row}>
          <Text>Allies:</Text>
          <Text style={styles.bold}>{allies[0]}</Text>
          <Text style={styles.strike}>{enemies[0]}</Text>
        </View>
        <View style={{ flex: 1 }} />
        <Text style={styles.description} numberOfLines={1}>
          {affiliation}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <Button onPress={onHeartPress}>
          <HeartIcon style={styles.heart} fill={isFavorite ? 'red' : 'black'} />
        </Button>
        <Button onPress={onAddFriendPress}>
          <AddFriendSvg style={styles.addFriend} />
        </Button>
      </View>
    </View>
  )
}

export default CharacterCard
