import React ,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import {ActivityIndicator} from 'react-native';
const HomeScreen=({route,navigation})=>
{
    const { uid} = route.params;
    const { Status} = route.params;
    // console.log(uid)
    // console.log(Status)

const [data,setdata]=useState({})

const[loading,isloading]=useState(false)
const [loadingerror,setloadingerror]=useState("Loading...")

const authentication =(value)=>
{

    if(Status==="Assign")
    {
            axios.get('http://127.0.0.1:8000/getsinglederiver?uid='+uid)
            .then((request)=>{

                setdata(request.data)
                    if(request.data)
                
                    {

                navigation.navigate(value,request.data)

                    }

                    })
                    .catch((err)=>{
                    console.log(err)
                    })

            // navigation.navigate(value,{"Status":Status,"uid":uid})

    }
    else
    {
        if(value=="Profile")
        {

        axios.get('http://127.0.0.1:8000/getdriver?uid='+uid)
        .then((request)=>{
        
            setdata(request.data)
                    if(request.data)
                
                    {

                navigation.navigate(value,request.data)

                    }

        
        })
        .catch((err)=>{console.log(err)})
        // navigation.navigate(value,{"Status":Status,"uid":uid})
        }
        else
        {
            alert("Bus is not assign..!")
        }



    }

}

const logoutuse=()=>{

    isloading(true)
    axios.get('http://127.0.0.1:8000/Driverlogout?uid='+uid)
    .then((req)=>{
        if(req.data.Check==="True")
        {
            clear_storage() // clear local storage when logout 
            isloading(false)
        navigation.navigate('Splash')
        }
 
    })
    .catch((err)=>{
        isloading(true)
        setloadingerror("Network Error...")
        console.log(err)
    })
}

// for clearing the local storage
clear_storage=async()=>
{
    try{
        await AsyncStorage.removeItem('uid')
        await AsyncStorage.removeItem('Status')

    }
    catch(e)
    {
        console.log("Error in clear storeage (Home)")
    }
}


    return(

        <View style={{flex:1}}>
        { loading ?  
      
      <View  style={styles.laoderstyle}>
          <ActivityIndicator size='large' width='90%' color='black'/>
          <Text style={{fontSize:25,color:'#515A5A'}} >{loadingerror}</Text>
      </View>:


        <View style={styles.container}>

            <View style={styles.header}> 
            <View  style={{flexDirection:'row'}}>
            <Image source={require('../Images/location-pin.png')} style={styles.imagee} resizeMode="stretch"/>

            <Text style={styles.headertext}>HOME</Text>
            </View>
            </View>


            <Animatable.View style={styles.footer} animation="fadeInUpBig">

                {/*Box1  touchable opacity baki hay*/}
                
                <View style={styles.boxcontainer}>

                {/* ()=>navigation.navigate('Map') */}
<TouchableOpacity style={styles.box} onPress={e=>{authentication("Map")}}>     
                 <View style={[styles.innercontent,{backgroundColor:'#48C9B0'}]}>
                 <Image source={require('../Images/placeholder.png')} style={styles.imagees} resizeMode="stretch"/>
                <Text>View Route</Text>
                </View>
                </TouchableOpacity>
                

                     {/*Box2*/}
                     {/* ()=>navigation.navigate('Routs',{'Name':"W11"}) */}
                     <TouchableOpacity style={styles.box} onPress={e=>{authentication("Routs")}} >

                 <View style={[styles.innercontent,{backgroundColor:'#A04000'}]}>
                 <Image source={require('../Images/bus.png')} style={styles.imagees} resizeMode="stretch"/>
                <Text>Find Stops</Text>
                </View>
</TouchableOpacity>

               

                {/*Box3*/}

                <TouchableOpacity style={styles.box}  onPress={e=>{authentication("Profile")}}>

                    <View style={[styles.innercontent,{backgroundColor:'#808000'}]}>
                    <Image source={require('../Images/candidate.png')} style={styles.imagees} resizeMode="stretch"/>
                    <Text>Profile</Text>
                    </View>

                    </TouchableOpacity>

                    {/*4*/}
                    
                    <TouchableOpacity style={styles.box} onPress={e=>{navigation.navigate('salary',{'uid':uid})}}>

                 <View style={[styles.innercontent,{backgroundColor:'#F4D03F'}]}>
                    <Image source={require('../Images/clock.png')} style={styles.imagees} resizeMode="stretch"/>

                <Text>Payments</Text>
                </View>

                 </TouchableOpacity>

                {/* 5 */}
                
                {/* <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('signin')}} > */}
                <TouchableOpacity style={styles.box} onPress={logoutuse} >
<View style={[styles.innercontent,{backgroundColor:'#A569BD'}]}>
   <Image source={require('../Images/logout.png')} style={styles.imagees} resizeMode="stretch"/>

<Text>Logout</Text>
</View>

</TouchableOpacity>




                </View>

                </Animatable.View>

        </View>}
        </View>
        
    );
}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor:'#1C2833'
      },
    
    header:{
    backgroundColor:'#1C2833',
    flex:1,
    
    
    }, 
    footer:{
        backgroundColor: '#fff',
        flex:3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingTop:20,
        paddingHorizontal:30
    },

    headertext:
{
    textAlign:"center",
    justifyContent:"center",
    color:"#FFFFFF",
    fontSize:35,
    fontWeight:'bold',
    paddingTop:40,    
    marginLeft:1

},
imagee:
{
    height:75,
    width:75,
    marginTop:25,
    marginLeft:15
   // borderRadius:30
},

imagees:
{
    height:50,
    width:50,
    //marginTop:25,
    //marginLeft:20
   // borderRadius:30
},

// box setting

boxcontainer: {
    // flex: 1,
     width:'100%',
     height:'90%',
     padding:5,
     flexDirection:'row',
     flexWrap:'wrap',
     
   },
box:{
    width:'46%',
    height:'40%',
    padding:10,
    marginLeft:10,
    
    
},
innercontent:
{
    flex:1, // x and y axis of the box
    backgroundColor:'#eee',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:30,
    //shadow
    shadowColor:'#000',
shadowOffset:{height:2,width:2},
shadowOpacity: 0.8,
shadowRadius: 2,  
elevation: 8,
},
    laoderstyle:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'#D6DBDF'
  
    }




});