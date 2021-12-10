import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TiendaContext } from '../Context/TiendaContext';

export default function Wishlist() {
  const { agregarCarro, wishList, eliminarWishList} = useContext(TiendaContext);
  return (
    <View>
      <ScrollView>
        <View>
          <Header 
          centerComponent={{text: 'WishList', style: { color: '#80C0EE', fontWeight: "bold", fontSize: 25}}}
          containerStyle={{
          backgroundColor: '#051C4B',
          }}
          />
        </View>
        {wishList.length === 0? (
          <View>
            <Image
             style={{height: 400, width: 300, margin: 45 }} source={require('../Imagenes/perrotriste.png')}/>
            <Text style={{fontWeight:'bold',textAlign:'center',fontSize: 25}}>Tu Wishlist esta vacia</Text>
            </View>): 
            ( wishList.map((x)=><Card>
            <Card.Title>{x.titulo}</Card.Title>
            <Card.Divider/>
            <Text>Precio = ${x.precio} </Text>
            <Text>Para = {x.categoria}</Text>
            <View style={styles.container}>
            <TouchableHighlight onPress={()=>agregarCarro(x)}>
            <Ionicons name={'cart-outline'} size={22} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => eliminarWishList(x)}>
            <Ionicons name={'trash'} size={22}/>
            </TouchableHighlight>
            </View>
            </Card>
            ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
