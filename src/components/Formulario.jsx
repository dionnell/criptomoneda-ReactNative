import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export const Formulario = ({moneda, setMoneda, criptomoneda, setCriptomoneda, setConsultarAPI}) => {
    
    const [criptomonedas, setCriptomonedas] = useState([])

    useEffect(() => {
      const consultaAPI = async() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        const resultado = await axios.get(url)
        setCriptomonedas(resultado.data.Data)
      }
      consultaAPI()
    }, [])
    
    //Almacena las seleccione del Usuario 
    const obtenerMoneda = moneda => {
        setMoneda(moneda)
    }

    const obtenerCriptomoneda = cripto => {
        setCriptomoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta()
            return
        }

        setConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios',
            [
                {text:'OK'}
            ]
        )
    }

    return (
    <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker
            selectedValue={moneda}
            onValueChange={moneda => obtenerMoneda(moneda)}
            itemStyle={{ height: 120 }}
            style={styles.inputPicker}
            dropdownIconColor='#64748B'
        >
            <Picker.Item label='- Seleccione -' value=''/>
            <Picker.Item label='Dolar EEUU' value='USD'/>
            <Picker.Item label='Peso Chileno' value='CLP'/>
            <Picker.Item label='Euro' value='EUR'/>
            <Picker.Item label='Libra Esterlina' value='GBP'/>
        </Picker>

        <Text style={styles.label}>Criptomoneda</Text>
        <Picker
            selectedValue={criptomoneda}
            onValueChange={cripto => obtenerCriptomoneda(cripto)}
            itemStyle={{ height: 120 }}
            style={styles.inputPicker}
            dropdownIconColor='#64748B'
        >
            <Picker.Item label='- Seleccione -' value=''/>
            { criptomonedas.map( cripto => (
                <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
            )) }
        </Picker>

        <TouchableHighlight
            style={styles.btnCotizar}
            onPress={ () => cotizarPrecio() }
        >
            <Text style={styles.textoCotizar}>Cotizar</Text>
        </TouchableHighlight>

    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20
    },
    btnCotizar: {
        backgroundColor:'#5E49E2',
        padding: 10,
        marginTop: 20,
        borderRadius: 15
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    inputPicker: {
        backgroundColor: '#ececec',
        marginBottom: 5,
        color: '#000000',
        borderColor: '#ececec'
    },
})
