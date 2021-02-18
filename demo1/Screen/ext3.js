import Autocomplete from 'react-native-autocomplete-input';
import React, { Component ,useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,ScrollView,
  KeyboardAvoidingView,
  
  View
} from 'react-native';


const FindRoute=({navigation})=>
{

    var BusRoute=[
        {id:1,name:"New karachi allahwala masjid"},
          {id:2,name:"Sindhi hotel"},
          {id:3,name:"Godhra camp"},
          {id:4,name:"F.B Area"},
          {id:5,name:"Karimabad"},
          {id:6,name:"Liaquatabad No.10"},
          {id:7,name:"Direct Bunder Road"},
          {id:8,name:"Light house"},
          {id:9,name:"Taj hotel"},
          {id:10,name:"Boulton Market"},
          {id:11,name:"Tower"},
          {id:12,name:"Nagina cinema"},
          {id:13,name:"Kemari"}

];

    const [query, setQuery] = useState('');
    const [query2, setQuery2] = useState('');
    
    const updateQuery = (input) => {
        setQuery(input);
     
      }

      const updateQuery2 = (input) => {
        setQuery2(input);
     
      }

      const findbus =(query)=>
      {
       if (query === '')
           {
           return [];
           }
           
       const  buses   = BusRoute;
      
       const regex = new RegExp(`${query.trim()}`,'i');
       
      // console.log(query);
       return buses.filter(bus => bus.name.search(regex) >= 0); // yaha name set krna hay film ka
     }
// for bus 2
     const findbus2 =(query)=>
      {
       if (query === '')
           {
           return [];
           }
           
       const  buses   = BusRoute;
      
       const regex = new RegExp(`${query.trim()}`,'i');
       
      // console.log(query);
       return buses.filter(bus => bus.name.search(regex) >= 0); // yaha name set krna hay film ka
     }
     // 1stbos
const buss=findbus(query);
//2nd box
const buss2=findbus2(query2);
//console.log(buss);
const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return(

<View style={styles.container}>


<View style={styles.header}>
  <View style={{marginTop:10,backgroundColor:'#E5E7E9',borderRadius:25,width:'97%',marginLeft:7,shadowColor:'#85929E'}}>


<ScrollView >


  <View>
    <Text style={styles.textstyle}>Pick Up</Text>
  </View>
                  <View style={styles.autocompleteContainer}>
                  <Autocomplete
                            autoCapitalize="none"
                            autoCorrect={false}
                           // containerStyle={styles.autocompleteContainer}
                           
                            data={buss.length === 1 && comp(query, buss[0].name) ? [] : buss}  //// condition
                            defaultValue={query}
                            onChangeText={updateQuery}
                            placeholder="Enter source bus Stop"

                            renderItem={({item}) => (
                              <TouchableOpacity onPress={() => updateQuery(item.name)}>
                                <View>
                                <Text style={styles.itemText}>
                                  {item.name}             
                                </Text>
                                </View>
                                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
                              </TouchableOpacity>
                            )}
                          />
                     </View> 
   <View>
    <Text style={styles.textstyle}>Drop Off</Text>
  </View>

  <View style={styles.autocompleteContainer}>
                
                <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={false}
                       // containerStyle={styles.autocompleteContainer}
                        data={buss2.length === 1 && comp(query2, buss2[0].name) ? [] : buss2}  //// condition
                        defaultValue={query2}
                        onChangeText={updateQuery2}
                        placeholder="Enter Destination bus Stop"

                        renderItem={({item}) => (
                          <TouchableOpacity onPress={() => updateQuery2(item.name)}>
                            <Text style={styles.itemText}>
                              {item.name}             
                            </Text>
                            <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
                          </TouchableOpacity>
                        )}
                      />
                
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:18}}>Find</Text>
              </TouchableOpacity>
              
  </ScrollView>
  
  </View>
  <View>
    <Text>lowerpart</Text>
    </View>

 </View>
 



</View>



    );
}



export default FindRoute;



const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        
      },
      autocompleteContainer: {
        flex: 1,
        //left: 0,    
        //right: 0,
        //top: 0,
        zIndex: 1,
      width:'80%',
      marginLeft:50,
      position: 'relative',
      

      },
      itemText: {
        fontSize: 15,
        margin:2,
       // position:'absolute',
     // position: 'relative',
      },

      header:
      {
        backgroundColor:'#fff',
        flex:1,
        
         // position: 'relative',
          
      },

      textstyle:{
        fontSize:17,
        color:'#283747',
        marginLeft:50,
        margin:4,
      // textAlign:'justify'
        
    },  
    button: {
    alignItems:'center',
    backgroundColor: '#B3B6B7',
    padding: 10,
    borderRadius:40,
    width:'40%',
    marginLeft:'52%',
    marginTop:5,
    marginBottom:7,
  }   

});


//<KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
  
  //</KeyboardAvoidingView>




  {/**
              
*/}