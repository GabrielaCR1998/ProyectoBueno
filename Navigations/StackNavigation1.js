import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../Screens/Menu';
import Perritos from '../Screens/Perritos';
import Donadores from '../Screens/Donadores';
import clic from '../Screens/clic';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="MexPet" component={Menu}
            options={{
              headerLeft:(props) => <LogoTitle {...props} />, 
                headerStyle:{
                        backgroundColor:'#051C4B',
                        borderBottomColor:'#6691B0',
                        borderBottomWidth:2
                },
                headerTitleStyle:{
                        color:'#80C0EE',
                        textAlign:'center',
                        fontWeight: "bold",
                        fontSize: 30
                }
            }}
            />
            <Stack.Screen name="Perritos" component={Perritos}/>
            <Stack.Screen name="Donadores" component={Donadores}/>
            <Stack.Screen name="clic" component={clic}/>
        </Stack.Navigator>
    )
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../Imagenes/logomex.png')}
    />
  );
}