import React, { Component } from 'react';
import { StyleSheet, View, Text,Image,Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
 import {OptimizedFlatList} from 'react-native-optimized-flatlist'
const { width, height } = Dimensions.get('window');

export default class Example extends Component {
	  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    error: null
  }; 

 // fetch beer request and update state from earlier on

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true
      }),
      () => {
        this._fetchAllBeers();
      }
    );
  };
  render() {
	  
									const items = [
							{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(1).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(2).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(3).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(4).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(5).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(6).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(7).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(8).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(9).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(31).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(32).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(33).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(34).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(35).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(36).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(37).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(38).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(39).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(40).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(41).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(42).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(43).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(44).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(45).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(46).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(47).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(48).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(49).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(50).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(51).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(52).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(53).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(54).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(55).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(56).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(57).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(58).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(59).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(60).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(61).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(62).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(63).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(64).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(65).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(66).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(67).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(68).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(69).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(70).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(71).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(72).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(73).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(74).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(75).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(76).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(77).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(78).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(79).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(80).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(81).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(82).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(83).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(84).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(85).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(86).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(87).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(88).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(89).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(90).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(91).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(92).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(93).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(94).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(95).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(96).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(97).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(98).jpeg" }, 
				{ uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(99).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(101).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(102).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(103).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(104).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(105).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(106).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(107).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(108).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(109).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(110).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(111).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(112).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(113).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(114).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(115).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(116).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(117).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(118).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(119).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(120).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(121).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(122).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(123).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(124).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(125).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(126).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(127).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(128).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(129).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(130).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(131).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(132).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(133).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(134).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(135).jpeg" }, 
				{uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(136).jpeg" }, 
								
	
	];
 
    return (
	   <View style={styles.cont}>
      <FlatGrid
         items={items}
            style={styles.gridView}
      
		   spacing={4}
		   
			onEndReached={this._handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
				
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer,  ]}>
              <Image
                source={{ uri: item.uri }}
                style={styles.itemContainer}
				              />   
              
          </View>
        )}
		
      />
	  </View>
    );
	
	
  }
}
 
const styles = StyleSheet.create({
 gridView: {
    marginTop: 20,
    flex: 1,
	    backgroundColor:"#1F273E",

  },
  itemContainer: {
    justifyContent: 'flex-end',
    //    borderRadius: 5,
    //    padding: 10,
    margin: 2,

    //   width: width*0.5,
    height: width * 0.75,
  },
  
 imageView: {
    flex: 1,
	    backgroundColor:"#1F273E",

    borderRadius: 7,
    resizeMode: 'cover',
  },
   cont: {
    flex: 1,
	    backgroundColor:"#1F273E",

     resizeMode: 'cover',
  },
});
 