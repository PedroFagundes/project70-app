import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    padding: metrics.basePadding / 2,
    marginBottom: metrics.baseMargin,
    flexDirection: 'row',
  },

  infoContainer: {
    flex: 1,
  },

  titlesContainer: {
    flexDirection: 'row',
  },

  title: {
    fontWeight: 'bold',
  },

  enTitle: {
    color: colors.regular,
    marginLeft: 4,
  },

  musicFeatures: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin / 2,
  },

  featureIcon: {
    color: colors.darker,
    marginRight: metrics.baseMargin / 2,
    backgroundColor: colors.lighter,
    padding: 3,
  },

  disabled: {
    backgroundColor: colors.lighter,
    color: colors.light,
  },
});

export default styles;
