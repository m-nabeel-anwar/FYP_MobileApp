import React from 'react';
import {StyleSheet,
    Text,
    View,
     Dimensions,
     Image,
     TouchableOpacity
    } from 'react-native';

import LinearGradient from 'react-native-linear-gradient'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
import AsyncStorage from '@react-native-community/async-storage';
import {useEffect} from 'react';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
 
const SplashScreen = ({navigation}) =>
{


// useEffect(()=>{
//     saveData()
// })

//     const saveData = async () => {
//         try {

//           await AsyncStorage.setItem('Mykey','Nabeel')
//         //   alert('Data successfully saved')
//         console.log("......In Data save")
//         } catch (e) {
//           alert('Failed to save the data to the storage')
//         }
//       }

// const readData = async () => {
//     try {
   
//       const mykeyvale = await AsyncStorage.getItem('Mykey') 
//     //   console.log(mykeyvale)
//       if (mykeyvale !== null) {
//         // setAge(userAge)
//         console.log(mykeyvale)
     
//         navigation.navigate('signin')
//       }
//     } catch (e) {
//       alert('Failed to fetch the data from storage')
//     }
    
//   }


// when user logout use this line of code
// const onlogout=async()=>{

//     try{
//         await AsyncStorage.removeItem('Mykey')
//         console.log("Key removed")
//     }
//     catch
//     {
// console.log("Token not remove")
//     }

// }


const Login_Varification = async()=>{

  try{
    uid = await AsyncStorage.getItem('uid')
    Status = await AsyncStorage.getItem('Status')
    if(uid !=null && Status !=null)
    {
      console.log(uid+" "+Status)
      navigation.navigate('Home',{'uid':uid,'Status':Status})
      // navigation.navigate('signin')
    }
    else
    {
      navigation.navigate('signin')
    }

  }
  catch(e)
  {
    console.log("Error in checing login (SplashScreen.js)")

  }
}
   

      
    
    return(

   <View style={styless.container}>
<View style={styless.header}>

    < Animatable.Image 
    animation="bounceIn"
    duraton="1500"
    source={require('../Images/Logo.png')} 
    style={styless.logo} 
    resizeMode="stretch"
    />
    <Text style={styless.tittle2}>Bus Arriver</Text>
    </View>
    < Animatable.View style={styless.footer} animation="fadeInUpBig">
   <Text style={styless.tittle}>Be Careful..!</Text>
   <Text style={styless.text}>Drive Safe Life Safe</Text>
   <View style={styless.button}>
   {/* <TouchableOpacity onPress={()=>navigation.navigate('signin')}> */}
   <TouchableOpacity onPress={()=>Login_Varification()}>
       <LinearGradient
       colors={['#3498DB','#1C2833']}
       style={styless.signin}
       >

           <Text style={styless.textsign}>Click Here</Text>
           <MaterialIcons name="navigate-next" color='#fff' size={30}/>
           </LinearGradient>
   </TouchableOpacity>
        </View>

        </Animatable.View>
    </View>
    
    );
    
};
export default SplashScreen;

const{height}=Dimensions.get('screen');
// device ki 28% height hay hay
const height_logo = height*0.2;

const styless= StyleSheet.create({

container:
{
flex:1,
backgroundColor:'#1C2833'
},

header:
{
    // ya yaha say screen ka 2 3rd hisa hoa hay
    flex:2,
    justifyContent:'center',
    alignItems:'center'
},

footer:
{
    // yah say screenka 1 3rd hoa hay
flex:1,
backgroundColor:'#fff',
borderTopLeftRadius:30,
borderTopRightRadius:30,
paddingVertical:50,
paddingHorizontal:30

},


logo:
{
width:height_logo,
height:height_logo
},

tittle:
{
    color:'#05375a',
    fontSize:30,
    fontWeight:'bold'
},
tittle2:
{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold'
},
text:
{
color:'grey',
marginTop:5,
fontSize:20
},

button:
{
    alignItems:'flex-end',
    marginTop:30
},

signin:
{
    width:180,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    flexDirection:'row'     
},
textsign:
{
color:'white',
fontWeight:'bold',
fontSize:18
},

});