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
import axios from 'axios'
const salary = ({route,navigation}) =>
{

const [data,setdata]=useState({})

const { uid} = route.params;
  
// format data   2021-02-24


const getsalary_info=(date)=>
{

    // console.log(uid+" "+ date)
    const Driverid=uid;
    const Date=date
    const data={
        Driverid,Date

    }

    axios.post('http://127.0.0.1:8000/getsalarybydate',data)
    .then(res=>{ setdata(res.data)
    
    // console.log(res.data)
    })
    .catch(err=>{console.log(err)})


}


        return (
            <View style={styless.container}>
               <Calendar    onDayPress={(day) => {getsalary_info(day.dateString)}}/>


<View style={styless.salarybox}>
    <Text style={styless.salaryheader}>Per Day Salary</Text>
    <View style={styless.inersalarybox}>

        <View style={styless.inersalaryboxdata}>
            <View style={styless.sigledata}>
        <FontAweasome name="calendar" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Date: {data.Date}</Text>
            </View>
            <View style={styless.sigledata}>

        <FontAweasome name="calendar" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Paydate: {data.Paydate}</Text>
            </View>

            <View style={styless.sigledata}>
        <FontAweasome name="history" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Duration (Hr.): {data.Duratin}</Text>
            </View>
            <View style={styless.sigledata}>
        <FontAweasome name="credit-card" color="#05375a"  size={25}/>
            <Text style={styless.datastyle}>Salary (Rs.): {data.Salary}</Text>
            </View>

            <View style={styless.sigledata}>
        <FontAweasome name="question-circle" color="#05375a"  size={27}/>
            <Text style={styless.datastyle}>Assignby: {data.Assignby}</Text>
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
        
        margin:8,
        
        backgroundColor:'#BDC3C7',
        height:190,
        width:'96%',
        borderRadius:28
    },
    inersalarybox:{
        margin:7,
        marginTop:-1,
        backgroundColor:'#4AB3FA',
        height:205,
        width:'96%',
        borderRadius:32
    },
    salaryheader:
    {
        fontSize:20,
        textAlign:'center',
        alignItems:'center',
        color:'black',
       
    },
    inersalaryboxdata:{
     
        margin:12,

    },
    datastyle:{
        fontSize:16,
        color:'#ffff',
        marginLeft:11,
        marginBottom:3
        


    },
    sigledata:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#ABEBC6',
        marginBottom:10,

   }
})

//outer  #BDC3C7s
//in #4AB3FA











// for calander
//npm install --save react-native-calendars