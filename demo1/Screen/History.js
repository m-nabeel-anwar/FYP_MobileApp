import React from 'react';
import {useState,useEffect} from 'react'
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios'
import FontAweasome from 'react-native-vector-icons/FontAwesome';

const History =({route,navigation})=> {

  const { uid} = route.params;


  const [data,setdata]=useState([''])

        

 useEffect(()=>{

            axios.get('http://127.0.0.1:8000/gethistory?uid='+uid)
            .then((request)=>
            {
              {request.data ? setdata(request.data) :null}

            })
            .catch(()=>{
              console.log(err)
            })

 },[])



const deletehistory=(hid,uid)=>
{

 const value={
hid,
uid
  }
  // console.log(value)
  // const after_delete= data.filter(item =>item.hid!= hid)
  //      setdata(after_delete)

  axios.post('http://127.0.0.1:8000/deletehistroy',value)
  .then((res)=>{

    if(res.data.message==='deleted')
    {
    const after_delete= data.filter(item =>item.hid!= hid)
    setdata(after_delete)
    alert("One history deleted")
    }

  })

  .catch((eror)=>{
console.log(eror)})
}




  return (

      <View style={styles.container}>

          <View style={styles.header}>
          <View  style={{flexDirection:'row'}}>
            <Image source={require('../Images/slack.png')} style={styles.imagee} resizeMode="stretch"/>

            <Text style={styles.headertext}>HISTORY</Text>
            </View>
          </View>




          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <View >
          <Image source={require('../Images/sunrays.png')} style={{height:25,width:25}} resizeMode="stretch"/>
              <Text style={{color:'grey',justifyContent:'center'}}>This is your searching history from source to destination according to date...</Text>
              <View style={{borderBottomColor: 'black',borderBottomWidth:1,marginTop:3}}/>
              </View>

            {/*box area  or flat screen kkran baki hay scrolling k lea hid use krni hay*/}

         

                {/* <TouchableOpacity  >   */}
                {data.length >0  ? 
                
                <FlatList  data={data.length === -1 ? []: data} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>( 
                
                <View>
                <View style={styles.historrybox}>
                                      
                                <View  style={styles.historytopheader}>
                                  <TouchableOpacity onPress={()=>{deletehistory(item.hid,uid)}}>
                                <FontAweasome name="times-circle" color="red"  size={20} />
                                </TouchableOpacity>
                                <Text style={{fontSize:15}}>Date:{item.Date}</Text>
                                </View>

            <View style={{borderWidth:1,borderColor:'black',marginEnd:2}}/>

            <View style={styles.historyboxvalue}>
            <FontAweasome name="map-pin" color="black"  size={18} style={{marginRight:5}} />
            <View>
              <Text>To:{item.To}</Text>
              </View>
            </View>

            <View style={styles.historyboxvalue}>
            <FontAweasome name="long-arrow-down" color="black"  size={18} style={{marginRight:5}} />
            <View>
              <Text>From: {item.From}</Text>
              </View>
            </View>
            <View  style={{borderWidth:8,borderColor:'black',marginEnd:2,borderRadius:5}}/>


                 </View>
                 </View>
                 )}/>

                 : <View>
                   <Text style={styles.nodata}>No current history</Text>
                 </View>
                 
                 }
                

                 
            
          </Animatable.View>

      </View>
  );

}
export default History;

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
        flex:3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingTop:20,
        paddingHorizontal:13
    },

    headertext:
{
    textAlign:"center",
    justifyContent:"center",
    color:"#FFFFFF",
    fontSize:35,
    fontWeight:'bold',
    paddingTop:40,    
    marginLeft:5

},

imagee:
{
    height:70,
    width:75,
    marginTop:25,
    marginLeft:20
   // borderRadius:30
},
icon:{
  height:36,
  width:35,
  marginBottom:20,
  //  marginLeft:1,
 marginTop:-15
},

historrybox:
{
// height:,
width:'100%',
backgroundColor:'#F4D03F',

shadowColor:'#000',
shadowOffset:{height:2,width:2},
shadowOpacity: 0.8,
shadowRadius: 2,  
elevation: 8,

marginTop:10,
marginBottom:5,
// borderTopRightRadius:15,
borderBottomLeftRadius:15,
 borderBottomRightRadius:15,
borderRadius:5

},
  textstyle:{
      fontSize:16,
      color:'#283747',
      marginTop:-25,
      marginBottom:25,
      marginEnd:30
      // textAlign:'center'
    // textAlign:'justify'
      
  },
crossbutton:
{
  height:25,
  width:25,
  marginTop:10,
  marginLeft:"40%"
   
},
nodata:{
  fontSize:25,
  alignItems:'center',
  textAlign:'center',
  color:'#85929E'
},
historytopheader:
{margin:2 ,
  flexDirection:'row',
  justifyContent:'space-between',
  marginEnd:2,
  backgroundColor:'#fff',
  borderRadius:6
},
historyboxvalue:{
  flexDirection:'row',
  margin:5,
  marginTop:5,
  
  borderBottomWidth:1,
borderColor:'#fff'

},



});