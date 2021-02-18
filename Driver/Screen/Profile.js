import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';
// import FontAweasome from 'react-native-vector-icons/FontAwesome';

const Profile = ({route,navigation})=>
{

// const {Status}=route.params

// const {uid}=route.params
const data=route.params

// const [data,setdata]=useState({})

// useEffect(()=>{

//     if(Status==="Unassing")
//     {
//     axios.get('http://127.0.0.1:8000/getdriver?uid='+uid)
//         .then((request)=>{
        
//             setdata(request.data)

//         })
//         .catch((err)=>{console.log(err)},[])
//     }
//     if(Status==="Assign")
//     {
//         axios.get('http://127.0.0.1:8000/getsinglederiver?uid='+uid)
//         .then((request)=>{
        
//             setdata(request.data)
//             console.log(uid)
//             console.log(Status)

//         })
//         .catch((err)=>{
//             console.log(err)
//           })
          
     
//     }
// },[])
 
    return(
<View style={styles.container}>

<View style={styles.header}>

<Text style={styles.headertext}>Profile</Text>

</View>
<Animatable.View animation="fadeInUpBig" style={styles.footer}>


<View style={{flexDirection:'row',justifyContent:'space-around'}}>


    <View style={[styles.roundbox,{backgroundColor:'#AEB6BF'}]}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
<FontAweasome name="star-o" color='#fff' size={30} style={{margin:15}}/>
</TouchableOpacity>
    </View>
   
    
    <View style={[styles.roundmidbox,{backgroundColor:'black'}]}>
    {/* <FontAweasome name="user-o" size={30} color="#fff" style={{margin:40}}/> */}
    <Text style={{color:'#fff',fontSize:75,textAlign:'center'}}>{data.Name[0]}{data.Name[1]}</Text>
    </View>
    {/* <Text style={{textAlign:'center}}>User</Text> */}
    <View style={[styles.roundbox,{backgroundColor:'#AEB6BF'}]}>
    <FontAweasome name="star-o" color='#fff' size={30} style={{margin:15}}/>
    </View>
    {/* <Text>ok</Text> */}
</View>




{/* <Image source={require('../Images/user.png')} style={styles.imagee} resizeMode="stretch"/> */}
<ScrollView>
<View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="user-circle-o" color='black' size={21} style={{marginRight:5}} />
<Text style={styles.detai}>Name: </Text>
</View>
<Text style={styles.inerdetail}>{data.Name}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="envelope-o" color='black' size={20} style={{marginRight:5}} />
<Text style={styles.detai}>Email:</Text>
</View>
<Text style={styles.inerdetail}>{data.Email}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="id-card-o" color='black' size={19} style={{marginRight:5}} />
<Text style={styles.detai}>Cnic:</Text>
</View>
<Text style={styles.inerdetail}>{data.Cnic}</Text>


<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="phone" color='black' size={20} style={{marginRight:5}} />
<Text style={styles.detai}>Contact:</Text>
</View>
<Text style={styles.inerdetail}>{data.Contact}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="address-card-o" color='black' size={19} style={{marginRight:5}} />
<Text style={styles.detai}>Address:</Text>
</View>
<Text style={styles.inerdetail}>{data.Address}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="bus" color='black' size={17} style={{marginRight:5}} />
<Text style={styles.detai}>Bus Name:</Text>
</View>
<Text style={styles.inerdetail}>{data.BusName}</Text>

<View style={{flexDirection:'row',alignItems:'center'}}>
<FontAweasome name="credit-card" color='black' size={19} style={{marginRight:5}} />
<Text style={styles.detai}>Bus Number:</Text>
</View>
<Text style={styles.inerdetail}>{data.NumberPlate}</Text>




</View>
</ScrollView>
</Animatable.View>

</View>

    );
};

export default Profile;
const styles=StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#E5E7E9',
},
header:
{
flex:2,
backgroundColor:'#34495E',
borderBottomLeftRadius:150,
borderBottomRightRadius:150,
alignItems:'center'
},
footer:
{
flex:4,
backgroundColor:'#CCD1D1',
borderTopEndRadius:80,
borderTopStartRadius:80,
width:'94%',
marginTop:-100,
paddingLeft:20,
marginLeft:12

},
imagee:
{
height:'25%',
width:'35%',
borderRadius:100,
marginLeft:85,
marginTop:-65,


},
headertext:
{
    fontSize:40,
    color:'#fff',
    fontFamily:'Bold'
    

},
detai:{


fontSize:18,
color:'#4D5656',



},
inerdetail:
{
    
    marginBottom:9,
    borderBottomColor:'#fff',
    marginEnd:14,
    borderBottomWidth:1,
    fontStyle:'italic',
    
    
},
roundbox:
{
    height:65,
    width:65,
    borderRadius:230,
    justifyContent:'flex-end',
    alignItems:'stretch',
    marginTop:-85,
    borderColor:'black',
    borderLeftWidth:5
},
roundmidbox:
{
    height:120,
    width:120,
    borderRadius:250,
    justifyContent:'flex-end',
    alignItems:'stretch',
    marginTop:-70,
    borderColor:'#AEB6BF',
    borderLeftWidth:5
}



})