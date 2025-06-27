# App Cotizador de Criptomonedas

Esta aplicación móvil permite consultar el valor actual de distintas criptomonedas en diferentes monedas fiat, utilizando la API de CryptoCompare.

## Funcionalidades

- **Selección de moneda y criptomoneda:** El usuario puede elegir la moneda local (por ejemplo, USD, EUR, MXN) y la criptomoneda (por ejemplo, BTC, ETH, LTC) para cotizar.
- **Consulta en tiempo real:** Obtiene el precio actualizado de la criptomoneda seleccionada en la moneda elegida.
- **Visualización de resultados:** Muestra información relevante como precio, variación y otros datos de la cotización.
- **Indicador de carga:** Muestra un spinner mientras se realiza la consulta a la API.
- **Interfaz amigable:** Incluye un formulario sencillo y una imagen ilustrativa para mejorar la experiencia de usuario.

## Tecnologías utilizadas

- React Native
- Axios (para peticiones HTTP)
- API de CryptoCompare

## Estructura principal

- `App.jsx`: Componente principal que gestiona el estado y la lógica de la aplicación.
- `src/components/Header.jsx`: Encabezado de la aplicación.
- `src/components/Formulario.jsx`: Formulario para seleccionar moneda y criptomoneda.
- `src/components/Cotizacion.jsx`: Muestra los resultados de la cotización.

## Configuración

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la app en tu emulador o dispositivo físico con `npx react-native run-android` o `npx react-native run-ios`.

---

