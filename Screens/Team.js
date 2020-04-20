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
} from 'react-native';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:0, phone:"0532 321 00 00", name: "Musa Dükel",   position:"Potrait Tattoo Artist",               image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:1,phone:"0532 321 00 00", name: "Çağlar",   position:"OldScholl Tattoo Artist",               image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:2,phone:"0532 321 00 00", name: "Clark Man",  position:"Minimal Tattoo Artist", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
  
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name,item.phone)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://pngimage.net/wp-content/uploads/2018/06/tattoo-machine-vector-png.png"}}/>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Details</Text>  
                    </TouchableOpacity>
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
	
	backgroundColor:'#1F273E'
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#1F273E",
  },
  listContainer:{
   alignItems:'center',
   
	backgroundColor:'#1F273E'
  },
  /******** card **************/
  card:{
	  marginTop:20,
	  borderRadius:10,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#1F273E",
    borderWidth:3,
	
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#1F273E",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#1F273E",
  },
  followButtonText:{
    color: "#1F273E",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     