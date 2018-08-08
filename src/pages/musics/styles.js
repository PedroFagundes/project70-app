import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  filterContainer: {
    margin: metrics.baseMargin,
  },

  input: {
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
    borderRadius: metrics.baseRadius,
  },

  musicsContainer: {
    margin: metrics.baseMargin,
    flex: 1,
  },

  message: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
  },

  messageLight: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.whiteTransparent,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
