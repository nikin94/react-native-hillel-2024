import { StyleSheet } from 'react-native'

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
    width: '100%',
    height: 100,
    gap: 12,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center'
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
    flex: 2,
    overflow: 'hidden'
  },
  bold: {
    fontWeight: 'bold'
  },
  strike: {
    textDecorationLine: 'line-through'
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
  },
  iconsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
})

export default styles
