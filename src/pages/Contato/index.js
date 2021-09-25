import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Contato() {
  return (

    <View style={styles.container}>

     
    <Image source={require('../../assets/ceu2.jpeg')}style={{width:450,height:350}} /> 

     <Text style={styles.instructions}>
    
      AMAI

    </Text>

  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#CCEEFF',
  alignItems: 'center',
  justifyContent: 'center',
},

 input:{
   marginTop:6,
   padding: 6,
   width: 300,
   backgroundColor: '#fff',
   fontSize: 16,
   fontWeight: 'bold',
   borderRadius: 3
 },

logo: {
  width: 305,
  height: 159,
  marginBottom: 20,
},

botao:{  
  width: 300,
  height: 40,
  backgroundColor: '#3498db', 
  marginTop: 6,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent:'center',
  fontWeight: 'bold', 
  fontSize: 16
},
botaoText:{
fontWeight: 'bold', 
fontSize: 16,
color:'#fff'

},

instructions: {
  color: '#1C1C1C',
  fontSize: 18,
  marginHorizontal: 15,
  marginBottom: 10,
},
});