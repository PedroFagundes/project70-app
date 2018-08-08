import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Musics from 'pages/musics';
import MusicDetail from 'pages/musicDetail';

const Routes = StackNavigator({
  Musics: { screen: Musics },
  MusicDetail: { screen: MusicDetail },
}, {
  navigationOptions: {
    headerStyle: {
      borderBottomColor: 'transparent',
      backgroundColor: colors.primary,
    },
    headerBackTitle: null,
    headerTintColor: colors.white,
  },
});

export default Routes;
