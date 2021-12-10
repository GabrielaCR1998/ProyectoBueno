import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {DonadoresContext} from '../Context/DonadoresContext';
import Constants from 'expo-constants';


const validations =Yup.object().shape({
    tarjeta:Yup.number().typeError('Este campo es numérico').max(12345678999999999,"Número muy grande").required('Obligatorio').min(1299999999999999,"Numero muy corto"),
    nombre:Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    correo: Yup.string().email('Correo inválido').required('Obligatorio'),
    cvv:Yup.number().typeError('Este campo es numérico').max(1234,"Número muy grande").required('Obligatorio').min(12,"Numero muy corto"),
    monto:Yup.number().typeError('Este campo es numérico').max(12345678999,"Gracias por su donacion").required('Obligatorio').min(12,"Gracias por su donacion"),
})
export default function Formulario1(){
    const {donador,formulario1,setDonador,setFormulario1}= useContext(DonadoresContext);
    return(
        <View style={styles.container}>
            <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 25, color:'#08B9D7'}}>  Salva una vida </Text>
            <Text style={styles.texto2}> En esta sección podras donar para que perritos de la calle tengan otra oportunidad. Puedes ir a la sección de perritos y veras a todos los que hemos ayudado con estas donaciones voluntarias.</Text>
            <Text>                                                                                                               </Text>
            <Formik
                initialValues={donador}
                onSubmit={(values,{resetForm})=>{
                    setFormulario1([...formulario1,donador]);
                    resetForm({
                        tarjeta:"",
                        nombre:"",
                        correo:"",
                        asunto:""
                    })
                    console.log(formulario1) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setDonador(values)
                    console.log(donador)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>             
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre del propietario"
                            value={values.nombre}                        
                        />
                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('tarjeta')}
                            onBlur={handleBlur('tarjeta')}
                            placeholder="Numero de Tarjeta"
                            value={values.tarjeta}
                        />
                        {errors.tarjeta && <Text style={styles.texterror}>{errors.tarjeta}</Text>}
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('cvv')}
                            onBlur={handleBlur('cvv')}
                            placeholder="CVV"
                            value={values.cvv}                        
                        />
                         {errors.cvv && <Text style={styles.texterror}>{errors.cvv}</Text>}       
                         <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('monto')}
                            onBlur={handleBlur('monto')}
                            placeholder="Donacion"
                            value={values.monto}
                        />                        
                        {errors.monto && <Text style={styles.texterror}>{errors.monto}</Text>}
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('correo')}
                            onBlur={handleBlur('correo')}
                            placeholder="correo electronico"
                            value={values.correo}                        
                        />      
                         {errors.correo && <Text style={styles.texterror}>{errors.correo}</Text>}  
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
      color:'#4F5356'
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
      marginTop:10, 
      borderRadius:10
    },

  });