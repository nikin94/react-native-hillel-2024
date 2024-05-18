import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  View,
  ViewStyle
} from 'react-native'

import { AddFriendSvg, HeartFillSvg, HeartSvg } from '@assets/icons'
import { Button } from '@components'
import { ICharacter } from '@lib'
import { RootStackParamList } from '@navigation'
import { useNavigation, useTheme } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { colors } = useTheme()
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

  const onCardPress = () => {
    navigation.navigate('Character', { character })
  }

  const onAddFriendPress = () => {
    Alert.alert('Add to friends list?', name, [
      { text: 'No', onPress: () => console.log('NO Pressed'), style: 'cancel' },
      { text: 'Yes', onPress: () => console.log('YES Pressed') }
    ])
  }

  return (
    <Button
      onPress={onCardPress}
      style={[styles.container, style, { backgroundColor: colors.background }]}
    >
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
    </Button>
  )
}

export default CharacterCard
