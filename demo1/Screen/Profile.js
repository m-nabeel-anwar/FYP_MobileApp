import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native'
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({route,navigation})=>
{
    const{uid}=route.params

    const [data,setdata]=useState({Name:'',Cnic:'',Email:'',Contact:''})

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/getuserdetail?uid='+uid)
        .then(res=>{
           
            setdata(res.data)
          
        })
        .catch(err=>{
            console.log(err)
        })
        
    },[])



 
    return(
<View style={styles.container}>

<View style={styles.header}>

<Text style={styles.headertext}>Profile</Text>
</View>
<Animatable.View animation="fadeInUpBig" style={styles.footer}>


{/* <Image source={require('../Images/user.png')} style={styles.imagee} resizeMode="stretch"/> */}


<View style={{flexDirection:'row',justifyContent:'space-around'}}>

<TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>

    <View style={[styles.roundbox,{backgroundColor:'#EBEDEF'}]}>
        
<FontAweasome name="star-o" color='black' size={30} style={{margin:15}}/>
    </View>
    </TouchableOpacity>
    
    <View style={[styles.roundmidbox,{backgroundColor:'black'}]}>
 
    <Text style={{color:'#FBFCFC',fontSize:75,textAlign:'center'}}>{data.Name[0]}{data.Name[1]}</Text>
    </View>
   

<TouchableOpacity>
    <View style={[styles.roundbox,{backgroundColor:'#EBEDEF'}]}>
    <FontAweasome name="star-o" color='black' size={30} style={{margin:15}}/>
    </View>
    </TouchableOpacity>
   
</View>



<ScrollView>
<View >
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

</View>

<TouchableOpacity  style={{width:'100%',marginLeft:-15,marginTop:10}} onPress={()=> navigation.navigate('UpdateProfile',{'uid':uid})}>
                         
                         {/* <View style={{flexDirection:'row'}}> */}
                          <LinearGradient 
                          style={styles.signIn}
                          colors={['#85929E','#17202A']}                                        
                          >

                              <Text style={[styles.textSign,{color:'#fff'}]}>Update</Text>
                              <View style={{marginLeft:20}}>
                              <MaterialIcons name="navigate-next" color='#fff' size={30}/>
                              </View>

                          </LinearGradient>
                          {/* </View> */}

                          </TouchableOpacity>
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
    backgroundColor:'#FDFEFE',
},
header:
{
flex:2,
backgroundColor:'#2E86C1',
borderBottomLeftRadius:150,
borderBottomRightRadius:150,
alignItems:'center'
},
footer:
{
flex:4,
backgroundColor:'#EBEDEF',
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
    fontSize:45,
    color:'#fff',
    fontFamily:'Bold'
    

},
detai:{


fontSize:30,
color:'#4D5656',


},
inerdetail:
{
    marginBottom:9,
    borderBottomColor:'#fff',
    marginEnd:14,
    borderBottomWidth:1,
    fontStyle:'italic',
    fontSize:16
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    flexDirection:'row',
    
    
    
},
textSign: {
    fontSize:30,
    marginLeft:50
    // fontWeight: 'bold'
  
    
},
headertext:
{
    fontSize:40,
    color:'#fff',
    fontFamily:'Bold'
    

},
detai:{


fontSize:18,
// 



},
inerdetail:
{
    
    marginBottom:9,
    borderBottomColor:'#fff',
    marginEnd:14,
    borderBottomWidth:1,
    fontStyle:'italic',
    color:'#4D5656',
    
    
    
},
roundbox:
{
    height:60,
    width:60,
    borderRadius:230,
    justifyContent:'flex-end',
    alignItems:'stretch',
    marginTop:-85,
    borderColor:'black',
    borderWidth:1
},
roundmidbox:
{
    height:120,
    width:120,
    borderRadius:250,
    justifyContent:'flex-end',
    alignItems:'stretch',
    marginTop:-70,
    borderColor:'green',
    borderWidth:2
}




})