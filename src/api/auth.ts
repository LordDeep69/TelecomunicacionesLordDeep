import axios from 'axios' // Importa Axios para manejar las solicitudes HTTP
// import jwt from 'jsonwebtoken' // Importa jsonwebtoken para decodificar los tokens JWT

// Configuración de Axios
const api = axios.create({
  baseURL: 'https://backendtelecomunicaciones.onrender.com/api', // Define la URL base de la API
  headers: {
    'Content-Type': 'application/json' // Define el tipo de contenido como JSON
  }
})

// Definición del tipo de datos Usuario
interface Usuario {
  id: number // Identificador único del usuario
  nombre: string // Nombre del usuario
  correo: string // Correo electrónico del usuario
  contrasena: string // Contraseña del usuario
}

// Definición de la estructura de la respuesta de autenticación
interface AuthResponse {
  usuario: Usuario // Datos del usuario autenticado
  token: string // Token JWT proporcionado tras autenticación
}

// Función para registrar un nuevo usuario
export const registerUsuario = async (usuario: Usuario): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', usuario) // Envía una solicitud POST para registrar al usuario
  return response.data // Devuelve los datos de la respuesta (usuario y token)
}

// Función para iniciar sesión de un usuario
export const loginUsuario = async (correo: string, contrasena: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', { correo, contrasena }) // Envía una solicitud POST para iniciar sesión
  return response.data // Devuelve los datos de la respuesta (usuario y token)
}

// Función para verificar la validez de un token JWT
// export const verifyToken = (token: string): boolean => {
//   try {
//     const decoded: any = jwt.verify(token, '') // Decodifica el token JWT sin verificar su firma
//     return true // Si el token es válido, devuelve true
//   } catch (error) {
//     return false // Si ocurre un error (token no válido), devuelve false
//   }
// }
