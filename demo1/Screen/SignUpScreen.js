import React ,{useState}from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const SignUpScreen = ({navigation}) => 
{
    const [data,setdata]= useState({ email:'',
    password:'',
    conform_password:'',
    check_textInputChange:false, 
    secureTextEntry:true,
    conform_secureTextEntry:true,

}); //obj banaya hay ham nay
    // ya condtion hay k text box may value ho to icon show ho  
    const textInputChange=(val)=>
    {
        if(val.length != 0)
        {
         setdata({
             ...data, // array destructuring get  existing state
             email:val,
             check_textInputChange:true
         });
 
        }
        else
        {
         setdata({
             ...data,
             email:val,
             check_textInputChange:false
         });
 
        }
    };
    const handlePaswordChange =(val)=>
    {
         setdata({
             ...data,
             conform_password:val
         });
    };
 
 const updateSecureTextEntry =()=>
 {
     setdata({
         ...data,
         secureTextEntry: !data.secureTextEntry // ya is lea kea agr ya false ho uper to true ho jae true ho to false ho jae 
 
     });
 };

 const handleConformPaswordChange =(val)=>
 {
      setdata({
          ...data,
          password:val
      });
 };

 const updateConformSecureTextEntry =()=>
 {
     setdata({
         ...data,
         conform_secureTextEntry: !data.conform_secureTextEntry // ya is lea kea agr ya false ho uper to true ho jae true ho to false ho jae 
 
     });
 };



 
 

     return(
         <View style={styles.container}>

          {/*   <StatusBar backgroundColor="#fff" barStyle="black"/>*/}

             <View style={styles.header}>
               <Text style={styles.text_header}>Resgister Now</Text>
                 </View>
 
 
                 <Animatable.View animation="fadeInUpBig" style={styles.footer}>
 
                     <Text style={styles.text_footer }>Email</Text>
                     {/*text icon and text box*/}
                     <View style={styles.action}> 
                     <FontAweasome name="user-o" color="#05375a"  size={20} />
                     <TextInput placeholder="Enter Your Email"
                     style={styles.textInput} 
                     autoCapitalize="none"
                      onChangeText={(val)=>textInputChange(val)}
                      />
                     
                     {/* checking condition lagi hay yah pay if true to ya work kray ga ni to ni null rahahy*/}
                     {data.check_textInputChange ?
                     <Animatable.View animation="bounceIn">
                     <Feather name="check-circle" color="green" size={20}/> 
                         </Animatable.View>
                     :null}
                     </View>
 
                     {/*PASSWORD*/}
 
 
                     <Text style={[styles.text_footer ,{marginTop:30}]}>Password</Text>
                     {/*text icon and text box*/}
                     <View style={styles.action}> 
 
                     <Feather name="lock" color="#05375a"  size={20} />
                     <TextInput  placeholder="Enter Your Pasword"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={styles.textInput} 
                      autoCapitalize="none" 
                      onChangeText={(val)=>handlePaswordChange(val)}
                      />
                         <TouchableOpacity  onPress={updateSecureTextEntry}>
                             {/*ager true ho to icon badal jae ni to wahi rahay*/}
                         {data.secureTextEntry ?    
                         
                     <Feather name="eye-off" color="grey" size={20}/> 
                     :
                     <Feather name="eye" color="grey" size={20}/>
                     }
                     </TouchableOpacity>
                     </View>
                       <View style={styles.button}>
                           <LinearGradient
                           colors={['#08d4c4','#01ab9d']}
                           style={styles.signIn}
                           >
                             
                             
                             
                             
    


                               <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
 
                           </LinearGradient>
                           <TouchableOpacity 
                           onPress={()=> navigation.navigate('SignUpScreen')}
                           style={[styles.signIn,{borderColor:'#009387', borderWidth:1, marginTop:15}]}
                           >
                               <Text style={[styles.textSign,{color:'#009386'}]}>SignUp</Text>
                           </TouchableOpacity>
                       </View>

                       


{/*Conform pass*/}
<Text style={[styles.text_footer ,{marginTop:30}]}>Conform password</Text>
  {/*text icon and text box*/}
  <View style={styles.action}> 

  <Feather name="lock" color="#05375a"  size={20} />
  <TextInput  placeholder="Conform Password"
   secureTextEntry={data.conform_secureTextEntry ? true : false}
   style={styles.textInput} 
   autoCapitalize="none" 
   onChangeText={(val)=>handleConformPaswordChange(val)}
   />
      <TouchableOpacity  onPress={updateConformSecureTextEntry}>
          {/*ager true ho to icon badal jae ni to wahi rahay*/}
      {data.secureTextEntry ?    
      
  <Feather name="eye-off" color="grey" size={20}/> 
  :
  <Feather name="eye" color="grey" size={20}/>
  }
  </TouchableOpacity>
  </View>



{/*
                       <View style={styles.button}>
                           <LinearGradient
                           colors={['#08d4c4','#01ab9d']}
                           style={styles.signIn}
                           >
                               <Text style={[styles.textSign,{color:'#fff'}]}>Sign Up</Text>
 
                           </LinearGradient>
                           <TouchableOpacity 
                           onPress={()=> navigation.navigate('SignInScreen')}
                           style={[styles.signIn,{borderColor:'#009387', borderWidth:1, marginTop:15}]}
                           >
                               <Text style={[styles.textSign,{color:'#009386'}]}>SignIn</Text>
                           </TouchableOpacity>
                       </View>
*/}




                 </Animatable.View>
             </View>
     );
};

export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
        
    }
  });






  



  













