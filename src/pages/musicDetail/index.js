import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import HTMLView from 'react-native-htmlview';

import HeaderRight from './components/HeaderRight';

import styles from './styles';

const MusicDetail = ({ navigation }) => {
  const htmlContent = `<div>${navigation.getParam('music').br_lyrics}</div>`;
  return (
    <ScrollView style={styles.container}>
      <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />
    </ScrollView>
  );
};

MusicDetail.navigationOptions = ({ navigation }) => ({
  title: `${navigation.getParam('music').br_title}`,
  headerRight: <HeaderRight navigation={navigation} />,
});

MusicDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default MusicDetail;
