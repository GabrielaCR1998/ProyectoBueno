import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import CustomButton from '../Screens/CustomButton';


export default function Nosotros() {
  return (
    <View>
     
     <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 18, color:'#08B9D7'}}> Nuestra Historia </Text>
      <Text style={styles.texto2}> Nuestra empresa MexPet nace de la idea de ver la situación en México, ya que existe una escasez de accesorios médicos para los mascotas , por lo que nos dimos a la tarea de...  </Text>
      <CustomButton onPress={()=> alert(`Nuestra empresa MexPet nace de la idea de ver la situación en México, ya que existe una escasez de accesorios médicos para los mascotas , por lo que nos dimos a la tarea de poder ofrecer la oportunidad de mejorar el estilo de vida de la mascota, que alegran nuestro día a día, ayudando a perros y gatos que sufren de una discapacidad, ya sea que su causa sea por nacimiento, por accidentes o enfermedades, incluso ayudamos así a las familias las cuales tienen un gran vínculo con su mascota`) } title="Leer mas" />
      
      <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 18, color:'#08B9D7'}}> Misión </Text>
      <Text style={styles.texto2}> En Mexpet somos una empresa dedicada en la distribución, diseño, fabricación y comercialización de prótesis 3d para mascotas, con aspectos...</Text>
      <CustomButton onPress={()=> alert(`En Mexpet somos una empresa dedicada en la distribución, diseño, fabricación y comercialización de prótesis 3d para mascotas, con aspectos ergonómicos y económicos para apoyar en su movilidad.
`) } title="Leer mas" />

      <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 18, color:'#08B9D7'}}> Visión </Text>
      <Text style={styles.texto2}> En Mexpet somos una empresa dedicada en la distribución, diseño, fabricación y comercialización de prótesis 3d para mascotas, con aspectos...</Text>
      <CustomButton onPress={()=> alert(`Nuestra visión es ser una distribuidora de vanguardia en calidad, oportunidad y accesibilidad al público, superar las expectativas en la mejoría de salud y calidad de vida de las mascotas, fomentando la salud en las mismas. ya que son un miembro de una familia.`) } title="Leer mas" />
      <Image source={require('../Imagenes/perro22.jpg')}
              style = {{width: 350, height: 280}}/>

    </View>
  );
}
 
const styles = StyleSheet.create({
  texto2: {
      flex: 1,
      textAlign: 'center', 
      fontSize: 13,
       color:'#4F5356'
    },

});
