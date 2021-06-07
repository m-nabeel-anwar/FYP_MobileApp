import React, { Component,useState,useEffect } from 'react'
import { StyleSheet, Text, View , TouchableOpacity,Image,Dimensions} from 'react-native';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
//import Geolocation from 'react-native-geolocation-service';
 import Geolocation from '@react-native-community/geolocation';
 import axios from 'axios'
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import AsyncStorage from '@react-native-community/async-storage';
 
    const Profile = ({route,navigation})=>
{

//  const [locationdata,setlocationdata] = useState({Lat:parseFloat(24.9099712) ,Lng:parseFloat(67.052975)})

 const [Lat,setLat]=useState(parseFloat(24.9099712))
 const [Lng,setLng]=useState(parseFloat(67.052975))

 const data=route.params

 const driverid= AsyncStorage.getItem('uid'); //change
useEffect(()=>{


  const watchId= setInterval(() => {

  Geolocation.getCurrentPosition((position)=>{

const Lat=parseFloat(position.coords.latitude)
const Lng=parseFloat(position.coords.longitude)
const Speed=parseFloat(position.coords.speed)



    var currentdata={
      Lat:Lat,
      Lng:Lng,
      Speed:Speed,
      BusName:data.BusName,
      NumberPlate:data.NumberPlate,
      Driverid:driverid // change
    }




if(currentdata!== null)
{
  // console.log(currentdata)

// axios.get('http://127.0.0.1:8000/getbuslocation',currentdata)
// .then(req=>
//   {
//     setlocationdata({...locationdata,Lat:req.data.Lat,Lng:req.data.Lng})

//   })
//   .then(err=>{console.log(err)})

checkdata(currentdata)

setLat(currentdata.Lat)
setLng(currentdata.Lng)
// setlocationdata({...locationdata,[Lat]:currentdata.Lat,[Lng]:currentdata.Lng})
 
 }

         },(error)=>alert("Open Your GPS current location"),
            {enableHighAccuracy:true, timeout:20000, maximumAge: 1000})
        

}, 12000);


return()=>
clearInterval(watchId)

},[])



 const checkdata=(currentdata)=>
{
  //console.log(currentdata)

  // console.log(Lat)
 

  axios.post('http://127.0.0.1:8000/getbuslocation',currentdata)
.then(req=>
  {
    // setlocationdata({...locationdata,Lat:req.data.Lat,Lng:req.data.Lng})

    // console.log(locationdata.Lat)
  })
  .catch(err=>{console.log(err)})
}





// npm install --save react-native-push-notification for notification







 
        return (
            <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
             
              region={{
                latitude: Lat, 
                longitude: Lng, 
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
              }}
              >
             
<MapView.Marker
coordinate={{ latitude : Lat , longitude :Lng}}
>
  <View style={styles.radius}>
    <View  style={styles.marker}>

    </View>
  </View >
  </MapView.Marker>


{/* e.g marker */} 
 {/* <MapView.Marker
coordinate={{ latitude : Lat , longitude :Lng}}
>
            <View>
            <MaterialIcons name="beenhere" color='#196F3D' size={25}/>

            </View>

  </MapView.Marker> */}





            </MapView>
          </View>
               
        );

      // }
   
}

export default Profile;



const styles = StyleSheet.create({

    header:{
        backgroundColor:'#566573',
        flex:1,
        height:'100%',width:'100%'
          
        },

        container: {
            ...StyleSheet.absoluteFillObject,
            height: '100%',
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          },
          map: {
            ...StyleSheet.absoluteFillObject,

          },
          imagee:
          {
            height:100,
            width:100,
          },
          radius:{
            height:50,
            width:50,
            borderRadius:50/2,
            overflow:'hidden',
            backgroundColor:'rgba(0,122,255,0.1)',
            borderWidth:1,
            borderColor:'rgba(0,112,255,0.3)',
            alignItems:'center',
            justifyContent:'center'

          },
          marker:{
            height:20,
            width:20,
            borderRadius:3,
            borderColor:'white',
            borderRadius:20/2,
            overflow:'hidden',
            backgroundColor:'#007AFF'

          },
       

    });