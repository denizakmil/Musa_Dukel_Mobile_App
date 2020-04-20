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
    const { category_id, name_id } = this.props.navigation.state.params;
    this.props.navigation.setParams({ title: name_id });
    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/services/32776372656174697665/detail/' +
          category_id
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
              this.props.navigation.navigate('Servis_list_details', {
                services_id: item.id,
				name_id: item.name,
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
  navigationOptions = {
    backgroundColor: '#1F273E',
  };

  static navigationOptions = ({ navigation }) => ({
    title:
      typeof navigation.state.params === 'undefined' ||
      typeof navigation.state.params.title === 'undefined'
        ? 'Musa Dükel'
        : navigation.state.params.title,
  });

  render() {
    const { servicesDetail } = this.state;

    return (
      <ScrollView style={styles.body}>
        <View style={styles.servicesContainer}>

{  
  servicesDetail.photo !== ''  ? (
          <View style={styles.imagesbody}>
            <Image
              source={{ uri: servicesDetail.photo			 
			  }}
              style={styles.bodyimage}
            />
          </View>
  ) : null
}

         <Text style={styles.servicesAll}>{servicesDetail.description}</Text>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ repoInfo, loadingInfo, servicesDetail }) => ({
  repoInfo,
  loadingInfo,
  servicesDetail,
});

const mapDispatchToProps = {
  getRepoDetail,
};
const styles = StyleSheet.create({
  servicesContainer: {
    backgroundColor: '#1F273E',
    flex: 1,
	
  },
  bodyimage: {
    width:width-20,
    height:height/3,
	resizeMode:'cover',
	    borderRadius: 11,
  },
    bodyimage2: {
    width:width-20,
    height:height*3,
	resizeMode:'contain',
	    borderRadius: 11,
  },
   
   imagesbody: {
  width:width,
  	
	},
  body: {
    flex: 1,
			padding:10,

	
    backgroundColor: '#1F273E',
  },

 servicesAll: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
		paddingTop:10,

    fontFamily: 'roximaRegular',
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
