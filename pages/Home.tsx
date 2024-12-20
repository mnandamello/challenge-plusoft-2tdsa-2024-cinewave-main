import { View, Text, Image } from "react-native";
import React from "react";
import MenuNavegation from "../components/MenuNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function Home() {
  return (
    <View>
        <Image
          source={require('../assets/logo-cinewave.png')}
          style={{ width: 200, height: 100 }}
        />
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center',fontFamily:'Montserrat-SemiBold'}}>
          Como nosso app pode te ajudar?
        </Text>
        <Text style={{fontSize: 20}}>
          Bem-vindo à CineWave: O Seu Aliado para Campanhas de Marketing de Filmes!

          Na jornada para alcançar o sucesso nas campanhas de marketing de filmes, enfrentar desafios é inevitável. É por isso que criamos a CineWave - um aplicativo projetado para simplificar e potencializar suas estratégias de marketing, fornecendo insights precisos e valiosos com base em dados.
        </Text>
      </View>
  );
}
