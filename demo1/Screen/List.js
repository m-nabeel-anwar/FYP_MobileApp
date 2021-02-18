
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
    ScrollView,
    FlatList
} from 'react-native';
import axios from 'axios';


const List = ({navigation}) => 
{
      
const [data,setdata]=useState([])
// const [value,setvalue]=useState({To:"A",From:"E"})
useEffect(()=>{

    axios.get('http://127.0.0.1:8000/routefinder')
  .then((req)=>{
    
  setdata(req.data)
//   setpointer(req.data)
//   console.log(req.data)
  
  
  })
  
  
  .catch((err)=>{
    console.log(err)
  })
  
  },[])
return(

    
<View style={style.container}>



{/* meeeeeeeeeeeeeeeeee */}

<FlatList

data={data}
keyExtractor={(item)=>item.id.toString()}
renderItem={({ item}) => (
// console.log(item)
  <View>
 <Text style={{color:'red',textAlign:'center',backgroundColor:'blue'}}>{item.route_name}</Text>
    {item.route.map((v) => (

      <>

        <Text>Source: {v.To}</Text>

        <Text>Destination {v.From}</Text>
       
       
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        <Text>Rs.{v.Fare}</Text>
        <Text>Bus {v.BusName}</Text>
        <Text>{v.Distance}km  </Text>
        </View>
        <View />

      </>

    ))}

  </View>

)}

/>

</View>
)

}
export default List;

const style=StyleSheet.create({


    container:{
        flex:1,
        color:'#fff'
    },



})
