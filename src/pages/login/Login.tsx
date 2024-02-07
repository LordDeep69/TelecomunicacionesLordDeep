import React from 'react'
import './login.scss'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks/reduxHooks' // Asegúrate de importar correctamente el hook
import { setUserLogged } from '../../redux/features/userLogged/userLoggedSlice'
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom'

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  interface ValidUser {
    email: string
    password: string
  }

  const validUsers: ValidUser[] = [
    { email: 'lordDeep@utb.edu.co', password: '12345' },
    { email: 'lordHenry@utb.edu.co', password: '54321' }
    // Agrega más usuarios según sea necesario
  ]
  const navigate = useNavigate()
  const { register, watch } = useForm<FormData>()
  const dispatch = useAppDispatch() // Obtén el despachador de Redux

  const watchFields = watch() // Observa todos los campos

  const handleLoginClick = async (): Promise<void> => {
    const { email, password } = watchFields

    // Verificar si las credenciales coinciden con algún usuario válido
    const validUser = validUsers.find(user => user.email === email && user.password === password)

    if (validUser !== undefined) {
      // Usuario válido, muestra un mensaje de bienvenida
      await Swal.fire('¡Bienvenido!', `Hola, ${email}!`, 'success')
      // Despacha la acción setUserLogged con los datos del usuario
      dispatch(setUserLogged({ email, password }))
      navigate('/home')
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')
    }
  }

  return (
    <main className="login-container">
      <div className="background-image"></div>
      <section className='form'>
        <section className='form__left'>
          <figure className='logoLogin'>
            <img className='imgLogin' src= 'https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png' alt="Logo" />
            <h2>Rondas</h2>
          </figure>
        </section>

        <section className='form__right'>
          <form>
            <h2>Bienvenido</h2>

            {/* Campo de correo electrónico */}
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" id="email" {...register('email')} />

            {/* Campo de contraseña */}
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" {...register('password')} />

            {/* Botón de ingresar */}
            <button type="button" onClick={async () => { await (async () => { await handleLoginClick() })() }}>Ingresar</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Login
