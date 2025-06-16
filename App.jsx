import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, View } from 'react-native';
import axios from 'axios';
import { Header } from './src/components/Header';
import { Formulario } from './src/components/Formulario';
import { Cotizacion } from './src/components/Cotizacion';

function App() {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')  
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  
  useEffect(() => {
    const cotizarCripto = async () => {
      if(consultarAPI){
        //Consultar la API para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)

        //mostrar el Spinner
        setCargando(true)

        //Ocultar el Spinner y mostrar el resultado
        setTimeout(() =>{
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
        setConsultarAPI(false)
        setCargando(false)
        }, 2000)

      }
    }
    cotizarCripto()
  }, [consultarAPI])
  

  return (
    <>
      <ScrollView
        style={{backgroundColor:'#f8f8f8'}}
      >
        <Header/>

        <Image
          style={styles.imagen}
          source={require('./src/assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>
          <Formulario
            moneda={moneda}
            setMoneda={setMoneda}
            criptomoneda={criptomoneda} 
            setCriptomoneda={setCriptomoneda}
            setConsultarAPI={setConsultarAPI}
          />
        </View>

        {cargando ? 
          <ActivityIndicator
            size={'large'}
            color={'#5E49E2'}
            style={{marginTop: 15}}
          /> 
          : <Cotizacion
                  resultado={resultado}
            />}

            </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido: {
    marginHorizontal: '2.5%'
  }
});

export default App;
