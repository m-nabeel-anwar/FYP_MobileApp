
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

// Home.navigatiOnption=
// {
//     title:'Bus Arriver'
// }

const Home=({route,navigation})=>
{
    const { uid} = route.params;
    

const logoutuse=()=>{

    axios.get('http://127.0.0.1:8000/userlogout?uid='+uid)
    .then((req)=>{
        if(req.data.Check==="True")
        {
            clear_localstorage()
        navigation.navigate('Splash')
        }
 
    })
    .catch((err)=>{
        console.log(err)
    })
}

const clear_localstorage= async()=>
{
try
{
await AsyncStorage.removeItem('uid')
}
catch(e){
    console.log("Error occure when logout (Homescreen)")
}

}

    return(


        <View style={styles.container}>

            <View style={styles.header}>           
            <Image source={require('../Images/location-pin.png')} style={styles.imagee} resizeMode="stretch"/>
            <Text style={styles.headertext}>HOME</Text>
            
            </View>


            <Animatable.View  style={styles.footer}animation="fadeInUpBig">

                {/*Box1  touchable opacity baki hay*/}
                <View style={styles.boxcontainer}>

                
                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('FindRoute',{'uid':uid})}>

                 <View style={[styles.innercontent,{backgroundColor:'#48C9B0'}]}>
                 <Image source={require('../Images/placeholder.png')} style={styles.imagees} resizeMode="stretch"/>
                <Text style={styles.textstyle}>Find Route</Text>
                </View>

                 </TouchableOpacity>
                

                     {/*Box2*/}
                     <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('FindBus')}>
                

                 <View style={[styles.innercontent,{backgroundColor:'#626567'}]}>
                 <Image source={require('../Images/bus.png')} style={styles.imagees} resizeMode="stretch"/>
                <Text style={styles.textstyle}>Find Bus</Text>
                </View>

                </TouchableOpacity>
                 
                {/*Box3*/}
                    <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Feed',{'uid':uid})}>
                   
                    <View style={[styles.innercontent,{backgroundColor:'#99A3A4'}]}>
                    <Image source={require('../Images/rating.png')} style={styles.imagees} resizeMode="stretch"/>
                    <Text style={styles.textstyle}>Feedback</Text>
                    </View>

                  
                    </TouchableOpacity>
                    {/*4*/}
                    
                   <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('History',{'uid':uid})}>
                
                 <View style={[styles.innercontent,{backgroundColor:'#F4D03F'}]}>
                    <Image source={require('../Images/clock.png')} style={styles.imagees} resizeMode="stretch"/>

                <Text style={styles.textstyle}>History</Text>
                </View>
                </TouchableOpacity>
                

                {/* 5 box */}
                <TouchableOpacity style={styles.box} onPress={()=> navigation.navigate('Profile',{'uid':uid})}>
                
                <View style={[styles.innercontent,{backgroundColor:'#5DADE2'}]}>
                   <Image source={require('../Images/user2.png')} style={styles.imagees} resizeMode="stretch"/>

               <Text style={styles.textstyle}>Profile</Text>
               </View>
               </TouchableOpacity>
                 
                 {/* 6 */}

                 <TouchableOpacity style={styles.box} onPress={logoutuse}>

<View style={[styles.innercontent,{backgroundColor:'#AF7AC5'}]}>
   <Image source={require('../Images/logout.png')} style={styles.imagees} resizeMode="stretch"/>

<Text style={styles.textstyle} >Logout</Text>
</View>

</TouchableOpacity>                 




                </View>

            </Animatable.View>

        </View>
        
    );
}


export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor:'#566573'
      },
    
    header:{
    backgroundColor:'#566573',
    flex:1,
    
    
    }, 
    footer:{
        backgroundColor: '#fff',
        flex:2,
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
    fontSize:38,
    fontWeight:'bold',
    marginTop:-15

    //paddingTop:40,    
   // marginLeft:1

},
imagee:
{
    height:110,
    width:110,
   // marginLeft:40,
    marginLeft:130
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
     width:'92%',
     height:'80%',
     padding:5,
     flexDirection:'row',
     flexWrap:'wrap',
     
   },
box:{
    width:'47%',
    height:'46%',
    padding:9,
    marginLeft:6,
    
    
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
textstyle:{
    fontSize:17,
   // color:'#F2F3F4',
    textAlign:'center'
   // textAlign:'justify'
    
},

});