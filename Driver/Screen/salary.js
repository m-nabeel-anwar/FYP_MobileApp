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
import FontAweasome from 'react-native-vector-icons/FontAwesome';
const salary = ({navigation}) =>
{

const [date,setdate]=useState('2/2/2021')
  
        return (
            <View style={styless.container}>
               <Calendar/>
<View style={styless.salarybox}>
    <Text style={styless.salaryheader}>Per Day Salary</Text>
    <View style={styless.inersalarybox}>

        <View style={styless.inersalaryboxdata}>
            <View style={styless.sigledata}>
        <FontAweasome name="calendar" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Date: {date}</Text>
            </View>

            <View style={styless.sigledata}>
        <FontAweasome name="history" color="#05375a"  size={27}/>
            <Text style={styless.datastyle}>Duration: 2.33.222</Text>
            </View>
            <View style={styless.sigledata}>
        <FontAweasome name="credit-card" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Salary: 30000</Text>
            </View>

            <View style={styless.sigledata}>
        <FontAweasome name="question-circle" color="#05375a"  size={27}/>
            <Text style={styless.datastyle}>Status: N</Text>
            </View>

            

        </View>

    </View>

</View>

            </View>
        )
    
}

export default salary

const styless= StyleSheet.create({

    container:
    {
        flex:1,
        color:'#FDFEFE'
    },

    salarybox:{
        margin:5,
        backgroundColor:'#BDC3C7',
        height:220,
        width:'96%',
        borderRadius:28
    },
    inersalarybox:{
        margin:7,
        backgroundColor:'#4AB3FA',
        height:230,
        width:'96%',
        borderRadius:32
    },
    salaryheader:
    {
        fontSize:22,
        textAlign:'center',
        alignItems:'center',
        color:'black'
    },
    inersalaryboxdata:{
     
        margin:13,

    },
    datastyle:{
        fontSize:18,
        color:'#ffff',
        marginLeft:11,
        marginBottom:4
        


    },
    sigledata:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#ABEBC6',
        marginBottom:17,

   }
})

//outer  #BDC3C7s
//in #4AB3FA











// for calander
//npm install --save react-native-calendars