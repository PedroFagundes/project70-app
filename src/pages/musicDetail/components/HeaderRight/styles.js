import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  icon: {
    color: colors.white,
    marginRight: metrics.baseMargin,
  },

  disabled: {
    color: colors.whiteTransparent,
  },
});

export default styles;
