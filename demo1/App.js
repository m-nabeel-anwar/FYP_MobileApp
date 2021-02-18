/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';


import FindRoute from './Screen/FindRoute';
import SplashScreen from './Screen/SplashScreen';
import SignInScreen from './Screen/SignInScreen';
//import SignUpScreen from './Screen/SignUpScreen';
import ForgetPassword from './Screen/ForgetPassword';
import Registration from './Screen/Registration';
import Home from './Screen/Home';
import FeedBack from './Screen/FeedBack';
import History from './Screen/History';
import FindBus from './Screen/FindBus';
import Routs from './Screen/Routs';
import Profile from './Screen/Profile';
import UpdateProfile from './Screen/UpdateProfile';
import { AsyncStorage } from 'react-native';
import List from './Screen/List';

import {component} from 'react';

import logo from './Images/Logo.png'

// for notification
 import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
 import Firebase from '@react-native-firebase/app'
//  import * as Firebase from "@react-native-firebase/app"


const Stack = createStackNavigator();

// const App = () => {

class App extends React.Component{

  // const [isAuthenticate,setisAuthenticate]=useState(false)
  // useEffect(async()=>{
  //   if(await AsyncStorage.getItem("authorize")) {
  //      setisAuthenticate(true)
  //   }
  // })

  constructor(props){
      super(props);
      this.State={

      }

  }
 

componentDidMount()
{
//    //Firebase.initializeApp(this)

// // Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: function (token) {
//     console.log("TOKEN:", token);
//   },

//   // (required) Called when a remote is received or opened, or local notification is opened
//   onNotification: function (notification) {
//     console.log("NOTIFICATION:", notification);

//     // process the notification

//     // (required) Called when a remote is received or opened, or local notification is opened
//     notification.finish(PushNotificationIOS.FetchResult.NoData);
//   },

//   // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   onAction: function (notification) {
//     console.log("ACTION:", notification.action);
//     console.log("NOTIFICATION:", notification);

//     // process the action
//   },

//   // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   onRegistrationError: function(err) {
//     console.error(err.message, err);
//   },

//   // IOS ONLY (optional): default: all - Permissions to register.
//   permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//   },

//   // Should the initial notification be popped automatically
//   // default: true
//   popInitialNotification: true,

//   /**
//    * (optional) default: true
//    * - Specified if permissions (ios) and token (android and ios) will requested or not,
//    * - if not, you must call PushNotificationsHandler.requestPermissions() later
//    * - if you are not using remote notification or do not have Firebase installed, use this:
//    *     requestPermissions: Platform.OS === 'ios'
//    */
//   requestPermissions: true,
// });








}



  render(){

  return (
   
    
      <NavigationContainer>


{/* {
!isAuthenticate ?  */}
<Stack.Navigator >
        {/* <Stack.Screen name="List" component={List} /> */}
       
       

        <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Registration} options={{headerShown: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/> 
        
      {/* </Stack.Navigator>: 
      <Stack.Navigator> */}
        <Stack.Screen name="Home" component={Home} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        <Stack.Screen name="FindBus" component={FindBus} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        {/* <Stack.Screen name="FindRoute" component={FindRoute} />  */}
        <Stack.Screen name="Routs" component={Routs} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>        
        <Stack.Screen name="Feed" component={FeedBack} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        <Stack.Screen name="History" component={History} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        
        <Stack.Screen name="FindRoute" component={FindRoute} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        
  
        <Stack.Screen name="Profile" component={Profile} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center',headerTintColor:'#BDC3C7'}}/>
</Stack.Navigator>
{/* } */}
      




      </NavigationContainer>
    // </>
  );

    }

};




export default App;


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;

// adb -s c6f30246 reverse tcp:8000 tcp:8000

//header styling     https://www.codevscolor.com/react-navigation-image-header-title
//options={{headerTitle:()=>(<Image style={{width:35,height:35}} source={require('./Images/Logo.png')} />),headerStyle:{backgroundColor:'#B03A2E'},headerTintColor:'#fff'}}  