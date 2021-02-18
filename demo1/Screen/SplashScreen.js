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
import AsyncStorage from '@react-native-community/async-storage'
//MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);

const SplashScreen = ({navigation}) =>
{
    const Login_Varification = async()=>{

        try{
          uid= await AsyncStorage.getItem('uid')
         
          if(uid!=null)
          {
            navigation.navigate('Home',{'uid':uid})
          }
          else
          {
            navigation.navigate('SignIn')
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
    <Text style={{ color:'#fff',fontSize:35,fontWeight:'bold'}}>Bus Arriver</Text>
    </View>
    < Animatable.View style={styless.footer} animation="fadeInUpBig">
   <Text style={styless.tittle}>We are here for You</Text>
   <Text style={styless.text}> Enjoy Your Ride</Text>

   <View style={styless.button}>
   {/* <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}> */}
   <TouchableOpacity onPress={Login_Varification}>
       <LinearGradient
       colors={['#D5DBDB','#808B96']}
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

//const{height}=Dimensions.get('screen');
// device ki 28% height hay hay
//const height_logo = height*0.2;

const styless= StyleSheet.create({

container:
{
flex:1,
backgroundColor:'#566573'
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
width:170,
height:170,
},

tittle:
{
    color:'#05375a',
    fontSize:30,
    fontWeight:'bold'
},
text:
{
color:'grey',
marginTop:5,
fontSize:20,
},

button:
{
    alignItems:'flex-end',
    marginTop:30
},

signin:
{
    width:170,
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
fontSize:25,
},

});

//npm install @react-navigation/native // for navigation
//dependance
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
//import 'react-native-gesture-handler'; // in app .js file
//npm install @react-navigation/stack // stack navigation

//npm install --save react-native-vector-icons
//npm install react-native-linear-gradient --save
//npm install react-native-animatable --save
//https://www.npmjs.com/package/react-native-vector-icons   (icon links)

//https://github.com/react-native-community/react-native-linear-gradient     color butten k et kro in shaded form
//  https://github.com/oblador/react-native-animatable          animation link

//https://www.youtube.com/watch?v=B75yZwYS4z8&ab_channel=PradipDebnath // vector icon setting