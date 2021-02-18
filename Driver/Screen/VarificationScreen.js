import React, { Component,useState } from 'react'

import {StyleSheet,
    Text,
    View,
     Dimensions,
     Image,
     TouchableOpacity,
     Button
    } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
// for dialog
import Dialog from "react-native-dialog";
import { color } from 'react-native-reanimated';
const VarificationScreen = ({navigation}) =>
{
    const [visible, setVisible] = useState(false);
  //  const [number,setnumber]=useState('032122232')
  const number="032122232"
    const createTwoButtonAlert = () =>
   { 
    setVisible(true); 
    //    Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // // console.log("ok")
    // );


  }

  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

        return (
            <View style={styless.container}>
                <Text>notification</Text>

                <Button title="click me" color="red" onPress={createTwoButtonAlert}/>


                {/* <Button title="Show dialog" onPress={showDialog} /> */}

                <Dialog.Container visible={visible}>
        <Dialog.Title style={{alignItems:'center'}}>Varification</Dialog.Title>
        <Dialog.Description>
          
        Enter 6 digit code send to  {number.toString()}
        
        </Dialog.Description>
        
        <Dialog.Input placeholder="Enter Code..." style={{backgroundColor:"#CCD1D1"}} />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
        <Dialog.Button label="Delete" onPress={handleDelete} />
      </Dialog.Container>


            </View>
        )
    
}

export default VarificationScreen

const styless= StyleSheet.create({

    container:
    {
        flex:1,
        color:'#ffff'
    }

})
// npm install react-native-dialog