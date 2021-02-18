/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen';
import SplashScreen from './Screen/SplashScreen';
import SignInScreen from './Screen/SignInScreen';
import MapRoute from './Screen/MapRoute';
import ForgetPassword from './Screen/ForgetPassword';
import Routs from './Screen/Routs';
import Profile from './Screen/Profile';
import { useEffect} from "react";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

import salary  from './Screen/salary' 
import VarificationScreen from './Screen/VarificationScreen';

// storage
// import {AsyncStorage} from '@react-native-community/async-storage'

const Stack = createStackNavigator();

const App: () => React$Node = () => {

 
 
 



  return (
  
  
    <>
  
{
//   
}



    <NavigationContainer>

    <Stack.Navigator>
    
    
    <Stack.Screen name="salary" component={salary} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center'}}/>


    
    {/* <Stack.Screen name="Varification" component={VarificationScreen}/> */}
    
    <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>

    <Stack.Screen name="signin" component={SignInScreen} options={{headerShown: false}}/>
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown: false}}/>

      <Stack.Screen name="Home" component={HomeScreen} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center'}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center'}}/>
      <Stack.Screen name="Routs" component={Routs} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center'}}/>
      
      <Stack.Screen name="Map" component={MapRoute} options={{headerRight:()=>(<Image style={{width: 40, height: 40,marginEnd: 235}} source={require('./Images/Logo.png')}/>),headerTitle: 'Bus Arriver',headerTitleAlign:'center'}}/>
      {/* <Stack.Screen name="Varification" component={VarificationScreen}/> */}

    </Stack.Navigator>

    </NavigationContainer>

</>
  );
};

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

export default App;


//npm install -S @react-native-community/async-storage for local storage
// go and add
// android/gradle.properties
// android.useAndroidX=true
// android.enableJetifier=true
// // add the below line
// AsyncStorage_db_size_in_MB=10