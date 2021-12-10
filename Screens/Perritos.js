import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native'
import { Card, Header } from 'react-native-elements';
import { ApiContext } from '../Context/ApiContext';
import React, { createContext, useState } from 'react';

const Perritos = ({navigation}) => {
  const [perro, setPerro] = useState({});

   const buscar = () => {
    const api_url = `https://dog.ceo/api/breeds/image/random`;
    fetch(api_url)
      .then((data) => {
        return data.json();
      })
      .then((mostrar) => {
        console.log(mostrar);
        setPerro(mostrar);
      });
  };
  
    return (
       <ScrollView>
            <Header
                centerComponent={{text: 'Perritos Ayudados', style: { color: '#80C0EE', fontWeight: "bold", fontSize: 20}}}
                containerStyle={{
                backgroundColor: '#051C4B',
                }}
            />
            <View>
              <Text style={styles.texto2}>En esta sección encontraras a todos los perritos que hemos apoyado nosotros y nuestros usuarios. Tu tambien puedes ayudarlos, solo debes de ir a la sección de donaciones. Todo lo recaudado va a refugios de perritos.  </Text>
              <Text style={styles.texto2}>Sí quieres ver mas caritas contentas dale click al botón. </Text>
              <Text>         </Text>
            <View>
            </View>
              <Button title="Perritos" color="grey" onPress={() => buscar()}/>
              {perro.length === 0 ?
              <Text> No hay Perro </Text>
              :
              <View>
                <Card>
                  <View>
                    <Image style={{minHeight:250, minWidth: 150}}
                    source={{uri: perro.message}}/>
                  </View>
                </Card> 
              </View>
            }
            </View>
        </ScrollView>
    );
};
export default Perritos;

const styles = StyleSheet.create({
  texto2: {
      flex: 1,
      textAlign: 'center', 
      fontSize: 18,
       color:'#4F5356'
    },
});
