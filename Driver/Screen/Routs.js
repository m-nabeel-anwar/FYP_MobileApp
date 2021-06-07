import React  from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,ImageBackground ,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useState,useEffect} from 'react'
import axios from 'axios'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ActivityIndicator} from 'react-native';

const Routs =({route,navigation})=> {

 
  // const { Name } = route.params;
  // // console.log(Name)
 
  const data=route.params
  // const {Bus}=route.params
// const Name="W11"
const [dataa,setdataa]=useState([])
const [location,setlocation]=useState({Lat:parseFloat(24.8607),Lng:parseFloat(67.0011)})

const[loading,isloading]=useState(true)
const [loadingerror,setloadingerror]=useState("Loading...")

useEffect(()=>{


  axios.get('http://127.0.0.1:8000/showbusroute?Name='+data.BusName) //
.then((req)=>{
  
setdataa(req.data)
isloading(false)
Geolocation.getCurrentPosition((position)=>{

  setlocation({...location,Lat:parseFloat(position.coords.latitude),Lng:parseFloat(position.coords.longitude)})

},(error)=>alert("Open Your current location"),
            {enableHighAccuracy:true, timeout:20000, maximumAge: 1000})

})

.catch((err)=>{
  isloading(true)
  setloadingerror("Network Error...")
  console.log(err)
})

},[])



// console.log(data)
  return (

    <View style={{flex:1}}>
    { loading ?  
  
  <View  style={styles.laoderstyle}>
      <ActivityIndicator size='large' width='90%' color='black'/>
      <Text style={{fontSize:25,color:'#515A5A'}} >{loadingerror}</Text>
  </View>:

      <View style={styles.container}>


<View style={styles.header}>
{/* <ImageBackground source={require('../Images/map.png')} style={{height:'100%',width:'100%'}} resizeMode="stretch"/> */}
<MapView
style={{height:'100%',width:'100%'}}
    provider={PROVIDER_GOOGLE}
    region={{
      latitude:location.Lat,  //24.8607
      longitude:location.Lng,  //67.0011
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    }}
    >
      

    {dataa.map((marker, index) => (
     
          // <MapView.Marker
          //       key={index}
          //       coordinate={{ latitude : parseFloat(marker.Lat) , longitude : parseFloat(marker.Lng) }}

               
          //     />

  <MapView.Marker
  key={index}
coordinate={{ latitude : parseFloat(marker.Lat) , longitude : parseFloat(marker.Lng) }}
>
            <View>
            <MaterialIcons name="subway" color='#C0392B' size={20}/>

            </View>

  </MapView.Marker> 

              
            ))}
    </MapView>
    

   
   
    </View>

    <View style={styles.footer}>

    <View style={{ width: '50%', height: 4, backgroundColor: '#943126',marginLeft:'25%',marginBottom:5 ,marginTop:10}} />

<FlatList  data={dataa.length ===1 ? []: dataa} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>(
    <TouchableOpacity  style={styles.liststyle} >
  <View style={{flexDirection:'row'}}>
<Image source={require('../Images/pin.png')} style={{height:35,width:20,marginLeft:'2%',margin:5}} resizeMode="stretch"/>

<Text style={{fontSize:20,color:'#17202A',marginTop:10,marginEnd:10}}>{item.Name.split(',')[0]}</Text>

</View>
<View style={{ width: '80%', height: 2, backgroundColor: '#943126',marginLeft:'11%',marginBottom:2 }} />
  </TouchableOpacity>

)}/>


    </View>

      </View>
      }
      </View>
  );
}



export default Routs;

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor:'#424949'
      },
      header:{
        backgroundColor:'#566573',
        flex:2,
          
        },

      footer:{
        backgroundColor: '#E5E7E9',
        flex:2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
       // paddingVertical:50,
       // paddingHorizontal:30,
        width:'95%',
        marginLeft:10,
        marginTop:5,
    },
    liststyle:
    {
     // alignItems:'center',
      backgroundColor: '#FBFCFC',         
      borderRadius:15,
      width:'90%',
      marginLeft:"5%",
      marginTop:3,
      marginBottom:3,


      shadowColor:'#17202A',
      shadowOffset:{height:5,width:5},
      shadowOpacity: 10,
      shadowRadius: 2,  
      elevation:10,
    },

    laoderstyle:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#D6DBDF'
    
    
    }
    })