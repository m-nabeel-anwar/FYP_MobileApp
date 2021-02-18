import React, { Component,useState } from 'react'

import {StyleSheet,
    Text,
    View,
     Dimensions,
     Image,
     TouchableOpacity,
     Button
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const salary = ({navigation}) =>
{


  
        return (
            <View style={styless.container}>
               <Calendar/>


            </View>
        )
    
}

export default salary

const styless= StyleSheet.create({

    container:
    {
        flex:1,
        color:'#ffff'
    }

})














// for calander
//npm install --save react-native-calendars