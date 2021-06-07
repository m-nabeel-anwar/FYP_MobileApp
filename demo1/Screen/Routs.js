
import React  from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,ImageBackground ,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useState,useEffect} from 'react'
import axios from 'axios'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import {ActivityIndicator} from 'react-native';
// import Marker from 'react-native-maps';
const Routs =({route,navigation})=> {

 
  const { Name } = route.params;
  // console.log(Name)
  const [location,setlocation]=useState({Lat:parseFloat(24.8607),Lng:parseFloat(67.0011)})

const [data,setdata]=useState([''])
const [pointer,setpointer]=useState([''])

const[loading,isloading]=useState(true)
const [loadingerror,setloadingerror]=useState("Loading...")
useEffect(()=>{

  axios.get('http://127.0.0.1:8000/showbusroute?Name='+Name)
.then((req)=>{
  
  
setdata(req.data)
setpointer(req.data)
isloading(false)
// console.log(req.data)




})



.catch((err)=>{
  setloadingerror("Network Error")
  isloading(true)
  console.log(err)
})

// Geolocation.getCurrentPosition((position)=>{

//   setlocation({...location,Lat:parseFloat(position.coords.latitude),Lng:parseFloat(position.coords.longitude)})

// },(error)=>alert("Open Your current location"),
//             {enableHighAccuracy:true, timeout:20000, maximumAge: 1000})

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
      latitude: location.Lat ,  //24.8607
      longitude:location.Lng , // 67.0011
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121
    }}
    >

{/* <MapView.marker coordinate={{ latitude : parseFloat(location.Lat) , longitude : parseFloat(location.Lng) }}>
  <View style={styles.radius}>
    <View style={styles.marker}>

    </View>
  </View>
</MapView.marker> */}


       { pointer !==null ?  pointer.map((marker, index) => (
        
          // <MapView.Marker
          //       key={index}
          //       coordinate={{ latitude : parseFloat(marker.Lat) , longitude : parseFloat(marker.Lng) }}
          //       // title={marker.title}
          //       // description={marker.description}
               
          //     />

              <MapView.Marker
              key={index}
            coordinate={{ latitude : parseFloat(marker.Lat) , longitude : parseFloat(marker.Lng) }}
            >
                        <View>
                        <MaterialIcons name="subway" color='#C0392B' size={20}/>
            
                        </View>
            
              </MapView.Marker> 





            ))   :null  }
            
              

    </MapView>
   
   
    </View>




    <View style={styles.footer}>

    <View style={{ width: '50%', height: 4, backgroundColor: '#943126',marginLeft:'25%',marginBottom:5 ,marginTop:10}} />

<FlatList  data={data.length ===1 ? []: data} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>(

    <TouchableOpacity  style={styles.liststyle} >
  <View style={{flexDirection:'row'}}>
<Image source={require('../Images/pin.png')} style={{height:25,width:21,marginLeft:'2%',margin:5}} resizeMode="stretch"/>

<Text style={{fontSize:20,color:'#17202A',marginTop:10,marginEnd:"8%"}}>{item.Name.split(',')[0]}</Text>

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
    backgroundColor:'#FDFEFE'
      },
      header:{
        backgroundColor:'#566573',
        flex:2,
          
        },

      footer:{
        backgroundColor: '#D5D8DC',
        flex:2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
       // paddingVertical:50,
       // paddingHorizontal:30,
        width:'95%',
        marginLeft:10,
        marginTop:3,
    },
    liststyle:
    {
     // alignItems:'center',
      backgroundColor: '#FBFCFC',         
      borderRadius:15,
      width:'95%',
      marginLeft:"2%",
      marginTop:3,
      marginBottom:3,


      shadowColor:'#17202A',
      shadowOffset:{height:5,width:5},
      shadowOpacity: 10,
      shadowRadius: 2,  
      elevation:10,
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
laoderstyle:{
height:'100%',
width:'100%',
alignItems:'center',
justifyContent:"center",
backgroundColor:'#D6DBDF'


}
    })