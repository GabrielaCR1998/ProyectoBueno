import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ContactoContext} from '../Context/ContactoContext';
import Constants from 'expo-constants';

const validations =Yup.object().shape({
    nombre:Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    numero:Yup.number().typeError('Este campo es numérico').max(12345678999,"Número muy grande").required('Obligatorio').min(1234567,"Numero muy corto"),
    correo: Yup.string().email('Correo inválido').required('Obligatorio'),
    asunto:Yup.string().min(1,'Asunto muy corto').max(200, 'Sunto muy largo').required('Obligatorio'),
})

export default function Formulario(){
    const {cliente,lista,setcliente,setLista}= useContext(ContactoContext);
    return(
        <View style={styles.container}>
           <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25, color:'#08B9D7'}}>   Contactanos </Text>
            <Text style={styles.texto2}> ¿Quiere hacer un pedido o aprender más sobre nuestros productos? Comuníquese hoy. </Text>
            <Text>                                                                                                               </Text>

            <Formik
                initialValues={cliente}
                onSubmit={(values,{resetForm})=>{
                   
                    setLista([...lista,cliente]);
                    resetForm({
                        numero:"",
                        nombre:"",
                        correo:"",
                        asunto:""
                    })
                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setcliente(values)
                    console.log(cliente)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre"
                            value={values.nombre}                        
                        />
                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('numero')}
                            onBlur={handleBlur('numero')}
                            placeholder="Numero de Telefono"
                            value={values.numero}
                        />
                        {errors.numero && <Text style={styles.texterror}>{errors.numero}</Text>}
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('correo')}
                            onBlur={handleBlur('correo')}
                            placeholder="correo electronico"
                            value={values.correo}                        
                        />      
                         {errors.correo && <Text style={styles.texterror}>{errors.correo}</Text>}      
                          <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('asunto')}
                            onBlur={handleBlur('asunto')}
                            placeholder="Asunto"
                            value={values.asunto}                        
                        />
                        {errors.asunto && <Text style={styles.texterror}>{errors.asunto}</Text>}       
                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"                                   
                            />
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                            />
                        </View>
                    </View>
                )
            }          
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texto2: {
      textAlign: 'center', 
      fontSize: 15,
       color:'#08B9D7'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'#051C4B', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
  });