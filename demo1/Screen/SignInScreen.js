
import React ,{useState,useEffect} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    Dimensions, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import axios from 'axios';
import md5 from 'md5';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
//icons
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import { AsyncStorage } from 'react-native';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
 import Firebase from '@react-native-firebase/app'
 import AsyncStorage from '@react-native-community/async-storage'
// feather icon say light walay logo atay hay


const SignInScreen = ({navigation}) => 
{
    const [data,setdata]= useState({ Email:'',Password:'',check_textInputChange:false, secureTextEntry:true}); //obj banaya hay ham nay
   // ya condtion hay k text box may value ho to icon show ho  
   const [err,seterr]=useState({Email:'',Password:''})



const [deviceId,setdeviceId]=useState('')

useEffect(()=>{


//Firebase.initializeApp(this)

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
      setdeviceId(token.token)
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });



},[])


























   const textInputChange=(value)=>
   {
       if(value.length != 0)
       {

        // setdata({
        //     ...data, // array destructuring get  existing state
        //     Email:val,
        //     check_textInputChange:true
        // });



        var form = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~ ]/;
        if(!form.test(value))
        {
        

        var format =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation checking
        if(format.test(value)==0)
        {
            seterr({...err,Email:'*Invalid Email Entered'})

            setdata({...data,Email:value})
           
        }
        else
        {
            seterr({...err,Email:''});
            setdata({...data,Email:value,check_textInputChange:true})
        }
        }
        else
        {
            seterr({...err,Email:'*Invalid Email Entered'})
        }


       }
       else
       {
        setdata({
            ...data,
            Email:value,
            check_textInputChange:false
        });

       }
   };
   const handlePaswordChange =(val)=>
   {
        setdata({
            ...data,
            Password:val
        });
   };

const updateSecureTextEntry =()=>
{
    setdata({
        ...data,
        secureTextEntry: !data.secureTextEntry // ya is lea kea agr ya false ho uper to true ho jae true ho to false ho jae 

    });
};



const onsubmit=()=>
{

    if(data.check_textInputChange && data.Password !='')
    {
// Alert.alert('valid')

    var value=
            {
               
                Email:data.Email,
                Password:md5(data.Password),
                deviceId:deviceId
                
            
            };
            // console.log(value)
            axios.post('http://127.0.0.1:8000/userlogin',value)
            .then(req=>{
            if(req.data.Check==='True')
            {
                setdata({...data,Email:'',Password:''})
                // await AsyncStorage.setItem("authorize",true)
                // AsyncStorage.setItem("authorize",true)
                save_useId(req.data.uid) // send data to save uid in local storage
                Alert.alert('Login','Click Ok to login',[{text:'OK',onPress:()=>navigation.navigate('Home',{'uid':req.data.uid})}])
            }
            else
            {
                setdata({...data,Email:'',Password:''})
                Alert.alert('Opps!','Email or Password Not Correct')
            
            }
            })
            .catch(err=>{
            console.log(err)
            alert("Server error")
            })


    }
    else
    {
        Alert.alert('Please Enter Valid Input')
    }


 }

 save_useId=async(Id)=>
 {
     try{

        await AsyncStorage.setItem('uid',Id)
     }catch(e)
     {
         console.log("Error when save user id (SingInScreen)")
     }
 }
    return(
        // <KeyboardAvoidingView behavior={Platform.os=== 'ios'? 'padding': null}>
         /* <KeyboardAvoidingScrollView keyboardShouldPersistTaps={'always'}> */
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.container}>
            {/* <LinearGradient style={styles.container}  colors={['#3498DB','#808B96']} > */}
            {/* <StatusBar backgroundColor="#fff" barStyle="black"/> */}
            <View style={styles.header}>
              <Text style={styles.text_header}> Welcome!</Text>
                </View>

                
                 {/* <KeyboardAvoidingView behavior='padding' style={{flex:3}}> */}

                <Animatable.View animation="fadeInUpBig" style={styles.footer}>
               
                    <ScrollView>
                    <Text style={styles.text_footer }>Email</Text>
                    {/*text icon and text box*/}
                    <View style={styles.action}> 
                    <FontAweasome name="user-o" color="#05375a"  size={20} />
                    <TextInput placeholder="Enter Your Email"
                    style={styles.textInput} 
                    autoCapitalize="none"
                    keyboardType='email-address'

                    value={data.Email}

                     onChangeText={(value)=>textInputChange(value)}
                     />
                    
                    {/* checking condition lagi hay yah pay if true to ya work kray ga ni to ni null rahahy*/}
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                    <FontAweasome name="check-circle" color="green"  size={25} />    
                        </Animatable.View>
                    :null}
                    </View>
                    <Text style={{marginLeft:15,color:'red'}}>{err.Email}</Text>

                    {/*PASSWORD*/}


                    <Text style={[styles.text_footer ,{marginTop:30}]}>Password</Text>
                    {/*text icon and text box*/}
                    <View style={styles.action}> 

                    <FontAweasome name="lock" color="#05375a"  size={25} />
                    <TextInput  placeholder="Enter Your Pasword"
                     secureTextEntry={data.secureTextEntry ? true : false}
                     style={styles.textInput} 
                     autoCapitalize="none" 
                     value={data.Password}
                     maxLength={16}
                     onChangeText={(val)=>handlePaswordChange(val)}
                     />
                        <TouchableOpacity  onPress={updateSecureTextEntry}>
                            {/*ager true ho to icon badal jae ni to wahi rahay*/}
                        {data.secureTextEntry ?    
                        
                    <FontAweasome name="eye-slash" color="grey"  size={20} /> 
                    :
                    <FontAweasome name="eye" color="grey" size={20}/>
                    }
                    </TouchableOpacity>
                    </View>
                    <Text style={{marginLeft:15,color:'red'}}>{err.Password}</Text>
        
                <TouchableOpacity activeOpacity={.6} onPress={()=> navigation.navigate('ForgetPassword')}>
                    <Text style={{fontSize:18,color:'#E74C3C',marginLeft:100}}>Forget Password? </Text>
                    
                    </TouchableOpacity>


                      <View style={styles.button}>
                       
                       <TouchableOpacity onPress={onsubmit} style={{width:'100%'}}>
                          <LinearGradient 
                          style={styles.signIn}
                          colors={['#D5DBDB','#808B96']}                                        
                          >

                              <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>

                          </LinearGradient>
                          </TouchableOpacity>


                          <TouchableOpacity 
                          onPress={()=> navigation.navigate('Register')}
                          style={[styles.signIn,{borderColor:'#808B96', borderWidth:1, marginTop:15}]}
                          >
                              <Text style={[styles.textSign,{color:'#808B96'}]}>SignUp</Text>
                          </TouchableOpacity>
                      </View>
                      </ScrollView>
                </Animatable.View>
                {/* </KeyboardAvoidingView> */}
                {/* </LinearGradient> */}
            </View>
           
            </TouchableWithoutFeedback>

            // </KeyboardAvoidingView>
            /* </KeyboardAvoidingScrollView>  */
          
    );
};




export default SignInScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#566573'
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
        fontSize:25,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        // paddingBottom: 5
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
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize:17,
        borderBottomColor:'#566573',
            borderBottomWidth:3,

    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop:20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize:23,
        fontWeight: 'bold'
        
    }
  });

  // use md5 for incription