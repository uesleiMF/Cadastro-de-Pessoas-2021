import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function  Perfil() {
  return (

    <View style={styles.container}>

     
    <Image source={require('../../assets/img.png')}style={{ width:150,height:150, borderRadius:70, }} /> 

    <Text style={styles.instructions}>
    <Text style={styles.nome}> REDE DE CASAIS</Text>
     </Text>

    <Text style={styles.instructions}>
     <Text style={styles.nome}> Amai Sempre</Text>
     </Text>

     <Text>
     <Text style={styles.nome}> Sejam bem vindos!</Text>
     </Text>


   <TextInput
    style={styles.input}
    placeholder= "Nome Completo"
    /> 
    <TextInput
    style={styles.input}
    placeholder= "Contato"
    />
    <TextInput
    style={styles.input}
    placeholder= "Endereço"
    />

<TouchableOpacity
    style={styles.botao}
      onPress={() => alert('Cadastro realizado com sucesso!')}>
      <Text styles={styles.botaoText}>CADASTRAR</Text>
      </TouchableOpacity>
      
    <TouchableOpacity
    style={styles.botao}
      onPress={() => alert('Você será direcionado para a pagina!')}>
      <Text styles={styles.botaoText}>CLIQUE AQUI</Text>
      </TouchableOpacity> 
  
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