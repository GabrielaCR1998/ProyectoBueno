import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Equipo() {
  return (
    <View>
     
    <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 20, color:'#08B9D7'}}> Liderazgo de la compañía </Text>
    <Text>    </Text>
    <Text style={styles.texto2}>        Cruz Ramirez gabriela              Garcia Chavez Axel</Text>
    <Text style={styles.texto2}>                Fundadora                                Fundador </Text>
    <Image source={require('../Imagenes/fundadores.png')}style = {{width: 370, height: 150,  margin: 0}}/>
    <Text>    </Text>
    <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 20, color:'#08B9D7'}}> Colaboradores </Text>
    <Text>    </Text>
    <Text style={styles.texto2}>       Osorio Ramirez Carolina              Rosas Flores Bryan</Text>
    <Text style={styles.texto2}>                Veterinario                                Veterinario </Text>
    <Image source={require('../Imagenes/veterinarios.jpg')}style = {{width: 370, height: 150,  margin: 0}}/>
    <Text>    </Text>
    <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 20, color:'#08B9D7'}}> Agradecimiento Especial </Text>
    <Text style={{textAlign: 'center', fontSize: 13, color:'#4F5356'}}> A la profesora DANIELA ADRIANA SANCHEZ VIZCARRA por enseñarnos a utilizar REACT <Ionicons name={"paw"} size={20} /> </Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
  texto2: {
      flex: 1,
      textAlign: 'left', 
      fontSize: 13,
       color:'#4F5356'
    },

});