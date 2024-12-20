import { useNavigation } from '@react-navigation/native'
import { Button, Input } from '@rneui/themed'
import React from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Image,Alert } from 'react-native'



const Login = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/login`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        console.log(response)
      } else {
        const errorData = await response.json();
        Alert.alert('Erro', errorData.message || 'Credenciais inválidas');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-cinewave.png")}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Email' value={email} onChangeText={setEmail}/>
      <Input containerStyle={{width: "85%", marginTop: 20}} style={{color: 'white', fontFamily: 'Roboto-Black', fontSize: 15}} placeholder='Senha' secureTextEntry={true} value={senha} onChangeText={setSenha}/>

      <Text style={styles.texto}>
        Esqueceu a senha?{' '}
        <Text style={styles.span} onPress={() => navigation.navigate('EsqueceuSenha')}>
          Click Aqui
        </Text>
      </Text>

      <Text style={styles.span} onPress={() => navigation.navigate('Cadastro')}>
          Cadastre-se
        </Text>

      <Button onPress={handleLogin} titleStyle={{fontFamily: 'Roboto-Black', fontSize: 16}} containerStyle={{width: 170, borderRadius: 20, marginTop: 20}} buttonStyle={{backgroundColor:"#33a1b8"}} title="Realizar Login" />

      
      

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

export default Login;