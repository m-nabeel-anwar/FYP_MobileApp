

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image} from 'react-native';
// map k lea
import MapView ,{Marker}from 'react-native-maps';

const Map=({navigation})=>
{
   return(
<View style={styles.container}>
    <Text>map area</Text>
    <MapView style={styles.map} initialRegion={{latitude:24.8607,longitude:67.0011}}>
    <Marker  coordinate={{latitude:24.8607,longitude:67.0011}} title='karachi'/> 
    </MapView>
</View>

   );
}
export default Map;
 const styles= StyleSheet.create({

container:{
flex:1,
 justifyContent:'center',
 textAlign:'center',
 // is line say pori screen cover hogi
 //...StyleSheet.absoluteFillObject,
},
map:{
height:'30%',
width:'100%',
},
 });