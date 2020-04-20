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
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { getRepoDetail } from '../reducer';
const { width, height } = Dimensions.get('window');
import axios from 'axios';

class RepoDetail extends Component {
  state = { servicesDetail: [] };
  componentDidMount() {
    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/services/32776372656174697665/list/'
      )
      .then(response => this.setState({ servicesDetail: response.data.data }));
  }

  constructor(props) {
    super(props);
  }

  renderKategoriItem({ item, index }) {
    if (item.status == 1 && item.is_visible == 1) {
      return (
        <View style={styles.servicesItem}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Servis_list_details_details', {
                services_id: item.id,
              })
            }>
            <View style={styles.servicesSubItem}>
              <View style={styles.servicesItemBack} />
              <Image
                source={{ uri: item.photo }}
                style={styles.servicesItemImg}
              />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
 
  static navigationOptions = ({ navigation }) => ({
    title:
      typeof navigation.state.params === 'undefined' ||
      typeof navigation.state.params.title === 'undefined'
        ? 'Musa Dükel'
        : navigation.state.params.title,
  });

  render() {
    const { repoInfo, loadingInfo } = this.state;
    if (loadingInfo) return <Text>Loading...</Text>;

    return (
      <View style={styles.servicesContainer}>
     
        <View style={styles.servicesRow}>
          <Text style={styles.servicesTitle}>Dovme Kategorileri</Text>
        </View>
        <ScrollView>
          <View>
            <FlatList
		              //  data={this.kategori}
              pagingEnabled={true}
              data={this.state.servicesDetail}
              contentContainerStyle={styles.servicesRowInner}
              renderItem={this.renderKategoriItem.bind(this)}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>
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
    paddingBottom: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  servicesRow: {
    flexDirection: 'row',
  },
  servicesTitle: {
    flex: 1,
    color: 'white',
  },
  
  servicesRowInner: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  servicesItem: {
    flex: 1,
    padding: 2,
  },
  servicesSubItem: {
    height: width * 0.3,
  },
  servicesItemBack: {
    width: width * 0.29,
    height: width * 0.35,
    marginRight: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'green',
  },
  servicesItemImg: {
    width: width * 0.27,
    height: width * 0.27,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 11,
    zIndex: 9,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
