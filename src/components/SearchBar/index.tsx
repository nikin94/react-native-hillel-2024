import { useState } from 'react'
import { ViewStyle } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

import { HeartFillSvg, HeartSvg, OptionsSvg, SearchSvg } from '@assets/icons'
import { Button, TextInput } from '@components'
import { RootStackParamList } from '@navigation'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from './styles'

interface SearchBarProps {
  style: ViewStyle
  isFavoriteFilterOn: boolean
  onChangeText: (text: string) => void
  setIsFavoriteFilterOn: (isFavoriteFilterOn: boolean) => void
}

const SearchBar = ({
  style,
  isFavoriteFilterOn,
  onChangeText,
  setIsFavoriteFilterOn
}: SearchBarProps) => {
  const height = useSharedValue(0)
  const [isInputVisible, setIsInputVisible] = useState(false)
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const HeartIcon = isFavoriteFilterOn ? HeartFillSvg : HeartSvg

  const toggleInput = () => {
    height.value = withSpring(isInputVisible ? 0 : 40)
    setIsInputVisible(!isInputVisible)
  }

  return (
    <Animated.View style={[styles.container, style]}>
      <Animated.View style={[styles.inputContainer, { height }]}>
        {isInputVisible && <TextInput onChangeText={onChangeText} />}
      </Animated.View>
      <Button onPress={toggleInput}>
        <SearchSvg width={25} height={25} />
      </Button>
      <Button onPress={() => setIsFavoriteFilterOn(!isFavoriteFilterOn)}>
        <HeartIcon width={20} height={20} />
      </Button>
      <Button onPress={() => navigation.navigate('Modal')}>
        <OptionsSvg width={25} height={25} />
      </Button>
    </Animated.View>
  )
}

export default SearchBar
