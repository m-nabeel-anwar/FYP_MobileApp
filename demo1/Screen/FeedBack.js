//import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { Alert } from 'react-native';
import axios from 'axios'
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const FeedBack =({route,navigation})=> {

  const { uid} = route.params;
  // console.log(uid)
const [data,setdata]= useState({Subject:'',Feedback:''})
const [error,seterror]=useState({Subject:'',Feedback:''})

const validationcheck=(value,type)=>
{

if(type==="Subject")
{
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
        if(format.test(value))
        {
            
            seterror({...error,Subject:'*Invalid Text Entered'})
        }
        else
        {
            seterror({...error,Subject:''});
            setdata({...data,Subject:value})
        }


}
if(type==="Feedback")
{
  var format = /[`@#$%^&*()_+\-=\[\]{};':"\\|<>\/~]/; //.,?0-9
  if(format.test(value))
  {
      
      seterror({...error,FeedBack:'*Invalid Text Entered'})
  }
  else
  {
      seterror({...error,FeedBack:''});
      setdata({...data,FeedBack:value})
  }


}

}




const onsubmit=()=>
{

if(data.FeedBack!==""&& data.Subject!=="")
{
const value=
{
  Subject:data.Subject,
  Feedback:data.FeedBack,
  uid:uid
}
axios.post('http://127.0.0.1:8000/sentfeedback',value)
.then(response=>
  {
    if(response.data.Check)
    {
Alert.alert("Thanks...","We got your feedback",[{text:"Ok",onPress:()=>{navigation.navigate('Home')}}])
    }
  })
.catch(err=>{
  console.log(err)
})

}
else
{
  Alert.alert("Fill both options...")
}

}


  return (
    
<View style={styles.container}>

{/* uid bhi sath sent krni hay feedback k */}
{/*<StatusBar style={"auto"} />*/}

    <View style={styles.header}>
    <View  style={{flexDirection:'row'}}>
    <Image source={require('../Images/hand.png')} style={styles.imagee} resizeMode="stretch"/>

    <Text style={styles.headertext}>FEEDBACK</Text>
     </View>

    </View>
    <View style={styles.footer}>
    {/* <View style={{ width: '70%', height: 2, backgroundColor: '#943126',marginLeft:'15%' }} /> */}

      <ScrollView>
    <Text style={styles.textstyle}>Subject</Text>
    <TextInput placeholder="Type here..."
     autoCapitalize="none"
     maxLength={30}
     value={data.Subject}
     onChangeText={(val)=>validationcheck(val,"Subject")}
      style={styles.inputtext}/>

      <Text style={{marginLeft:5,color:'red'}}>{error.Subject}</Text>

    <Text style={styles.textstyle}>Enter Feed</Text>

    {/*feed box*/}
    <TextInput placeholder="Type here..." 
    // maxLength={30}
    value={data.FeedBack}
    onChangeText={(val)=>validationcheck(val,"Feedback")}
     style={styles.inputarea} numberOfLines={6}
      multiline={true}/>
<Text style={{marginLeft:5,color:'red'}}>{error.FeedBack}</Text>
    {/*button*/}
            <View style={styles.button}>
            <TouchableOpacity onPress={onsubmit}
            
            style={[styles.submit,{borderColor:'#800000', borderWidth:1, marginTop:-8}]}
            >
            <Text style={[styles.textSign,{color:'#800000'}]}>SUBMIT</Text>
            </TouchableOpacity>
            </View>
    <View>
        <Text style={[styles.textstyle,{marginTop:5}]}>NOTE:</Text>
        <Text style={{color:'grey',justifyContent:'center'}}>Your feed is more importan for us to inhace our system and provide you more batter services.</Text>
    </View>

    </ScrollView>
           </View>
    </View>

  );
}

export default FeedBack;

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

},
button: {
    alignItems: 'center',
    marginTop: 20
},
submit: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},

textstyle:{
    fontSize:19,
    
},

inputtext:
{
padding:2,
marginBottom:5,
borderBottomColor:"black",
borderBottomWidth:1,
fontSize:18,
},
inputarea:
{

marginTop:3,
paddingLeft:3,
borderBottomColor:"black",
borderWidth:1,
fontSize:18,
justifyContent: "flex-start",
textAlignVertical: 'top',
},

imagee:
{
    height:70,
    width:80,
    marginTop:18
    
}

});
