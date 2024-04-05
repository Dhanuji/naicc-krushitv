import React, { Component ,useCallback} from 'react'
import { View, Text, Button,Image,SafeAreaView,StyleSheet,Linking } from 'react-native'
import * as Icon from "react-native-feather";



const supportedURL = 'https://www.facebook.com/krushitv/';
const fb = require('../assets/fb.png');
const naicc = require('../assets/naicc.png');

// .....fb.....

const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
     
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
       
        await Linking.openURL(url);
      } else {
        Alert.alert(` open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };



// .....

export default class Sub extends Component {
  state = {
    textValue: 'Subscribe'
  }

  onPress = () => {
    this.setState({
      textValue: 'Unsubscribe'
    })
  }
 
  render() {
    return (
        <SafeAreaView>
      

<View style={styles.header}>

<View style={{paddingTop:18,left:0 , width:200,}}>

            <Image source={require('../assets/logo.png')}
              style={styles.logo1} /> 


</View> 
              {/* 
.......sub and fb button............ */}
          <View style={{paddingTop:40, height: 80,flexDirection: 'row',alignContent:'center',alignItems:'center',paddingRight:15}}>
          
           <Image source={naicc} resizeMode="cover" style={styles.logo3}  ></Image> 
          </View> 
         {/*  <View style={{paddingTop:30,left:45 , width:200,flexDirection: 'row',alignItems:'center'}}>
        <Button title={this.state.textValue}onPress={this.onPress}  color="#ed2939"  />
         <Image source={sub} resizeMode="cover" style={styles.logo3}></Image> 
</View>
        */}

   

{/* ....................... */}
          </View>

        

         


</SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
    
  
header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    
    paddingVertical:10,
    flexDirection: 'row',
   
  },
  logo1: {width: 60, height: 80, alignItems:'flex-start',paddingTop:5},
  logo2: { alignItems: 'flex-end',flexDirection: 'row',position:'absolute',right:0 ,top: 50,borderRadius:100,borderBottomLeftRadius:80,},
  logo3: {width: 45, height: 33, alignItems: 'flex-end'},
});
