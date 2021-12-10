import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacto from '../Screens/Contacto';
import Nosotros from '../Screens/Nosotros';
import Equipo from '../Screens/Equipo';
import Menu from '../Screens/Menu';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTapNavigator1() {
  return (
    <Tab.Navigator
      initialRouteName="Contacto"
      tabBarOptions={{
        activeTintColor: '#5391f5',
        inactiveTintColor: '#060606',
        showIcon: true,
        showLabel: true,
        labelStyle: {
          fontSize: 11,
        },
        style: {
          paddingTop: Constants.statusBarHeight,
          backgroundColor: '#f3f3f1',
        },
      }}>
      <Tab.Screen
        name="Contacto"
        component={Contacto}
        options={{
          tabBarLabel: 'Contactanos',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'mail-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Nosotros"
        component={Nosotros}
        options={{
          tabBarLabel: 'Nuestra Historia',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'book-outline'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
                name="Equipo"
                component={Equipo}
                options={{
                    tabBarLabel:"Nuestro Equipo",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"people-outline"} size={20} color={color}/>
                    )
                }}
            />
    </Tab.Navigator>
  );
}
