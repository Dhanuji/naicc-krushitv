import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
// import SecondTab from './BottomTabNav';

export default function Mihikatha() {
  return  (
  
    
<View >

    <View style={{height:"100%" , width:"100%"}}>
     <WebView source={{ uri: 'https://youtube.com/playlist?list=PLWQ5Ps8soI9g5COIwFn9fmuDYZHi9MyJb' }} style={{ flex: 1 }}/>
    </View>
    
    <View style={styles.tag1}></View>
   
   

</View>


     )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tag1:{

    position: 'absolute',bottom: 0, zIndex: 5, height:50, width:'100%', backgroundColor:'black'
  },
  tag2:{

    position: 'absolute',top: 0, zIndex: 5, height:40, width:'100%', backgroundColor:'black'
  },
});