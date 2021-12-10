import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'

const clic = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../Imagenes/pinguino.jpeg')}
              style = {{width: 350, height: 350}}/>
        </View>
    )
}
export default clic

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});