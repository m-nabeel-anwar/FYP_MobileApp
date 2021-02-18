import React ,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image,ScrollView,Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import md5 from 'md5';
import Dialog from "react-native-dialog";

const Registration =({navigation})=> {
  
  
  
  const [passsord,setpassword]=useState({check:true})

  const [visible, setVisible] = useState(false); // for dialog box hide and show
const [code,setcode]=useState('')
const [Entercode,setEntercode]=useState('') // user enter code
  
  const checkpassword = ()=>
  {

    setpassword({...passsord, check:!passsord.check})
  }


const [data,setdata]=useState({Name:'',Contact:'',Email:'',Password:'',Cnic:''})
const [error,seterror]=useState({Name:'',Contact:'',Email:'',Password:'',Cnic:''})

const validationchecking=(value,type)=>
{
    if(type==="Name")
    {
   
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.0-9]/;
        if(format.test(value))
        {
            
            seterror({...error,Name:'*Invalid Text Entered'})
        }
        else
        {
            seterror({...error,Name:''});
            setdata({...data,Name:value})
        }

    }
    
    if(type==="Cnic")
    {
   
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.a-zA-Z ]/;
        if(format.test(value))
        {
            
            seterror({...error,Cnic:'*Invalid Value Entered'})
        }
        else
        {
            seterror({...error,Cnic:''});
            setdata({...data,Cnic:value})
        }

    }

    if(type==="Contact")
    {
  
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~.a-zA-Z ]/;
        if(format.test(value))
        {
            
            seterror({...error,Contact:'*Invalid Value Entered'})
        }
        else
        {
            seterror({...error,Contact:''});
            setdata({...data,Contact:value})
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


}



const submitdata=()=>
{
    var format =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(data.Name.length >2 && data.Cnic.length ===13 && data.Contact.length ===11  && data.Password.length ===16 && format.test(data.Email))
{


// setdata({...data,Password:md5(data.Password)}) // pass hashing md5
var value=
{
    Name:data.Name,
    Email:data.Email,
    Password:md5(data.Password),
    Cnic:data.Cnic,
    Contact:data.Contact

};

axios.post('http://127.0.0.1:8000/userregistrationtoken',value)
.then(req=>{
if(req.data.Check==='True')
{
    // setdata({...data,Name:'',Contact:'',Email:'',Password:'',Cnic:''})
    // Alert.alert('Thanks...','Your are registered',[{text:'Go',onPress:()=>navigation.navigate('SignIn')}])
                setcode(req.data.Code)
                setVisible(true);
}
else
{
    setdata({...data,Name:'',Contact:'',Email:'',Password:'',Cnic:''})
    Alert.alert('Email already exist')

}
})
.catch(err=>{
console.log(err)
})


}
else
{
    Alert.alert('Invalid Text')
}

}


const handleCancel = () => {
    setVisible(false);
  };


const varifycode =()=>{
    if (code== Entercode && Entercode!= null)
    {

        var value=
        {
            Name:data.Name,
            Email:data.Email,
            Password:md5(data.Password),
            Cnic:data.Cnic,
            Contact:data.Contact
        
        };
          axios.post('http://127.0.0.1:8000/getuserdetail',value)
                      .then(req=>{
                      if(req.data.Check==='True')
                      {
                        setdata({...data,Email:'',Password:'',Confrompassword:''})
                          setVisible(false);
                          setEntercode('')
                          setcode('')

                          Alert.alert('Alert..!','Your are registerd go to login',[{text:'OK',onPress:()=>navigation.navigate('SignIn')}])
                      }
                  
                      })
                      .catch(err=>{
                      console.log(err)
                      })



    }
    else{
      setVisible(false);
      Alert.alert("Invalid code Enterd")
      setEntercode('')
      setVisible(true);


    }
}




const ResentCode =()=>
{
    var value=
    {
        Name:data.Name,
        Email:data.Email,
        Password:md5(data.Password),
        Cnic:data.Cnic,
        Contact:data.Contact
    
    };
    axios.post('http://127.0.0.1:8000/userregistrationtoken',value)
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
        <Image source={require('../Images/Register.png')} style={styles.headerlogo} resizeMode="stretch"/>
        <Text style={styles.headertext}>Register Now</Text>
        </Animatable.View>


<Animatable.View style={styles.footer} animation="fadeInUpBig">
  <ScrollView>
      <View style={{ width: '50%', height: 4, backgroundColor: '#D5DBDB',marginLeft:'25%',marginBottom:5 }} />
              
      <View>
             <Text style={styles.textstyle}>Name</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/user.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="user" color="#05375a"  size={23}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='default'
                    autoCorrect={false}
                    maxLength={30}
                    value={data.Name}
                    onChangeText={(value)=>validationchecking(value,'Name')}
                  
                    />

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Name}</Text>




             <View>
             <Text style={styles.textstyle}>Cnic</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/email.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="address-card" color="#05375a"  size={22}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='numeric'
                    autoCorrect={false}
                    maxLength={13}
                    value={data.Cnic}
                    onChangeText={(value)=>validationchecking(value,'Cnic')}
                  
                    />

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Cnic}</Text>




             <View>
             <Text style={styles.textstyle}>Contact</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/contact.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="phone" color="#05375a"  size={25}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='numeric'
                    autoCorrect={false}
                    maxLength={11}
                    value={data.Contact}
                    onChangeText={(value)=>validationchecking(value,'Contact')}
                  
                    />

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Contact}</Text>
              
              
              
              <View>
             <Text style={styles.textstyle}>Email</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/email.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="envelope" color="#05375a"  size={18}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='email-address'
                    autoCorrect={false}
                    maxLength={25}
                    value={data.Email}
                    onChangeText={(value)=>validationchecking(value,'Email')}
                  
                    />

             </View>
             <Text style={{marginLeft:15,color:'red'}}>{error.Email}</Text>

           



             <View>
             <Text style={styles.textstyle}>Password</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    {/* <Image source={require('../Images/password.png')} style={styles.imagee} resizeMode="stretch"/> */}
                    <FontAweasome name="lock" color="#05375a"  size={23}/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='default'
                    autoCorrect={false}
                    maxLength={16}
                    value={data.Password}
                    onChangeText={(value)=>validationchecking(value,'Password')}
                    secureTextEntry={passsord.check ? true:false}     
                    />
                     {/* <Image source={require('../Images/eye.png')} style={styles.imagee} resizeMode="stretch"/> */}
                     <TouchableOpacity onPress={checkpassword}>
                         {passsord.check ? 
                     <FontAweasome name="eye-slash" color="grey"  size={20}/>
                     :
                     <FontAweasome name="eye" color="grey" size={20}/>
                     }
                     </TouchableOpacity>

             </View>
            
             <Text style={{marginLeft:15,color:'red'}}>{error.Password}</Text>
            
            

             </ScrollView>

                         <TouchableOpacity 
                        //   onPress={()=> navigation.navigate('Home')}
                          onPress={submitdata}
                          style={[styles.signIn,{borderColor:'#566573', borderWidth:1, marginTop:20}]}
                          >
                              <Text style={[styles.textSign,{color:'#566573'}]}>Register</Text>
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




</Animatable.View>          

 </View>
  );
}

export default Registration;

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
        fontSize:20,
        color:'#05375a',
        // marginLeft:30,
        // marginTop:5,
       // marginLeft:35,
        
       // marginTop:5,
      // textAlign:'justify'
        
    },
    inputtext:
        {
            padding:1,
            width:'85%',
            marginLeft:5,
            borderBottomColor:'#566573',
            borderBottomWidth:3,
            height:27,
            textDecorationColor:'black',
            backgroundColor:'#fff',
            fontSize:17,
            // marginBottom:5
            
            //marginLeft:2,
         // flex:10
        },
        imagee:
              { marginTop:8,
                  height:32,  
                  width:25,
                 marginLeft:5,
                 marginRight:5
                
                // borderRadius:30
              },
              headerlogo:
              {
                height:75,
                  width:65,
                  marginTop:5,
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
                  fontSize:25,
                  fontWeight: 'bold'
                  
              },
    
})