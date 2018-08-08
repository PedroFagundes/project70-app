import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  div: {
    padding: metrics.basePadding / 2,
    color: colors.darker,
    fontWeight: '600',
    fontSize: 18,
  },
});

export default styles;
