import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TiendaContext } from '../Context/TiendaContext';


export default function HomeScreen() {
  const { catalogo, agregarWishList, eliminarWishList, agregarCarro } = useContext(TiendaContext);
  return (
    <View>
      <ScrollView>
          <View>
            <Header 
            centerComponent={{text: 'Productos', style: { color: '#80C0EE', fontWeight: "bold", fontSize: 25}}}
            containerStyle={{
            backgroundColor: '#051C4B',
            }}
            />
          </View>
        {catalogo.map((x)=>(
          <Card>
            <Card.Title>{x.titulo}</Card.Title>
             <Card.Divider/>
            <Text >Precio = ${x.precio} </Text> 
            <Text> Para = {x.categoria}</Text>
            <View style={{ alignItems: 'center', justifyContent: 'flex-end',flexDirection: 'row',}}>
            <TouchableHighlight onPress={()=>agregarCarro(x)}>
            <Ionicons name={'cart-outline'} size={22} color={'#80C0EE'} />
            </TouchableHighlight>
            {x.desactivado === false ? (
            <TouchableHighlight onPress={() => agregarWishList(x)}>
            <Ionicons name={'paw-outline'} size={22} color={'#041B43'} />
            </TouchableHighlight>
            ):(
            <TouchableHighlight onPress={() => eliminarWishList(x)}>
            <Ionicons name={'paw'} size={22} color={'#041B43'} />
            </TouchableHighlight>
            )}
            </View>
            </Card>
            ))}
       </ScrollView>
     </View>
   );
 }