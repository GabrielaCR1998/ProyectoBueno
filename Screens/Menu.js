import React from 'react'
import { StyleSheet, Text, View, Button,} from 'react-native'
import { Header, Card, ListItem, Icon, Image } from 'react-native-elements';

const Menu = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="Perritos"
                onPress={()=>navigation.navigate('Perritos')}
                color="#8FC8D2"
            />
            <Button 
                title="Donadores"
                onPress={()=>navigation.navigate('Donadores')}
                color="#8FC8D2"
            />
             <Image source={require('../Imagenes/Perritom.png')}
              style = {{width: 350, height: 280}}/>
              <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25, color:'#08B9D7'}}>   Bienvenidos </Text>
              <Button 
                title="click Aqui"
                onPress={()=>navigation.navigate('clic')}
                color="transparent"
            />
        </View>
        
    )
}
export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CFF2F8',
      flexdirection: 'row-reverse',
    },
});