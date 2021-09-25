import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

function CustomDrawer ({...props}){
  return (

    

    <View style={styles.container}>
    

      <View style={styles.userArea}>

      <Image
        source={require('../../assets/user.jpg')}
        style={ styles.user}
        />

      <Text style={styles.nome}> MINISTÉRIO </Text>
      <Text style={styles.nome}> Amai Sempre</Text>
      <Text style={styles.email}> amaisempre@teste.com.br</Text>
   
   
      </View>
    
      
      <DrawerNavigatorItems{... props}/>
   </View>
   


  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

  userArea:{
      marginTop: 15,
      marginLeft: 13,
      marginBottom: 12
  },
  user:{
     width:150,
     height: 150,
     borderRadius:100,
     alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'column'
    

  },
  nome:{
    marginTop: 23,
    fontSize: 21,
    fontWeight: 'bold'
  },
   email:{
     fontSize:15
   }

  });


export default CustomDrawer;