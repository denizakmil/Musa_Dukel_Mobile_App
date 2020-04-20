import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,Button,Linking 
} from 'react-native';
import email from 'react-native-email';
import { Icon } from 'react-native-material-ui';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
export default class Profile extends Component {
	
	  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
         'Regular': require('./assets/Regular.ttf'),
         'Bold': require('./assets/Bold.ttf'),
      });
      this.setState({ fontLoaded: true });
    })();
  }
	
	

  render() {
    return (
      <View style={styles.container}>
	  
          <View style={styles.header}>
		              <Text style={styles.headerTitle}>Musa Dükel Tattoo Studio</Text>

		  </View>
          <Image style={styles.avatar} source={{uri: 'https://pbs.twimg.com/profile_images/661528083703418880/PaQe2B98_400x400.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Musa Dükel</Text>
              <Text style={styles.info}>Tattoo Artist</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={() => { Linking.openURL("https://www.google.com/maps/dir//musa+d%C3%BCkel+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cacf4c8ef001d9:0xffd6b8c6db9be3b0?sa=X&ved=2ahUKEwiBhcKk8I3oAhVnzcQBHffSApcQ9RcwFHoECB4QEQ")}}>
                <Text  style={styles.buttonContainerbaslık}>Address Description</Text>  
              </TouchableOpacity>    
                <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>          
             

			 <TouchableOpacity style={styles.buttonContainer} onPress={this.handleEmail}>
      <Text  style={styles.buttonContainerbaslık}>Contact Us</Text> 
              </TouchableOpacity>
			  		
		
        <Text style={styles.headerTitles}>Phone : (+90) 553 325 91 55</Text>
            </View>
        </View>
      </View>
    );
  }
  
  
  handleEmail = () => {
    const to = ['adliyetattoo1@gmail.com']; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      // bcc: 'mee@mee.com', // string or array of email addresses
      subject: "Attention of the Musa",
      body: '',
    }).catch(console.error);
  };
  
}

const styles = StyleSheet.create({
	  headerTitle: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    color: 'white',
    fontFamily: 'roximaRegular',
	
  },
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