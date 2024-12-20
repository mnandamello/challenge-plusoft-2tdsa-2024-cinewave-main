import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { Button, Input } from '@rneui/themed'
import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'

const Cadastro = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate("Login")
        console.log(response)
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Ocorreu um erro ao cadastrar o usuário');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };



  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-cinewave.png")}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Nome Completo' value={nome} onChangeText={setNome}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Email' value={email} onChangeText={setEmail}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Senha' secureTextEntry={true} value={senha} onChangeText={setSenha}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black',fontSize: 15}} placeholder='Confirmar Senha' secureTextEntry={true} value={confirmarSenha} onChangeText={setConfirmarSenha}/>

      <Button onPress={handleRegister} titleStyle={{fontFamily: 'Roboto-Black', fontSize: 16}} containerStyle={{width: 118, borderRadius: 20, marginTop: 20}} buttonStyle={{backgroundColor:"#33a1b8"}} title="Cadastrar"/>

      
      <Text style={styles.span} onPress={() => navigation.navigate('Login')}>
          Realizar Login
        </Text>

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
    fontSize: 14,
    marginTop: 20,
    fontFamily: 'Roboto-Black',
    color: "#f38631"
  }
  
})

export default Cadastro;