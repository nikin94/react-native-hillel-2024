import { View, StyleSheet, Text, Image } from 'react-native'
import ICharacter from '../interfaces/ICharacter'
import Heart from '../../assets/heart.svg'
import AddFriend from '../../assets/addFriend.svg'

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 4,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1
  },
  container: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 300,
    maxHeight: 150,
    flexGrow: 1,
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    gap: 8
  },
  image: {
    flex: 1
  },
  imageContainer: {
    flex: 1
  },
  contentContainer: {
    flex: 2
  },
  bold: {
    fontWeight: 'bold'
  },
  strike: {
    textDecorationLine: 'line-through'
  },
  containerRow: {
    flexDirection: 'row',
    gap: 12,
    flex: 1
  },
  heart: {
    width: 20,
    height: 20
  },
  addFriend: {
    width: 30,
    height: 30,
    right: -5,
    bottom: -5
  },
  description: {
    flex: 1
  }
})

interface CharacterCardProps {
  data: ICharacter
}

const CharacterCard = ({ data }: CharacterCardProps) => {
  if (!data) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  const {
    id,
    name,
    image,
    bio,
    physicalDescription,
    personalInformation,
    politicalInformation,
    chronologicalInformation
  } = data

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode='cover' source={{ uri: image }} />
          <View style={styles.badge}>
            <Text style={styles.bold}>{id}</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <Text style={styles.name}>{name}</Text>
            <Heart style={styles.heart} />
          </View>
          <View style={styles.row}>
            <Text>Allies:</Text>
            <Text style={styles.bold}>{personalInformation.allies[0]}</Text>
            <Text style={styles.strike}>{personalInformation.enemies[0]}</Text>
          </View>
          <View style={{ flex: 1 }} />
          <View style={[styles.row, { alignItems: 'flex-end' }]}>
            <Text style={styles.description} numberOfLines={1}>
              {politicalInformation.position[0]}
            </Text>
            <AddFriend style={styles.addFriend} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CharacterCard
