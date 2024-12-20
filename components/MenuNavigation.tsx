import React from "react";
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShow:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height:60,
    bckground: "#fff"
  }
}

import Home from '../pages/Home';
import Campanhas from '../pages/Campanhas';
import Usuario from '../pages/Usuario';

const MenuNavigation = () => {
  return(
    <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'white', // Cor de fundo da barra de navegação
        borderTopWidth: 10, // Adiciona uma borda superior
        borderTopColor: '#111', // Cor da borda superior,
        paddingVertical: 50,
      },
      labelStyle: {
        fontSize: 0, // Tamanho da fonte do texto
      }

    }}><Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({focused}) => {
        return (
          <View style={{ alignItems: "center", justifyContent: "center"}}>
            <Entypo name="home" size={40} color={focused ? "black" : "#F38631"} />
          </View>
        )
      }
      }}/>
      <Tab.Screen name='Campanhas' component={Campanhas} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialIcons name="analytics" size={40} color={focused ? "black" :"#CB598C"} />
            </View>
          )
        }
      }}/>
      <Tab.Screen name='Usuario' component={Usuario} options={{
        tabBarIcon: ({focused}) => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome name="user" size={40} color={focused ? "black" : "#33A1B8"} />
            </View>
          )
        }
      }}/>
    </Tab.Navigator>
  )
} 

export default MenuNavigation;