import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
import {
  FlexibleTabBarComponent,
  withCustomStyle,
} from 'react-navigation-custom-bottom-tab-component/FlexibleTabBarComponent';
import { Icon } from 'react-native-material-ui';
import { MaterialIcons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import axios from 'axios';
import { createSwitchNavigator } from 'react-navigation';

import axiosMiddleware from 'redux-axios-middleware';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

import reducer from './reducer';
import RepoList from './RepoList';
import RepoDetail from './RepoDetail';
import Randevu from './Profile';

//Kategori import
import Kategori_list_home from './Screens/Kategori_list_home';
import Kategori_list_details from './Screens/Kategori_list_details';
//Servis import
import Servis_list_details from './Screens/Servis_list_details';
import Servis_list_details_details from './Screens/Servis_list_details_details';

import Instagram from './Screens/Instagram';
import Team from './Screens/Team';
import Studio from './Screens/Studio';
import Customers from './Screens/Customers';
import Customer_photos from './Screens/Customer_photos';

const store = createStore(reducer, applyMiddleware(axiosMiddleware()));

const Tabs = createBottomTabNavigator(
  {
	  
	  
    Home: {
      screen: RepoList,
     
      navigationOptions: {
		  
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={25} color={'#1F273E'} />
        ),
      },
     
    },
     
    Randevu: {
      screen: Randevu,
    
      navigationOptions: {
		  
        tabBarLabel: 'Appointment',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-list" size={25} color={tintColor} />
        ),
      },
     
    },  
  },

    {
    tabBarComponent: withCustomStyle({
      style: {
        backgroundColor: '#1F273E',
      },
      labelStyle: {
        fontSize: 22,
        flex: 1,
        fontFamily: 'roximaRegular',
      },
    })(FlexibleTabBarComponent),
    tabBarOptions: {
      activeTintColor: '#1F273E',
      //activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },}
   
);

const MainStack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Detail: {
    screen: RepoDetail,
    navigationOptions: {
				    title: 'Home',

      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'roximaRegular',
      },
      headerTintColor: '#ffffff',
    },
  },
  Kategori_list_home: {
    screen: Kategori_list_home,
     navigationOptions: {
		    title: 'Home',
      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'roximaRegular',
      },
      headerTintColor: '#ffffff',
    },
  },
  Kategori_list_details: {
    screen: Kategori_list_details,
    navigationOptions: {
		    title: 'Home',

      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'roximaRegular',
      },
      headerTintColor: '#ffffff',
    },
  },
  Servis_list_details: {
    screen: Servis_list_details,
    navigationOptions: {
      headerStyle: {
		  
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'roximaRegular',
      },
      headerTintColor: '#ffffff',
    },
  },
  Servis_list_details_details: {
    screen: Servis_list_details_details,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
		
      },
      headerTintColor: '#ffffff',
    },
  },
  Instagram: {
    screen: Instagram,
	
	   navigationOptions: {
		    title: 'Social Media',
    
	headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
		
      },
      headerTintColor: '#ffffff',
    },
  }, 
  Team: {
    screen: Team,
	   navigationOptions: {
		   		    title: 'Staff',

      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
      headerTitleStyle: {
        fontSize: 24,
      },
      headerTintColor: '#ffffff',
    },
  },
  Studio: {
    screen: Studio,
	   navigationOptions: {
      headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
	  
      headerTitleStyle: {
        fontSize: 24,
      },
	  
      headerTintColor: '#ffffff',
    },
  },  
  Customers: {
    screen: Customers,
	   navigationOptions: {
  title: 'Customer Feedbacks',
  headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
	  
      headerTitleStyle: {
        fontSize: 24,
      },
	  
      headerTintColor: '#ffffff',
	  
    },
  },
  Customer_photos: {
    screen: Customer_photos,
	   navigationOptions: {
  title: 'Customer Photos',
  headerStyle: {
        backgroundColor: '#1F273E',
        height: 55,
      },
	  
      headerTitleStyle: {
        fontSize: 24,
      },
	  
      headerTintColor: '#ffffff',
    },
  },
});

const AppContainer = createAppContainer(MainStack);

export default class App extends Component {
  componentDidMount() {
    (async () => {
      await Font.loadAsync({
        ...MaterialIcons.font,
        roximaRegular: require('./assets/roximaRegular.otf'),
		
		    'Regular': require('./assets/Regular.ttf'),
        'Bold': require('./assets/Bold.ttf'),
        'Bignoodletoo': require('./assets/bignoodletoo.ttf'),
		    
      });
      this.setState({ fontLoaded: true });
    })();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
