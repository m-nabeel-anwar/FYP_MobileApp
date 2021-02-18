import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity,FlatList} from 'react-native';
import { useLinkProps } from '@react-navigation/native';




const ext1=({navigation})=>
{

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [heroes, setHeroes] = useState([]);
    
    var BusRoute=[
                  {"id":1,"name":"New karachi allahwala masjid"},
                    {"id":2,"name":"Sindhi hotelN"},
                    {"id":3,"name":"Godhra camp"},
                    {"id":4,"name":"F.B Area"},
                    {"id":5,"name":"Karimabad"},
                    {"id":6,"name":"Liaquatabad No.10"},
                    {"id":7,"name":"Direct Bunder Road"},
                    {"id":8,"name":"Light house"},
                    {"id":9,"name":"Taj hotel"},
                    {"id":10,"name":"Boulton Market"},
                    {"id":11,"name":"Tower"},
                    {"id":12,"name":"Nagina cinema"},
                    {"id":13,"name":"Kemari"}
  
  ];

     // setData(BusRoute);
     // setHeroes(BusRoute.slice());

//get data from api

    const fetchData = async () => {
        const res = await fetch('https://api.opendota.com/api/heroes');
        const json = await res.json();

     // const json=JSON.parse(BusRoute);
        setData(json);
        setHeroes(json.slice());

    };

      useEffect(() => {
        fetchData();
      }, []);




      // name format setting
      const formatNames = (hero) => {
        let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15);
        heroName = heroName.replace(/_/g, " ");
        return heroName;
     }


     const updateQuery = (input) => {
        setQuery(input);
       // console.log(query);

       setHeroes(data.slice());
      }

/// logic for set name
      const filterNames = (hero) => {
        // 1.
        let search = query.toLowerCase().replace(/ /g,"_"); 
      //  let search=query.charAt(0).toUpperCase();
        //2.
        if(hero.name.startsWith(search, 14))
        //if([hero.name.startsWith(search, 0)])
        {
           //3.
           return formatNames(hero);
         // return hero;
        }
        else{ 
           //4.
          { heroes.splice(heroes.indexOf(hero), 1)}; //
           return null;
        }
     }


    return(


<View>
{/*search bar area*/}

<SearchBar
 onChangeText={updateQuery}
 value={query}   
 placeholder="Type Here..."/>

{/*list yaha hay*/}

{!query  ? 
  <Text style={{textAlign:'center',color:'red'}}>Find Your Route  here</Text>
 
:
<FlatList data={heroes} keyExtractor = {(i)=>i.id.toString()}
  extraData = {query} 
  renderItem = {({item}) =>
  
    <Text onPress={()=>updateQuery(filterNames(item))} style={styles.flatList}>{filterNames(item)}
    
    </Text>} />
}

</View>

);
}

export default ext1;
const styles = StyleSheet.create({

    container: {
        flex:1,
    //backgroundColor:'#566573'
      },

      flatList:{
        paddingLeft: 15, 
        marginTop:15, 
        paddingBottom:15,
        fontSize: 20,
        borderBottomColor:'#26a69a',
        borderBottomWidth:1
    },

});