import React  from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,ImageBackground ,FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useState,useEffect} from 'react'
import axios from 'axios'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ArriverTime =({navigation,route})=> {

    const{busdata} = route.params;

    const [location,setlocation]=useState({Lat:parseFloat(24.8607),Lng:parseFloat(67.0011)})
    const[loading,isloading]=useState(true)
    const[businfo,setbusinfo]=useState({})
    const [errormessage,seterrormessage]=useState("Calculating Travel & Arrival Time....")

    // yaha pay api dal do taka bad may api say ae data or loader band ho jae
useEffect(()=>{
    // setTimeout(() => {
    //     // console.log(busdata)
    //     isloading(false)
    // }, 3000);
    const data={
        BusName:busdata.BusName,
        To:busdata.To,
        From:busdata.From,
        Distance:busdata.Distance

    }
    axios.post("http://127.0.0.1:8000/timeprediction",data)
    .then((req)=>{
        setbusinfo(req.data)
        isloading(false)
        setlocation({Lat:req.data.ToLat,Lng:req.data.ToLng})
        // console.log(busdata)
    })
    .catch((err)=>{
        isloading(true)
        seterrormessage("Network Error")
        console.log(err)
    })


},[])

    return (

<View style={{flex:1}}>
  { loading ?  

<View  style={styles.laoderstyle}>
    <ActivityIndicator size='large' width='90%' color='black'/>
    <Text style={{fontSize:20,color:'#515A5A'}} >{errormessage}</Text>
</View>:  


// loader uper hay main code necha hay

        <View style={styles.container}>
<View style={styles.header}>


<MapView
style={{height:'100%',width:'100%'}}
provider={PROVIDER_GOOGLE}
region={{
latitude: location.Lat ,  //24.8607
longitude:location.Lng , // 67.0011
latitudeDelta: 0.015,
longitudeDelta: 0.0121
}}
>


{/* polyline */}
<MapViewDirections
          origin={{ latitude : parseFloat(location.Lat) , longitude : parseFloat(location.Lng) }}
          destination={{ latitude : parseFloat(businfo.FromLat) , longitude : parseFloat(businfo.FromLng) }}
          apikey={"AIzaSyB3d8K8RS7KIo2AYUvDWsL6ip6kAdP6lFs"} 
          strokeWidth={4}
          strokeColor="green"
        />



<MapView.Marker
            coordinate={{ latitude : parseFloat(location.Lat) , longitude : parseFloat(location.Lng) }}
            >
                        <View>
                        <MaterialIcons name="subway" color='#C0392B' size={22}/>
            
                        </View>
            
              </MapView.Marker> 

              <MapView.Marker
            coordinate={{ latitude : parseFloat(businfo.FromLat) , longitude : parseFloat(businfo.FromLng) }}
            >
                        <View>
                        <MaterialIcons name="subway" color='#C0392B' size={22}/>
            
                        </View>
            
              </MapView.Marker>


              <MapView.Marker
            coordinate={{ latitude : parseFloat(businfo.BusLat) , longitude : parseFloat(businfo.BusLng) }}
            >
                      
                        <View style={styles.radius}>
                        <View  style={styles.marker}>
                        </View>
                        </View >
                       
            
              </MapView.Marker>




</MapView>

</View>
<View style={styles.footer}>
    <View style={styles.inerhead}>
        <Text style={styles.inertext}>Travelling Detail</Text>
        {/* <Text style={styles.inertext}>Detail</Text> */}
    </View>

   <View style={styles.body}>


       <View style={styles.bodytextview}>
           <Text style={styles.bodytext}>BusName:</Text>
           <Text style={styles.bodytext2}>{busdata.BusName}</Text>
       </View>


       <View style={styles.bodytextview}>
           <Text style={styles.bodytext}>Fare:</Text>
           <Text style={styles.bodytext2}>Rs:{busdata.Fare}</Text>
       </View>

       <View style={styles.bodytextview}>
           <Text style={styles.bodytext}>Distance:</Text>
           <Text style={styles.bodytext2}>{busdata.Distance} km</Text>
       </View>

       <View style={styles.bodytextview}>
           <Text style={styles.bodytext}>Travel Time:</Text>
           <Text style={styles.bodytext2}>{businfo.TravelTime}Min</Text>
       </View>
       <View style={styles.bodytextview}>
           <Text style={styles.bodytext}>Arrival Time:</Text>
           <Text style={styles.bodytext2}>{businfo.ArriverTime}Min</Text>
       </View>


   </View>

   <FlatList  data={busdata.List.length ===1 ? []: busdata.List} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>(

<TouchableOpacity  style={styles.liststyle} >
<View style={{flexDirection:'row'}}>
<Image source={require('../Images/pin.png')} style={{height:25,width:21,marginLeft:'2%',margin:5}} resizeMode="stretch"/>

<Text style={{fontSize:19,color:'#17202A',marginTop:7,marginEnd:'10%'}}>{item.split(',')[0]}</Text>

</View>
<View style={{ width: '80%', height: 2, backgroundColor: '#943126',marginLeft:'11%',marginBottom:2 }} />
</TouchableOpacity>

)}/>

</View>
      


        </View>
    }
        </View>
    )
}
export default ArriverTime;
const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor:'#FDFEFE'
      },
      header:{
        backgroundColor:'#566573',
        flex:2,
          
        },

      footer:{
        backgroundColor: '#D5D8DC',
        flex:2.7,
        borderTopLeftRadius:18,
        borderTopRightRadius:18,
       // paddingVertical:50,
       // paddingHorizontal:30,
        width:'96%',
        marginLeft:8,
        marginTop:3.2,
    },
  
    radius:{
      height:40,
      width:40,
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
    inerhead:
    {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#1E8449',
        height:40,
        borderColor:'#17202A',
        borderWidth:1.5,        
    },
    inerhead2:
    {
        alignItems:'center',
        marginTop:2.5,
        justifyContent:'center',
        backgroundColor:'#52BE80',
        height:23,
        borderColor:'#5DADE2',
        borderWidth:1.3,        
    },
    inertext:{
        fontSize:20,
        color:'#fff'
    },
    inertext2:{
        fontSize:20,
        color:'#fff'
    },
    body:{
        marginTop:5,
       backgroundColor:'#fff',
      
    
    },
bodytextview:{
    borderBottomWidth:1.5,
    borderColor:'black',
    justifyContent:'space-between',
    flexDirection:'row',
    
},
bodytext:
{
fontSize:17,
},

bodytext2:
{
fontSize:17,
color:'#D35400',
},

laoderstyle:{
height:'100%',
width:'100%',
alignItems:'center',
justifyContent:"center",
backgroundColor:'#D6DBDF'


},
liststyle:
{
 // alignItems:'center',
  backgroundColor: '#FBFCFC',         
  borderRadius:15,
  width:'96%',
  marginLeft:"2%",
  marginTop:3,
  marginBottom:3,


  shadowColor:'#17202A',
  shadowOffset:{height:5,width:5},
  shadowOpacity: 10,
  shadowRadius: 2,  
  elevation:10,
},

    })




    