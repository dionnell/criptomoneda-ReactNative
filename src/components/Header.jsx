import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'

export const Header = () => {

  return (
    <Text style={style.encabezado}>Criptomonedas</Text>
  )
}

const style = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 20 ,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30,
    }
})