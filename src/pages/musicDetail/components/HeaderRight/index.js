import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const openUrl = (url) => {
  if (url) Linking.openURL(url);
};

const HeaderRight = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => openUrl(navigation.getParam('music').br_chords)}>
      <Icon name="music-note" size={18} style={[styles.icon, !navigation.getParam('music').br_chords ? styles.disabled : {}]} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Icon name="play-arrow" size={18} style={[styles.icon, !navigation.getParam('music').br_link ? styles.disabled : {}]} />
    </TouchableOpacity>
    {/* <TouchableOpacity onPress={() => {}}>
      <Icon name="format-size" size={18} style={styles.icon} />
    </TouchableOpacity> */}
  </View>
);

HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default HeaderRight;
