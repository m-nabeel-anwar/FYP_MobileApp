import React ,{useState,useEffect}from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import md5 from 'md5'
import axios from 'axios'
import Dialog from "react-native-dialog";
import { set } from 'react-native-reanimated';
const ForgetPassword =({navigation})=> {

 const [password,setpasoword]=useState({secureTextEntry:true,secureTextEntry2:true})

 const updateSecureTextEntry =()=>
 {
     setpasoword({
         ...password,
         secureTextEntry: !password.secureTextEntry // ya is lea kea agr ya false ho uper to true ho jae true ho to false ho jae 
 
     });
 };

 const updateSecureTextEntry2 =()=>
 {
     setpasoword({
         ...password,
         secureTextEntry2: !password.secureTextEntry2 // ya is lea kea agr ya false ho uper to true ho jae true ho to false ho jae 
 
     });
 };

 const [data,setdata]=useState({Email:'',Password:'',Confrompassword:''})
const [error,seterror]=useState({Email:'',Password:'',Confrompassword:''})

const [visible, setVisible] = useState(false); // for dialog box hide and show
const [code,setcode]=useState('')
const [Entercode,setEntercode]=useState('') // user enter code

const validationcheck =(value,type)=>
{
    if(type==="Email")
    {
        var form = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~ ]/;
        if(!form.test(value))
        {
        

        var format =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // email validation checking
        if(format.test(value)==0)
        {
            seterror({...error,Email:'*Invalid Email Entered'})
            setdata({...data,Email:value})
           
        }
        else
        {
            seterror({...error,Email:''});
            setdata({...data,Email:value})
        }
        }
        else
        {
            seterror({...error,Email:'*Invalid Email'})
        }
    }

    if(type==="Password")
    {
   
        if(data.Password.length !== 15)
        {
            // console.log(data.Password.length)
            seterror({...error,Password:'*Enter 16 digite password'})
            setdata({...data,Password:value})
        }
        else
        {
            seterror({...error,Password:''});
            setdata({...data,Password:value})
        }

    }
    if(type=='Confrompassowrd')
    {

        if(data.Confrompassword.length !== 15)
        {
            // console.log(data.Password.length)
            seterror({...error,Confrompassword:'*Enter 16 digite password'})
            setdata({...data,Confrompassword:value})
        }
        else
        {
            seterror({...error,Confrompassword:''});
            setdata({...data,Confrompassword:value})
        }
    }

}


var onsumbit=()=>
{
    var format =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(data.Password.length===16 && data.Confrompassword.length===16 && format.test(data.Email))
    {
        if(data.Password===data.Confrompassword )
        {
         
            var value=
            {
               
                Email:data.Email,
                Password:md5(data.Password),
                
            
            };
            
            axios.post('http://127.0.0.1:8000/DriverForgetPasswordCode',value)
            .then(req=>{
            if(req.data.Check==='True')
            {
                // setdata({...data,Email:'',Password:'',Confrompassword:''})
                // Alert.alert('Alert..!','Your password is Reset',[{text:'OK',onPress:()=>navigation.navigate('signin')}])
                setcode(req.data.Code)
                setVisible(true);


            }
            else
            {
                setdata({...data,Email:'',Password:'',Confrompassword:''})
                Alert.alert('Email not exist')
            
            }
            })
            .catch(err=>{
            console.log(err)
            })


        }
        else
        {
            Alert.alert('Passowrd and Conformpassword are not same')
        }

        

    }
    else
    {
        Alert.alert('Passowrd or Email are not valid')
    }
}





// click on cancel to hide the box
const handleCancel = () => {
    setVisible(false);
  };



  const varifycode =()=>{
      if (code== Entercode && Entercode!= null)
      {

   var value=
    {
       
        Email:data.Email,
        Password:md5(data.Password),
        
    
    };
            axios.post('http://127.0.0.1:8000/DriverForgetPassword',value)
                        .then(req=>{
                        if(req.data.Check==='True')
                        {
                            setdata({...data,Email:'',Password:'',Confrompassword:''})
                            setVisible(false);
                            setEntercode('')
                            setcode('')

                            Alert.alert('Alert..!','Your password is Reset',[{text:'OK',onPress:()=>navigation.navigate('signin')}])
                        }
                    
                        })
                        .catch(err=>{
                        console.log(err)
                        })



      }
      else{
        setVisible(false);
        alert("Invalid code Enterd")
        setEntercode('')
        setVisible(true);


      }
  }

const ResentCode =()=>
{
    var value=
    {
       
        Email:data.Email,
        Password:md5(data.Password),
        
    
    };
    axios.post('http://127.0.0.1:8000/DriverForgetPasswordCode',value)
            .then(req=>{
            if(req.data.Check==='True')
            {

                setcode(req.data.Code)


            }
           

             })
            .catch(err=>{
            console.log(err)
            })
    
}









  return (

<View style={styles.container}>


        <Animatable.View  style={styles.header} animation="bounceIn"
    duraton="1500">
        <Image source={require('../Images/key.png')} style={styles.headerlogo} resizeMode="stretch"/>
        <Text style={styles.headertext}>Reset Password</Text>
        </Animatable.View>


<Animatable.View style={styles.footer} animation="fadeInUpBig">
  <ScrollView>
      <View style={{ width: '50%', height: 4, backgroundColor: '#D5DBDB',marginLeft:'25%',marginBottom:5 }} />
              <View>
             <Text style={styles.textstyle}>Email</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/email.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="envelope-o" color="#05375a"  size={20} />
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='email-address'
                    autoCorrect={false}
                    maxLength={25}
                    value={data.Email}
                    onChangeText={(value)=>validationcheck(value,'Email')}

                  
                    />

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Email}</Text>

             <View>
             <Text style={styles.textstyle}>Password</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/password.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="lock" color="#05375a"  size={22}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='default'
                    autoCorrect={false}
                    maxLength={16}
                    value={data.Password}
                    onChangeText={(value)=>validationcheck(value,'Password')}
                    secureTextEntry={password.secureTextEntry2 ? true : false}   
                    />
                    {/* <FontAweasome name="eye" color="grey" size={20}/>
                     {/* <Image source={require('../Images/eye.png')} style={styles.imagee} resizeMode="stretch"/> */}
                     {/* <FontAweasome name="eye-slash" color="grey" size={20}/> */} 

                     <TouchableOpacity  onPress={updateSecureTextEntry2}>
                            {/*ager true ho to icon badal jae ni to wahi rahay*/}
                        {password.secureTextEntry2 ?    
                        
                    <FontAweasome name="eye-slash" color="grey"  size={20} /> 
                    :
                    <FontAweasome name="eye" color="grey" size={20}/>
                    }
                    </TouchableOpacity>

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Password}</Text>
             <View>
             <Text style={styles.textstyle}>Conform Password</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/conformpass.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="get-pocket" color="#05375a"  size={20}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='default'
                    autoCorrect={false}
                    maxLength={16}
                    value={data.Confrompassword}
                    onChangeText={(value)=>validationcheck(value,'Confrompassowrd')}
                    secureTextEntry={password.secureTextEntry ? true : false}
                  
                    />
                     {/* <Image source={require('../Images/eye.png')} style={styles.imagee} resizeMode="stretch"/> */}
                     {/* <FontAweasome name="eye" color="grey"  size={20}/>
                     <FontAweasome name="eye-slash"color="grey"  size={20}/> */}

                     <TouchableOpacity  onPress={updateSecureTextEntry}>
                            {/*ager true ho to icon badal jae ni to wahi rahay*/}
                        {password.secureTextEntry ?    
                        
                    <FontAweasome name="eye-slash" color="grey"  size={20} /> 
                    :
                    <FontAweasome name="eye" color="grey" size={20}/>
                    }
                    </TouchableOpacity>

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Confrompassword}</Text>
             <TouchableOpacity 

                          onPress={onsumbit}
                          style={[styles.signIn,{borderColor:'#566573', borderWidth:1, marginTop:20}]}
                          >
                              <Text style={[styles.textSign,{color:'#566573'}]}>Conform</Text>
                          </TouchableOpacity>


{/* for dialog box */}


<Dialog.Container visible={visible}>
        <Dialog.Title style={{alignItems:'center'}}>Varification</Dialog.Title>
        <Dialog.Description>
          
        Enter 6 digit varification code send to your number
        
        </Dialog.Description>
        
        <Dialog.Input placeholder="Enter Code..." style={{backgroundColor:"#CCD1D1"}} maxLength={6} value={Entercode} onChangeText={(value)=>{setEntercode(value)}}  keyboardType="numeric" />
        <Dialog.Button label="Varify" onPress={varifycode} />
        
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        
        <Dialog.Button label="Resent" onPress={ResentCode} />
      </Dialog.Container>




             </ScrollView>
</Animatable.View>          

 </View>
  );
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        flex:1,
    backgroundColor:'#1C2833'
      },
     header:{
    backgroundColor:'#1C2833',
    flex:1,
    
    
    }, 
    footer:{
        backgroundColor: '#fff',
        flex:2,
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
       // paddingTop:5,    
        marginLeft:5
    
    },
    textstyle:{
        fontSize:23,
        color:'#05375a',
      
        marginTop:5,
      
        
    },
    inputtext:
        {
            padding:1,
            width:'85%',
            marginLeft:5,
            borderBottomColor:'#566573',
            borderBottomWidth:3,
            height:33,
            textDecorationColor:'black',
            backgroundColor:'#fff',
            fontSize:18,
            marginBottom:10
            
           
        },
        imagee:
              { marginTop:8,
                  height:35,  
                  width:25,
                 marginLeft:5,
                 marginRight:5
                
                // borderRadius:30
              },
              headerlogo:
              {
                height:85,
                  width:85,
                  marginTop:20,
                  marginLeft:150
              },
              signIn: {
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10
              },
              textSign: {
                  fontSize: 25,
                  fontWeight: 'bold'
                  
              },
    
})



// axios.post('http://127.0.0.1:8000/DriverForgetPassword',value)
//             .then(req=>{
//             if(req.data.Check==='True')
//             {
//                 setdata({...data,Email:'',Password:'',Confrompassword:''})
//                 Alert.alert('Alert..!','Your password is Reset',[{text:'OK',onPress:()=>navigation.navigate('signin')}])
//             }
//             else
//             {
//                 setdata({...data,Email:'',Password:'',Confrompassword:''})
//                 Alert.alert('Email not exist')
            
//             }
//             })
//             .catch(err=>{
//             console.log(err)
//             })