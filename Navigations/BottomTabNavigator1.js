import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Badge } from 'react-native-elements';
import HomeScreen from '../Screens/HomeScreen';
import Wishlist from '../Screens/WishlistScreen';
import Carrito from '../Screens/CarroScreen';
import Menu from '../Navigations/StackNavigation1';
import { TiendaContext } from '../Context/TiendaContext';
import Contacto from './TopTabNavigator1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
  const { cantidad, contando,} = useContext(TiendaContext);
  return(
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor:"#2291b3",
        inactiveTintColor:"#060606",
        showLabel:true,
        labelStyle:{
            fontSize:12
        },
        style:{
            paddingBottom:5,
            backgroundColor:"#f3f3f1"
        }
      }}
    >
    <Tab.Screen
        name="Incio"
        component={Menu}
        options={{
        headerShown:false,
        tabBarLabel:"Inicio",
        tabBarIcon:({color})=>(
        <Ionicons name={"home-outline"} size={20} color={color}/>
        )
         }}/> 
         <Tab.Screen
      name = "Información" 
      component={Contacto}
      options={{
          headerShown:false,
          tabBarLabel:"Información",
          tabBarIcon:({color})=>(
          <Ionicons name={"megaphone-outline"} size={20} color={color}/>
          )
      }}
    />   
    <Tab.Screen
        name="Productos"
        component={HomeScreen}
        options={{
        headerShown: false,
        tabBarLabel: 'Productos',
        tabBarIcon: ({ color }) => (
        <Ionicons name={'paw-outline'} size={20} color={color} />
          ),}} />
      <Tab.Screen
        name="Whishlist" component={Wishlist}
        options={{headerShown: false, tabBarLabel: 'WishList', tabBarIcon: 
        ({color})=> (
        <View>
        <Ionicons name={'pricetag-outline'} size={20} color={color} />
        <Badge status="error" value={contando} containerStyle={{ position: 'absolute', top: 0, left: 150 }}/>
        </View>
        ), }} />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
      <Ionicons name={'cart-outline'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}