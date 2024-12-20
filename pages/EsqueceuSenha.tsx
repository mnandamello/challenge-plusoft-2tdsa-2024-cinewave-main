import { useNavigation } from '@react-navigation/native'
import { Button, Input } from '@rneui/themed'
import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Image,Alert } from 'react-native'



const EsqueceuSenha = () => {

  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const navigation = useNavigation();

  const handleUpdatePassword = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          novaSenha
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
        navigation.navigate('Login'); 
        console.log(response)
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Ocorreu um erro ao atualizar a senha');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-cinewave.png")}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Email' value={email} onChangeText={setEmail}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Nova Senha' secureTextEntry={true} value={novaSenha} onChangeText={setNovaSenha}/>

        <Text style={styles.span} onPress={() => navigation.navigate('Login')}>
          Fazer Login
        </Text>

      <Button titleStyle={{fontFamily: 'Roboto-Black', fontSize: 16}} containerStyle={{width: 170, borderRadius: 20, marginTop: 20}} buttonStyle={{backgroundColor:"#33a1b8"}} title="Mudar Senha" onPress={handleUpdatePassword}/>

    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0e515a",
      paddingTop: 120,
      alignItems: 'center',
    },
    logo: {
      width: 180,
      height: 100
    },
    texto: {
      fontSize: 14,
      fontFamily: 'Roboto-Black',
      marginTop: 20
    },
    span: {
      marginTop: 20,
      fontSize: 14,
      fontFamily: 'Roboto-Black',
      color: "#f38631"
    }
    
  })

export default EsqueceuSenha;