import React, { Component ,useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard ,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  
  
  View
} from 'react-native';
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient';
import FontAweasome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {ActivityIndicator} from 'react-native';
const FindRoute=({route,navigation})=>
{
  
  const { uid} = route.params;

///////////////////////////////////////////

const[loading,isloading]=useState(false)
const [loadingerror,setloadingerror]=useState("Loading...")


const [dataa,setdataa]=useState([])

const [Iscondition,setIscondition]=useState(false)

// useEffect(()=>{

  
  
//   },[])






  // ////////////////////////////////////



const [BusRoute,setBusRoute]=useState([''])
const [BusRoute2,setBusRoute2]=useState([''])




useEffect(()=>{
    axios.get('http://127.0.0.1:8000/showroutelist')
    .then(res=>{
        //  console.log(res.data)
        setBusRoute(res.data)
        setBusRoute2(res.data)
    })
    .catch(err=>{
        console.log(err)
    })



   


    
},[])



const [query, setQuery] = useState('');

const [shouldShow, setShouldShow] = useState(false);




const updateQuery = (input) => {
  setQuery(input);
 
    setShouldShow(true);
    setShouldShow2(false);
    setIscondition(false);
  

}

const findbus =(query)=>
      {
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~]/;
       if (query === '' || format.test(query))
           {
             
           return [];
         
           }
           
       const  buses   = BusRoute;
      
       const regex = new RegExp(`${query.trim()}`,'i');
       
     
       return buses.filter(bus => bus.Name.search(regex) >= 0); // yaha name set krna hay film ka
     }

/////////////// 22
     const [query2, setQuery2] = useState('');

const [shouldShow2, setShouldShow2] = useState(false);

const updateQuery2 = (input) => {
  setQuery2(input);
  
  setShouldShow(false);
    setShouldShow2(true);
    setIscondition(false);
  

}

const findbus2 =(query)=>
      {
        var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~]/;
       if (query === '' || format.test(query))
           {
             
           return [];
         
           }
           
       const  buses   = BusRoute2;
      
       const regex = new RegExp(`${query.trim()}`,'i');
       
     
       return buses.filter(bus => bus.Name.search(regex) >= 0); // yaha name set krna hay film ka
     }



    const check=()=>
     {
      //  setIscondition(true)
      setShouldShow(false);
      setShouldShow2(false);
      
      if(query !== query2 && query!=='' && query2 !=='' )
      {
       

        const result ={
          To:query,
          From:query2,
          uid:uid
        }
        isloading(true);
      axios.post('http://127.0.0.1:8000/routefinder',result)
      .then((req)=>{

        isloading(false);
      setdataa(req.data)

      if(req.data.length >0)
      {
        setIscondition(true);
        setQuery('')
        setQuery2('')
      }
      else
      {
        setQuery('')
        setQuery2('')
        alert('No match Found')
      }
     
  
      })
      
      
      .catch((err)=>{
        isloading(true);
        setloadingerror("Network Error...")
        console.log(err)
      })


    }
    else
    {
      alert("Invalid input")
      setQuery('')
      setQuery2('')
    }



     }
   



const setcondition =()=>
{
setIscondition(false)
}

// const  check=()=>
// {
//   if(query!==query2)
//   {
//     print("OK")
//   }

// }
     const buss=findbus(query);
const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

const buss2=findbus2(query2);
const comp2 = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

return(

  <View style={{flex:1}}>
  { loading ?  

<View  style={styles.laoderstyle}>
    <ActivityIndicator size='large' width='90%' color='black'/>
    <Text style={{fontSize:25,color:'#515A5A'}} >{loadingerror}</Text>
</View>:

<View  style={styles.container}>

<ImageBackground source={require('../Images/map.png')} style={{height:'100%',width:'100%'}} resizeMode="stretch">

<View style={styles.header}>
  

            <View>
            <Text style={styles.textstyle}>Pick-Up</Text>
            </View>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../Images/TO.png')} style={styles.imagee} resizeMode="stretch"/>
                    <TextInput  style={styles.inputtext}
                    placeholder="Type Here..." 
                    keyboardType='default'
                    autoCorrect={false}
                    onChangeText={updateQuery}
                    defaultValue={query}
                    />

                    </View>

                <View>
                <Text style={styles.textstyle}>Drop-Off</Text>
                </View>

                <View style={{flexDirection:'row',marginBottom:5}} >
                <Image source={require('../Images/From.png')} style={styles.imagee} resizeMode="stretch"/>
                <TextInput style={styles.inputtext}
                placeholder="Type Here.."
                keyboardType='default'
                autoCorrect={false}
                onChangeText={updateQuery2}
                    defaultValue={query2}
                />
{/* post for serarching data */}
              <TouchableOpacity activeOpacity={.6}  style={styles.button} onPress={check}>
                {/* <Text style={{fontSize:18,color:'#fff'}}>Go</Text> */}
                <FontAweasome name="search" color='#fff' size={20} style={{margin:3}} />
              </TouchableOpacity>
              
                </View>
                

               
</View>



{/*

yaha pay ham jab result ae ga find out ka to wo wala view render kar day gay yaha pay

*/}


{shouldShow == true  ? 

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View style={styles.footer} >

<TouchableOpacity onPress={()=>{setShouldShow(false)}}>
{/* <Image source={require('../Images/close.png')}  resizeMode="stretch" /> */}


<FontAweasome name="times-circle" color="black"  size={20} style={{marginLeft:'93%',marginTop:3}} />
</TouchableOpacity>

<View style={{ width: '51%', height: 4, backgroundColor: '#943126',marginLeft:'25%',marginBottom:5 }} />



<FlatList data={buss.length === 1 && comp(query, buss[0].Name) ? [] : buss} 
keyExtractor = {(i)=>i.id.toString()}

  renderItem = {(item) =>
  
<TouchableOpacity  style={styles.liststyle} onPress={()=> {setQuery(item.item.Name),setShouldShow(false)}}>
  <View style={{flexDirection:'row'}}>
<Image source={require('../Images/pin.png')} style={{height:22,width:20,marginLeft:'2%',margin:5}} resizeMode="stretch"/>
<Text style={{fontSize:20,color:'#17202A',marginLeft:5,marginTop:10,marginEnd:'7.8%'}}>{item.item.Name}</Text>
</View>
<View style={{ width: '80%', height: 2, backgroundColor: '#943126',marginLeft:'11%',marginBottom:2 }} />
  </TouchableOpacity>

  }
 
/>  

   </View>
    </TouchableWithoutFeedback>
  
: null }


{/* 22222 */}



{shouldShow2 == true  ? 

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<View style={styles.footer} >

<TouchableOpacity onPress={()=>{setShouldShow2(false)}}>
<FontAweasome name="times-circle" color="black"  size={20} style={{marginLeft:'93%',marginTop:3}} />
</TouchableOpacity>

<View style={{ width: '50%', height: 4, backgroundColor: '#943126',marginLeft:'25%',marginBottom:5 }} />



<FlatList data={buss2.length === 1 && comp2(query2, buss2[0].Name) ? [] : buss2} 
keyExtractor = {(i)=>i.id.toString()}

  renderItem = {(item) =>
  
<TouchableOpacity  style={styles.liststyle} onPress={()=> {setQuery2(item.item.Name),setShouldShow2(false)}}>
  <View style={{flexDirection:'row'}}>
<Image source={require('../Images/pin.png')} style={{height:22,width:20,marginLeft:'2%',margin:5}} resizeMode="stretch"/>
<Text style={{fontSize:20,color:'#17202A',marginLeft:5,marginTop:10,marginEnd:'7.8%'}}>{item.item.Name}</Text>
</View>
<View style={{ width: '80%', height: 2, backgroundColor: '#943126',marginLeft:'11%',marginBottom:2 }} />
  </TouchableOpacity>

  }
 
/>  

   </View>
    </TouchableWithoutFeedback>
  
: null }

{Iscondition == true ? 

<Animatable.View animation="fadeInUpBig" style={styles.resultlist}>


  <View style={{justifyContent:'space-between',margin:2,flexDirection:'row'}}>
  <FontAweasome name="asterisk" color="black"  size={15}  />


  <TouchableOpacity onPress={()=>{setIscondition(false)}}>
  <FontAweasome name="times-circle" color="black"  size={18}  />
  </TouchableOpacity>

</View>
<FlatList

data={dataa}
keyExtractor={(item)=>item.id.toString()}
renderItem={({ item}) => (
// console.log(item)
<ScrollView>
  <View style={{marginTop:3}}>

    <View style={{flexDirection:'row',backgroundColor:'#1D8348',justifyContent:'center'}}>

    <FontAweasome name="bus" color="#fff"  size={27} style={{margin:5}} />
 <Text style={{color:'#fff',fontSize:25}}>{item.route_name}</Text> 
 <FontAweasome name="angle-double-down" color="#fff"  size={27} style={{margin:5}} />

 </View>

 

    {item.route.map((v) => (

      <>
<TouchableOpacity onPress={()=> navigation.navigate('ArriverTime',{'busdata':v})}>
  <View style={styles.innerlistt}>
  <FontAweasome name="street-view" color="black"  size={27} style={{margin:2}} />
        <Text style={{fontSize:17}}>Start: {v.To}</Text>
        </View>

        <View style={styles.innerlistt}>
  <FontAweasome name="map-marker" color="#E74C3C"  size={27} style={{margin:5}} />
        <Text style={{fontSize:17,marginEnd:10}}>End: {v.From}</Text>
        </View>
       
        <View style={{justifyContent:'space-between',flexDirection:'row'}}> 

        <Text style={styles.valuestyle}> Rs.{v.Fare} </Text>
        <Text style={styles.valuestyle}> Bus: {v.BusName} </Text>
        <Text style={styles.valuestyle}> {v.Distance}km  </Text>
        </View>

        <View />
        </TouchableOpacity>

      </>

    ))}

  </View>
  </ScrollView>
)}

/>

</Animatable.View>
 : null} 


    </ImageBackground>
</View>
}
</View>

);
}

export default FindRoute;

const styles = StyleSheet.create({
container:
{
flex:1,
backgroundColor:'#fff',

},
header:{
    backgroundColor:'#EAECEE',
  //  flex:1,
    
    
    shadowColor:'#17202A',
    shadowOffset:{height:5,width:5},
    shadowOpacity: 10,
    shadowRadius: 2,  
    elevation:10,


    },

        footer:{
            backgroundColor: '#E5E7E9',
            flex:3,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
           // paddingVertical:50,
           // paddingHorizontal:30,
            width:'95%',
            marginLeft:10,
            marginTop:10,
        },

        textstyle:{
            fontSize:17,
            color:'#17202A',
            marginLeft:50,
            margin:2,
           // marginTop:5,
          // textAlign:'justify'
            
        },
        inputtext:
        {
            padding:1,
            width:'70%',
            //marginLeft:50,
            borderBottomColor:'#566573',
            borderBottomWidth:3,
            height:33,
            textDecorationColor:'black',
            backgroundColor:'#fff',
            fontSize:16
            //marginLeft:2,
         // flex:10
        },
        button: {
            alignItems:'center',
            backgroundColor: 'black',         
            borderRadius:40,
            width:'14%',
            marginLeft:6,
            marginTop:3,
            marginBottom:2,
        },
        imagee:
              {
                  height:30,  
                  width:30,
                 marginLeft:12,
                 marginRight:6
                
                // borderRadius:30
              },

              liststyle:
              {
               // alignItems:'center',
                backgroundColor: '#FBFCFC',         
                borderRadius:15,
                width:'97%',
                marginLeft:"1.3%",
                marginTop:3,
                marginBottom:3,


                shadowColor:'#17202A',
                shadowOffset:{height:5,width:5},
                shadowOpacity: 10,
                shadowRadius: 2,  
                elevation:10,
              },

              resultlist:{
                backgroundColor: '#fff',  //#BFC9CA
                flex:3,
                // borderTopLeftRadius:30,
                // borderTopRightRadius:30,
               // paddingVertical:50,
               // paddingHorizontal:30,
                width:'95%',
                marginLeft:10,
                marginTop:10,
            },
            innerlistt:
            {
              backgroundColor:'#AEB6BF',
              flexDirection:'row',
              // alignItems:'center',
              margin:3,
              height:40,
              borderRadius:11,
              
            },
            valuestyle:{fontSize:15,
              backgroundColor:'black',
              color:'#fff',
            borderRadius:8,
            marginEnd:3
          },

          laoderstyle:{
          height:'100%',
          width:'100%',
          alignItems:'center',
          justifyContent:"center",
          backgroundColor:'#D6DBDF'
          
          
          }




});