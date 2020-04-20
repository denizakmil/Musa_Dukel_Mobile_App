import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { getRepoDetail } from './reducer';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

import axios from 'axios';

import { Icon } from 'react-native-material-ui';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

class RepoDetail extends Component {
  state = { pageDetail: [] };
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        'roximaRegular': require('./assets/roximaRegular.otf'),
      });
      this.setState({ fontLoaded: true });
    })();

    const { name_id, page_id } = this.props.navigation.state.params;
    this.props.navigation.setParams({ title: name_id });
    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/pages/32776372656174697665/detail/' +
          page_id
      )
      .then(response => this.setState({ pageDetail: response.data.data }));
  }

  constructor(props) {
    super(props);
  }
  render() {
    const { repoInfo, loadingInfo } = this.state;
    if (loadingInfo) return <Text>Loading...</Text>;
    const { pageDetail } = this.state;
    return (
      <ScrollView style={styles.servicesContainer}>
        <View style={styles.servicesContainer}>
          <View style={styles.servicesRow}>
		             <Text style={styles.servicesTitle}>{pageDetail.name}</Text>
            <View style={styles.imagesbody}>
              <Image
                source={{ uri: pageDetail.inside_photo }}
                style={styles.bodyimage}
              />
            </View>
            <View style={styles.servicesBody}>
              <Text style={styles.servicesAll}>{pageDetail.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
  repoInfo,
  loadingInfo,
});

const mapDispatchToProps = {
  getRepoDetail,
};
const styles = StyleSheet.create({
  servicesContainer: {
    backgroundColor: '#1F273E',
  },
  servicesBody: {
    flexDirection: 'row',
  },
  servicesTitle: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
  },
  servicesAll: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'roximaRegular',
  },
  bodyimage: {
    height: deviceHeight * 0.3,
    borderRadius: 10,
  },
  imagesbody: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    margin: 10,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
