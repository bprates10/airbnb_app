import axios from 'axios';

/* Endereços para cada emulador/simulador:
 ** Genymotion:              http://10.0.3.2:3333/
 ** Emulador Android Studio: http://10.0.2.2:3333/
 ** Simulador IOS:           http://localhost:3333/
 */
const api = axios.create({
  // baseURL: 'http://localhost:3333/',
  baseURL: 'http://10.10.80.68:3333/',
});

export default api;
