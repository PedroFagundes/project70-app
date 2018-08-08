import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { colors } from 'styles';

import api from 'services/api';

import styles from './styles';

import MusicItem from './components/MusicItem';

export default class Musics extends Component {
  static navigationOptions = {
    title: 'Projeto 70',
  };

  state = {
    searchInput: '',
    musics: [],
    filteredMusics: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    const storedMusics = await AsyncStorage.getItem('@P70app:musics');
    if (storedMusics) {
      this.setState({ musics: JSON.parse(storedMusics) });
    } else {
      this.loadMusics();
    }
    this.setState({ loading: false });
  }

  loadMusics = async () => {
    this.setState({ refreshing: true });
    try {
      const response = await api.get('/musics');
      if (response.data.length) {
        await AsyncStorage.setItem('@P70app:musics', JSON.stringify(response.data));
        this.setState({
          musics: response.data,
          loading: false,
          refreshing: false,
        });
      }
    } catch (err) {
      console.tron.log(`Error: ${err}`);
    }
  };

  checkTitlesMatchesFilter = (music) => {
    const { searchInput } = this.state;
    const unaccentedTitlePt = music.br_title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const unaccentedTitleEn = music.en_title
      ? music.en_title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      : '';
    return (
      unaccentedTitlePt.toUpperCase().includes(searchInput.toUpperCase())
      || unaccentedTitleEn.toUpperCase().includes(searchInput.toUpperCase())
    );
  };

  filterMusics = async (searchInput) => {
    await this.setState({ searchInput });
    const { musics } = this.state;
    await this.setState({ filteredMusics: musics.filter(this.checkTitlesMatchesFilter) });
  }

  renderList = () => {
    const {
      musics, filteredMusics, refreshing, searchInput,
    } = this.state;
    const { navigation } = this.props;
    return (
      musics.length
        ? (
          <FlatList
            data={searchInput.length ? filteredMusics : musics}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <MusicItem music={item} navigation={navigation} />}
            onRefresh={this.loadMusics}
            refreshing={refreshing}
          />)
        : (
          <ScrollView
            refreshControl={(
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.loadMusics}
              />
            )}
          >
            <Text style={styles.message}>
              Nenhuma música encontrada. Verifique sua conexão com a internet
              e arraste para baixo para tentar novamente.
            </Text>
            <Text style={styles.messageLight}>
              No music has been found. Verify your internet connection and scroll
              the screen down to try again.
            </Text>
          </ScrollView>
        )
    );
  };

  render() {
    const { searchInput, loading } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Pesquisar / Search"
            underlineColorAndroid="transparent"
            value={searchInput}
            onChangeText={inputText => this.filterMusics(inputText)}
          />
        </View>
        <View style={styles.musicsContainer}>
          { loading
            ? <ActivityIndicator size="small" color={colors.white} />
            : this.renderList()
          }
        </View>
      </View>
    );
  }
}
