import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Campanhas() {
  const handlePress = () => {
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E4FAFF', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: '#0E515A', paddingTop: 20, paddingLeft: 50, paddingRight: 50 }}>
        HISTÓRICO DE CAMPANHAS
      </Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#F38631', textAlign: 'center' }}>Você ainda não tem campanhas cadastradas</Text>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#CB598C',
          borderRadius: 50,
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handlePress}
      >
        <FontAwesome name="plus" size={20} color="#F99CC6" />
      </TouchableOpacity>
    </View>
  )
} 
