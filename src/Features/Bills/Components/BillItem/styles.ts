import { StyleSheet } from 'react-native'
import { Metrics, FontSizes } from '../../../../Utils'

export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.baseMargin,
    // paddingBottom: 15,
  },
  title: {
    // flex: 1,
    fontSize: FontSizes.regular,
    fontWeight: 'bold',
    paddingVertical: Metrics.smallMargin,
  },
  price: {
    backgroundColor: 'green',
    flex: 0.25,
    textAlign: 'center',
    fontSize: FontSizes.h6,
  },
  date: {
    // backgroundColor: 'brown',
    textAlign: 'left',
    fontSize: FontSizes.small,
    fontWeight: '200',
    paddingVertical: Metrics.smallMargin,
  },
  leftContainer: {
    flex: 0.75,
  },
})
