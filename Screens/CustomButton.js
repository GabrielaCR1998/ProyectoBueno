import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButton = (props) =>{
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> props.onPress?.() }
                    style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'transparent',
        justifyContent:'space-around',
        alignItems:' center'
    },
    buttonText:{
        color:'#1B97DC'
    }
})
