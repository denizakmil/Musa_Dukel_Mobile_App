import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/1.jpg"},
        {id:2, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/2.jpg"},
        {id:3, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/3.jpg"},
        {id:4, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/4.jpg"},
        {id:5, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/5.jpg"},
        {id:6, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/6.jpg"},
        {id:7, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/7.jpg"},
        {id:8, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/8.jpg"},
        {id:9, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/9.jpg"},
        {id:10, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/10.jpg"},
        {id:11, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/11.jpg"},
        {id:12, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/12.jpg"},
        {id:13, title: "Lorem ipsum dolor",                  time:"1 days a go",    image:"http://siteotomasyonu.com/musadukelapi/story/13.jpg"},


      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity>
                <View style={styles.card}>

                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardContent}>
                  

                   

                 
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
	    backgroundColor:"#1F273E",

  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderWidth: 1,
    backgroundColor:"#1F273E",
    backgroundColor:"#1F273E",
	    height: height /3,
   width: width ,
	
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
   width: width * 0.27,
    height: width * 0.27,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
		resizeMode:'center',
		   width: width,

  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  