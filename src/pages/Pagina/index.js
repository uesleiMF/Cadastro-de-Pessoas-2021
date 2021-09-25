import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,Linking, Platform ,TouchableOpacity} from 'react-native';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}> 
      
      <Image source={require('../../assets/user.jpg')}style={{width:150,height:150, borderRadius:100}} /> 
 
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            Linking.openURL(
              'https://www.facebook.com/ministerio.amai7'
            );
          }}>

          <Image source={require('../../assets/face.jpeg')}style={{width: 75,height:90,resizeMode: 'contain', }} />
  
   
          </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL(
                'http://maps.apple.com/?ll=-23.5864258,-46.684084'
              );
            } else {
              Linking.openURL(
                'geo:-5.335758966167344, -49.094124273327985'
              );
            }
          }}>
     
            <Image source={require('../../assets/loc.png')}style={{width: 70,height:80,resizeMode: 'contain',}} />
        
            </TouchableOpacity>  

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            Linking.openURL(
              'https://chat.whatsapp.com/LMcGaH6ZgeuBmJEmP8HvOZ'
            );
          }}>
          
          <Image source={require('../../assets/zapr.jpg')}style={{width: 75,height:85,resizeMode: 'contain', }} />
        
        </TouchableOpacity>
        
        <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL(
              'mailto:contato@google.com.br'
            );
          }}>
          Enviar Email
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 30,
    fontSize: 25,
  },
})