import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ContactoProvider from '../Context/ContactoContext';
import Formulario from '../Screens/Formulario';

export default function Contacto() {
 
    return (
      <ContactoProvider>
        <Formulario/>
      </ContactoProvider>              
    )
}
 