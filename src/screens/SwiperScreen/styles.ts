import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  flatList: {
    flex: 1
  },
  pagination: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 20,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    padding: 5
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flex: 1
  }
})

export default styles
