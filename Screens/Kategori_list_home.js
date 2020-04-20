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
 
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
class RepoDetail extends Component {
  state = { categoryDetail: [] };
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
         'roximaRegular': require('../assets/roximaRegular.otf'),

      });
      this.setState({ fontLoaded: true });
    })();
    axios
      .get(
        'http://siteotomasyonu.com/musadukelapi/api/categories/32776372656174697665/list/'
      )
      .then(response => this.setState({ categoryDetail: response.data.data }));
  }

  constructor(props) {
    super(props);
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderKategoriItem({ item, index }) {
    if (item.status == 1 && item.is_visible == 1) {
      return (
        <View style={styles.categoryItem}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(item.slug, {
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
 

  static navigationOptions = ({ navigation }) => ({
    title:'Musa Dükel'
  });

  render() {
    const { repoInfo, loadingInfo } = this.state;
    if (loadingInfo) return <Text>Loading...</Text>;

    return (
      <ScrollView style={styles.body}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryTitle}>Tattoo Categories</Text>
          </View>
          <ScrollView>
            <View>
              <FlatList
                //  data={this.kategori}
                pagingEnabled={true}
                data={this.state.categoryDetail}
                contentContainerStyle={styles.categoryRowInner}
                renderItem={this.renderKategoriItem.bind(this)}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>

          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo,categoryDetail }) => ({
  repoInfo,
  loadingInfo,
  categoryDetail,
});

const mapDispatchToProps = {
  getRepoDetail,
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1F273E',
  },

  categoryContainer: {
    paddingBottom: 10,
    //borderBottomColor: '#868996',
    //borderBottomWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#1F273E',
  },
  categoryRow: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  categoryTitle: {
    flex: 1,
    color: 'white',
    fontFamily: 'roximaRegular',
	fontSize:20,
	marginBottom:10,
	marginTop:5
  },

  categoryRowInner: {
    justifyContent: 'space-around',
    flex: 3,
  },
  categoryItem: {
    flex: 1,
    padding: 2,
  },

  categorySubItem: {
    height: width * 0.3,
	
  },
  categoryItemBack: {
    width: width * 0.27,
    height: width * 0.27,
    backgroundColor: '#363C53',
    position: 'absolute',
    bottom: 2,
    left: 2,
    borderRadius: 11,
  },
  categoryItemImg: {
    width: width * 0.27,
    height: width * 0.27,
    position: 'absolute',
    top: 2,
    right: 2,
    borderRadius: 11,
  },
  categoryItemfont: {
    width: width * 0.27,
    height: width * 0.27,
    position: 'absolute',
    top: '48%',
    right: 0,
	textAlign:'center',

    borderRadius: 11,
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoDetail);
