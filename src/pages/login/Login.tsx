import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { getClientes } from '../../api/api' // Importar la función para obtener clientes desde la API
import './login.scss'

// Definición de la interfaz para los datos del formulario
interface FormData {
  email: string
  password: string
}

// Definición de la interfaz para los datos del cliente
interface Cliente {
  nombre: string
  apellido: string
  direccion: string
  telefono: string
  correo: string
  contrasena: string
  foto: string
  fecha_registro: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()

  // Función para manejar el inicio de sesión
  const handleLogin = async (data: FormData): Promise<void> => {
    try {
      // Obtener todos los clientes de la base de datos utilizando la API
      const clientes = await getClientes()

      // Buscar si existe un cliente con el correo y contraseña proporcionados
      const clienteValido = clientes.find((cliente: Cliente) => cliente.correo === data.email && cliente.contrasena === data.password)

      if (clienteValido !== undefined) {
        // Usuario válido, muestra un mensaje de bienvenida
        await Swal.fire('¡Bienvenido!', `Hola, ${clienteValido.nombre}!`, 'success')

        // Guardar los datos del usuario en el sessionStorage
        sessionStorage.setItem('user', JSON.stringify(clienteValido))

        // Navegar a la página de inicio
        navigate('/home')
      } else {
        // Credenciales inválidas, muestra un mensaje de error
        await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')
      }
    } catch (error) {
      // Manejo de errores, por ejemplo, si la API no está disponible
      await Swal.fire('Error', 'No se pudo conectar con el servidor', 'error')
    }
  }

  return (
    <main className="login-container">
      <div className="background-image"></div>

      <section className='form'>
        <section className='form__left'>
          <figure className='logoLogin'>
            <img className='imgLogin' src='https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png' alt="Logo" />
            <h2>Rondas</h2>
          </figure>
        </section>

        <section className='form__right'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <h2>Bienvenido</h2>

            {/* Campo de correo electrónico */}
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" id="email" {...register('email')} />

            {/* Campo de contraseña */}
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" {...register('password')} />

            {/* Botón de ingresar */}
            <button type="submit">Ingresar</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Login
