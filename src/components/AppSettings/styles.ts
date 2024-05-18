import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    alignSelf: 'flex-start',
    marginVertical: 16,
    fontSize: 18
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%'
  },
  itemText: {
    fontSize: 16
  }
})

export default styles
