import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Cotizacion = ({resultado}) => {

    
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado
    
    
    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{PRICE}</Text>
            </Text>

            <Text style={styles.texto}>Precio mas alto del dia: 
                <Text style={styles.span}> {HIGHDAY}</Text>
            </Text>

            <Text style={styles.texto}>Precio mas bajo del dia:
                <Text style={styles.span}> {LOWDAY}</Text>
            </Text>

            <Text style={styles.texto}>Variacion ultimas 24 horas: 
                <Text style={styles.span}> {CHANGEPCT24HOUR}%</Text>
            </Text>

            <Text style={styles.texto}>Ultima Actualizacion: 
                <Text style={styles.span}> {LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 20
    },
    texto: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        marginBottom: 10
    },
    precio: {
        fontSize: 38,
        textAlign: 'center',
        fontWeight: '900'
    },
    span: {
        fontFamily: 'Lato-Black',
    }
})