import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const MusicItem = ({ music, navigation }) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={() => navigation.navigate('MusicDetail', { music })}>
    <View style={styles.infoContainer}>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>
          { music.br_title }
        </Text>
        <Text style={styles.enTitle}>
          { music.en_title }
        </Text>
      </View>

      <View style={styles.musicFeatures}>
        <Icon name="music-note" size={12} style={[styles.featureIcon, !music.br_chords ? styles.disabled : {}]} />
        <Icon name="play-arrow" size={12} style={[styles.featureIcon, !music.br_link ? styles.disabled : {}]} />
      </View>
    </View>
    <Text>
      { music.year }
    </Text>
  </TouchableOpacity>
);

MusicItem.propTypes = {
  music: PropTypes.shape({
    br_title: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default MusicItem;
