// import Axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image} from 'react-native';
import { FlatList, ScrollView ,alert} from 'react-native-gesture-handler';
import {useState,useEffect} from 'react'
import axios from 'axios'
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native';
const FindBus =({navigation})=> {

    const [data,setdata]=useState([''])
    const [postdata,setpostdata]=useState([''])
    const [search,setsearch]=useState("")
    const [error,seterror]=useState("")
    
    const[loading,isloading]=useState(true)
    const [loadingerror,setloadingerror]=useState("Loading...")


// const da=5


useEffect(()=>{
    axios.get('http://127.0.0.1:8000/showbusnamelist')
    .then(res=>{
        //  console.log(res.data)
        setdata(res.data)
        setpostdata(res.data)
        isloading(false)
    })
    .catch(err=>{
        setloadingerror("Network Error")
        isloading(true)
        console.log(err)
    })
    
},[])


const onchangetext=(value)=>
{
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(format.test(value))
    {
seterror("*Invalid Character Enterd")

    }
    else
    {
setsearch(value)

// setpostdata(data.filter(item =>{return item.Name.toLowerCase().indexOf(search.toLowerCase()) !== -1} ))
    }
}



    return (

        <View style={{flex:1}}>
  { loading ?  

<View  style={styles.laoderstyle}>
    <ActivityIndicator size='large' width='90%' color='black'/>
    <Text style={{fontSize:25,color:'#515A5A'}} >{loadingerror}</Text>
</View>:

        <View style={styles.container}>

            <View style={[styles.header,{flexDirection:'row'}]}>
            <Image source={require('../Images/buss.png')} style={styles.imagee} resizeMode="stretch"/>
            <Text style={styles.headertext}>Find Bus</Text>   
       
            </View>

            <View style={styles.footer}>
            



{/* box */}




                <View style={{borderBottomColor: '#BFC9CA',borderBottomWidth: 3,marginTop:7}}/>

{/* find box area*/}

 <FlatList   data={postdata.length ===1 ? []: postdata} keyExtractor={(item,index)=>index.toString()} renderItem={({item})=>( 

                <TouchableOpacity  onPress={()=> navigation.navigate('Routs',{'Name':item.Name})} >  
              {/* <View style={styles.historrybox}> */}
                  <View  style={styles.boxlist}>
              <View style={{flexDirection:"row",marginTop:5}}>
                 <View style={{height:65,width:63,borderRadius:25,backgroundColor:"#ffff",marginLeft:10}}>
              <Image source={require('../Images/findbus.png')} style={styles.icon} resizeMode="stretch"/>
              </View>

              {/* <View style={{flexDirection:"column"}}>
              <Text style={styles.textstyle}> Bus Name</Text>
               <Text style={[styles.textstyle,{color:'black'}]}>{item.Name} khan coach </Text> 
            
              </View> */}
              {/* <Image source={require('../Images/right-arrow.png')} style={styles.crossbutton} resizeMode="stretch"/> */}
              
              <Text style={{fontSize:16,color:'#FFF',fontSize:20,marginTop:15,marginLeft:3,marginEnd:73}}>{item.Name}</Text> 
              </View>
              {/* <View style={{flexDirection:"column"}}> */}
 

{/* </View> */}
<View style={{justifyContent:'center',flexDirection:'row'}}>
<FontAweasome name="star-o" color='#fff' size={15} style={{margin:1}}/>
<FontAweasome name="star-o" color='#fff' size={15} style={{margin:1}}/>
<FontAweasome name="star-o" color='#fff' size={15} style={{margin:1}}/>
<FontAweasome name="star-o" color='#fff' size={15} style={{margin:1}}/>
<FontAweasome name="star-o" color='#fff' size={15} style={{margin:1}}/>

</View>
              <View style={{borderBottomColor:'#F1C40F',borderBottomWidth:2,marginTop:2,width:"80%",marginLeft:30,marginBottom:3}}/>      
             
                 </View> 
                 </TouchableOpacity>
                 

)}/>

</View>
        </View>
}
</View>
    );

};
export default FindBus;


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
        flex:4,
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
    fontSize:35,
    fontWeight:'bold',
    paddingTop:40,    
    marginLeft:5

},
imagee:
{
    height:70,
    width:70,
    marginTop:25,
    marginLeft:20
   // borderRadius:30
},

imagees:
{
    height:38,
    width:35,
    marginTop:6,
    marginLeft:5
   // borderRadius:30
},
inputtext:
{

marginBottom:5,
// borderBottomColor:"black",
borderWidth:1,
width:'88%',
height:"90%",
fontSize:18,
paddingLeft:6,
borderRadius:15
},
icon:{
    height:55,
    width:55,
    marginBottom:20,
    marginTop:5,
     marginLeft:5,
  },
  historrybox:
  {
  height:'50%',
  width:'100%',
  backgroundColor:'#5DADE2',
  
  shadowColor:'#000',
  shadowOffset:{height:2,width:2},
  shadowOpacity: 0.8,
  shadowRadius: 2,  
  elevation: 8,
  
  marginTop:10,
  marginBottom:5,
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  borderBottomLeftRadius:40,
  borderBottomRightRadius:40,
  },
  textstyle:{
      fontSize:17,
      color:'#F2F3F4',
      textAlign:'center'
     // textAlign:'justify'
      
  },
  crossbutton:
  {
    height:35,
    width:35,
    marginTop:16,
    marginLeft:"36%"
     
  },
boxlist:
  {
    backgroundColor:'#5D6D7E',
    marginBottom:5,
    marginTop:7,


    shadowColor:'#000',
  shadowOffset:{height:2,width:2},
  shadowOpacity: 0.8,
  shadowRadius: 5,  
  elevation:6,
  
  borderTopRightRadius:20,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
  borderBottomRightRadius:20
},

laoderstyle:{
height:'100%',
width:'100%',
alignItems:'center',
justifyContent:"center",
backgroundColor:'#D6DBDF'


}
});








// <View style={{flexDirection:'row'}}>
// {/* <Text style={{fontSize:20,paddingRight:7,marginTop:5}}>Search</Text> */}
// <TextInput 
// placeholder="Type here..." 
// style={styles.inputtext}
// autoCorrect={false}
// maxLength={30}
// value={search}
// onChangeText={(value)=>onchangetext(value)}/>
// <Image source={require('../Images/search-location.png')} 
// style={styles.imagees} resizeMode="stretch"/>

// </View>
// <Text>{error}</Text>