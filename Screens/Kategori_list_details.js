import React, { Component, useState } from 'react';

import {
  Platform,
  Dimensions,
  Linking,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Share,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

import ImageLayout from 'react-native-image-layout';
import axios from 'axios';

import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import AwesomeButton from 'react-native-really-awesome-button';
import { Icon } from 'react-native-material-ui';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

function downloadFile(uri) {
  let filename = uri.split('/');
  filename = filename[filename.length - 1];
  let fileUri = FileSystem.documentDirectory + filename;
  FileSystem.downloadAsync(uri, fileUri)
    .then(({ uri }) => {
      saveFile(uri);
    })
    .catch(error => {
      Alert.alert('Error', "Couldn't download photo");
      console.error(error);
    });
}

async function saveFile(fileUri) {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === 'granted') {
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync('Download', asset, false);
    Alert.alert('Success', 'Image was successfully downloaded!');
  }
}

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const backIcon = require('../assets/icon.png');
import { Ionicons } from '@expo/vector-icons';

export default class ReactNativeImageLayoutExample extends Component {
  state = { categoryDetail: [] };
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        'roximaRegular': require('../assets/roximaRegular.otf'),
      });
      this.setState({ fontLoaded: true });
    })();
    const { name_id, category_id } = this.props.navigation.state.params;
    this.props.navigation.setParams({ title: name_id });
    axios

      .get(
        'http://siteotomasyonu.com/musadukelapi/api/categories/32776372656174697665/detail/' +
          category_id
      )
      .then(response => this.setState({ categoryDetail: response.data.data }));
  }

  constructor(props) {
    super(props);
  }
  _shareWallpaper = async image => {
    try {
      await Share.share({
        message:
          'Checkout this wallpaper ' + this.props.navigation.getParam('url'),
      });
    } catch (error) {
      console.log(error);
    }
  };

 

  render() {
    const { categoryDetail } = this.state;

    return (
      <ImageLayout
        images={this.state.categoryDetail.images}
        renderPageHeader={(image, i, onClose) => {
          return (
            <View
              style={[styles.statusBarTop, styles.header, styles.pageHeader]}>
              <Text style={[styles.profilePrimary, styles.whiteText]}>
                {categoryDetail.name}
              </Text>
            </View>
          );
        }}
         />
    );
  }
}

const styles = StyleSheet.create({
  profilePrimary: {
    fontSize: 14,
    paddingHorizontal: 5,
    fontFamily: 'roximaRegular',
  },

  whiteText: {
    fontWeight: 'bold',
    color: '#fafafa',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    fontFamily: 'roximaRegular',
  },
  header: {
    backgroundColor: 'transparent',
  },

  statusBarTop: {
    paddingTop: 22,
  },

  pageHeader: {
    top: 0,
    width: '100%',
    position: 'absolute',
    zIndex: 1000,
    justifyContent: 'space-between',
  },
});
