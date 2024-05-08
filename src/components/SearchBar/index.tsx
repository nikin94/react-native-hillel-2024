import { useState } from 'react'
import { View, Text } from 'react-native'
import { Button, TextInput, Modal } from '@components'
import { HeartFillSvg, HeartSvg, SearchSvg, OptionsSvg } from '@assets/icons'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInputVisible, setIsInputVisible] = useState(false)

  const HeartIcon = isFavoriteFilterOn ? HeartFillSvg : HeartSvg

  return (
    <>
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
        <Button onPress={() => setIsModalOpen(true)}>
          <OptionsSvg width={25} height={25} />
        </Button>
      </View>
      <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Text>Options modal is open</Text>
      </Modal>
    </>
  )
}

export default SearchBar
