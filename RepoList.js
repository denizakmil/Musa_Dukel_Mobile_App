import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
import Carousel, { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import { Button } from 'react-native-elements';

import Kategori_list_home from './Screens/Kategori_list_home';
import Kategori_list_details from './Screens/Kategori_list_details';

import Servis_list_details_details from './Screens/Servis_list_details_details';
import Servis_list_details from './Screens/Servis_list_details';

import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { listRepos } from './reducer';

const repos_1_FIRST_ITEM = 1;

class RepoList extends React.Component {
  state = { categories: [], services: [], sliders: [] };


  UNSAFE_componentWillMount() {
    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/pages/32776372656174697665/get_slider'
      )
      .then(response => this.setState({ sliders: response.data.data }));

    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/categories/32776372656174697665/list'
      )
      .then(response => this.setState({ categories: response.data.data }));
    axios

      .get(
        'http://siteotomasyonu.com/musadukelapi/api/services/32776372656174697665/list'
      )
      .then(response => this.setState({ services: response.data.data }));
  }

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: repos_1_FIRST_ITEM,
    };
  }

  renderUstSlider({ item, index }) {
    if (index < 10) {
      return (
        <TouchableOpacity
          style={styles.newSlider}
          onPress={() =>
            this.props.navigation.navigate(item.slug, {
              page_id: item.id,
              name_id: item.name,
            })
			
          }>
          <Image source={{ uri: item.photo }} style={styles.newSliderImg} />
		  <Text style={styles.categoryItemfont}
							>{item.name}</Text>
        </TouchableOpacity>
		
      );	  }
  }

  renderKategoriItem({ item, index }) {
    if (item.status == 1 && item.is_visible == 1) {
      return (
	  
        <View style={styles.categoryItem}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Kategori_list_details', {
                category_id: item.id,
              name_id: item.name,
              })
            }>
            <View style={styles.categorySubItem}>
              <View style={styles.categoryItemBack} />
              <Image
                source={{ uri: item.photo }}
                style={styles.categoryItemImg}
              />
			  
              <Text style={styles.categoryItemfont}
							>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
	  
    }
  }

  renderAltSlider({ item, index }) {
    return (
      <View style={styles.servicesItem}>
        <TouchableOpacity
          onPress={() =>
		             this.props.navigation.navigate('Servis_list_details', {
              category_id: item.id,
              name_id: item.name,
            })
          }>
          <View style={styles.servicesSubItem}>
            <View style={styles.servicesItemBack} />
            <Image
              source={{ uri: item.photo }}
              style={styles.servicesItemImg}
            />
			<Text style={styles.categoryItemfont}
							>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        'roximaRegular': require('./assets/roximaRegular.otf'),
      });
      this.setState({ fontLoaded: true });
    })();
  }

  render() {
    const { repos } = this.props;
    const { slider1ActiveSlide } = this.state;

    return (
      <ScrollView>
        <SafeAreaView style={styles.body}>
          <StatusBar hidden={true} />
          <View style={styles.headerRow}>
            <Text style={styles.headerButton} />

            <Text style={styles.headerTitle}>Musa Dükel Tattoo Artist</Text>
          </View>

          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.sliders}
            renderItem={this.renderUstSlider.bind(this)}
            sliderWidth={width}
            itemWidth={width}
            loop={true}
			
            //loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={1000}
            autoplayInterval={3000}
            onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
            hasParallaxImages={true}
          />

          <View style={styles.categoryContainer}>
            <View style={styles.categoryRow}>
              <Text style={styles.categoryTitle}>Tattoo Categories</Text>
              <TouchableOpacity
                style={styles.categoryAll}
                onPress={() =>
                  this.props.navigation.navigate('Kategori_list_home')
                }>
                <Ionicons name="ios-more" color="grey" size={30} />
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                //  data={this.kategori}
                pagingEnabled={true}
                data={this.state.categories}
                contentContainerStyle={styles.categoryRowInner}
                renderItem={this.renderKategoriItem.bind(this)}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
          </View>
		
          <View style={styles.servicesContainer}>
            <View style={styles.servicesRow}>
              <Text style={styles.servicesTitle}>About Tattoo</Text>
              <TouchableOpacity
                style={styles.categoryAll}
                onPress={() =>
                  this.props.navigation.navigate('Servis_list_details')
                }>
              </TouchableOpacity>
            </View>
            <View>
              <FlatList

              
                data={this.state.services}
                contentContainerStyle={styles.servicesRowInner}
                renderItem={this.renderAltSlider.bind(this)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1F273E',
  },
  headerRow: {
    height: height * 0.06,
  },
  headerButton: {
    position: 'absolute',
    left: 10,
    height: height * 0.06,
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 32,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    color: 'white',
    fontFamily: 'roximaRegular',
	
  },
  newSlider: {
    marginHorizontal: 10,
    height: width * 0.45,
    width: width - 20,
    marginVertical: 5,
  },
  newSliderImg: {
    flex: 1,
    borderRadius: 11,
  },
  categoryContainer: {
    paddingBottom: 10,
    borderBottomColor: '#868996',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  categoryTitle: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontFamily: 'roximaRegular',
  },
  categoryAll: {
    color: 'grey',
    fontSize: 16,
  },
  categoryRowInner: {
    justifyContent: 'space-around',
    flex: 3,
  },
   categoryItemfont: {
    width: width * 0.27,
    height: width * 0.27,
    position: 'absolute',
    top: '50%',
    right: 0,
	color:'white',
	fontFamily:'Regular',
	fontSize:18,
	textAlign:'center',
    borderRadius: 11,
  },
  categoryItem: {
    flex: 1,
    padding: 8,
  },
  categorySubItem: {
    width: width * 0.26,
    height: width * 0.26,
  },
  categoryItemBack: {
    width: width * 0.24,
    height: width * 0.24,
    backgroundColor: '#363C53',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 11,
  },
  categoryItemImg: {
    width: width * 0.24,
    height: width * 0.24,
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 11,
  },
  servicesContainer: {
    marginBottom: 30,
    marginHorizontal: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  servicesTitle: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontFamily: 'roximaRegular',
  },
  servicesTitle2: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontFamily: 'roximaRegular',
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
    width: width * 0.32,
    height: width * 0.5,
    marginRight: 15,
    borderRadius: 11,
  },
  servicesItemBack: {
    width: width * 0.3,
    height: width * 0.48,
    backgroundColor: '#363C53',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 11,
  },
  servicesItemImg: {
    position: 'absolute',
    width: width * 0.3,
    height: width * 0.48,
    top: 0,
    right: 0,
    borderRadius: 11,
  },
 
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};

const mapDispatchToProps = {
  listRepos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
