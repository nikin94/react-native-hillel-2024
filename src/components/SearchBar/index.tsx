import { HeartFillSvg, HeartSvg, OptionsSvg, SearchSvg } from '@assets/icons'
import { Button, TextInput } from '@components'
import { useState } from 'react'
import { View } from 'react-native'

import { RootStackParamList } from '@navigation'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from './styles'

interface SearchBarProps {
  onChangeText: (text: string) => void
  isFavoriteFilterOn: boolean
  setIsFavoriteFilterOn: (isFavoriteFilterOn: boolean) => void
}

const SearchBar = ({
  onChangeText,
  isFavoriteFilterOn,
  setIsFavoriteFilterOn
}: SearchBarProps) => {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const HeartIcon = isFavoriteFilterOn ? HeartFillSvg : HeartSvg

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {isInputVisible && <TextInput onChangeText={onChangeText} />}
      </View>
      <Button onPress={() => setIsInputVisible(!isInputVisible)}>
        <SearchSvg width={25} height={25} />
      </Button>
      <Button onPress={() => setIsFavoriteFilterOn(!isFavoriteFilterOn)}>
        <HeartIcon width={20} height={20} />
      </Button>
      <Button onPress={() => navigation.navigate('Modal')}>
        <OptionsSvg width={25} height={25} />
      </Button>
    </View>
  )
}

export default SearchBar
