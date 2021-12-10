import React from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import  DonadoresProvider from '../Context/DonadoresContext';
import Formulario1 from '../Screens/DonadoresFor';

const Donadores = ({navigation}) => {
    return (
            < DonadoresProvider>
            <Formulario1/>
           </ DonadoresProvider>
    )
}

export default Donadores

