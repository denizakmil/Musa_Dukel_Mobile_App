import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,ScrollView,
  TouchableOpacity,Linking
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://pbs.twimg.com/profile_images/661528083703418880/PaQe2B98_400x400.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Social Medias</Text>
			  
              <Text style={styles.description}>Our Social Media Channels </Text>
                            <Text style={styles.info}>Follow Us</Text>

              <TouchableOpacity style={styles.buttonContainer}	onPress={ ()=>{ Linking.openURL('https://www.instagram.com/musadukel/?hl=tr')}}	>
                <Text>Instagram</Text>  
              </TouchableOpacity>       
			  
              <TouchableOpacity style={styles.buttonContainer}	onPress={ ()=>{ Linking.openURL('https://www.google.com/search?q=musa+dukel+businiess+site&oq=musa+dukel+businiess+site&aqs=chrome..69i57.7040j0j4&sourceid=chrome&ie=UTF-8')}}	>
                <Text>Search Musa Dükel</Text> 
              </TouchableOpacity>
			  
			  <TouchableOpacity style={styles.buttonContainer} onPress={ ()=>{ Linking.openURL('https://www.facebook.com/adliyetattoo/')}}	>
                <Text>Facebook</Text>
              </TouchableOpacity>
			  
			  <TouchableOpacity style={styles.buttonContainer}	onPress={ ()=>{ Linking.openURL('https://inkonsky.com/Musadukel')}}	>
                <Text>Inkonsky</Text> 
				
              </TouchableOpacity>
			  
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1F273E",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
		fontFamily:'Regular'

  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
 fontFamily:'Bold'

	
  },
  info:{
    fontSize:16,
    color: "#1F273E",
    marginTop:10,
	fontFamily:'Regular'
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
		fontFamily:'Regular'

  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1F273E",
  }, 
  buttonContainerbaslık: {
   fontSize:16,
    color: "white",
    //marginTop:10,
	fontFamily:'Bold'
  },
});