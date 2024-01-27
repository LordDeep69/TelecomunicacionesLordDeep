import React from 'react'
import './login.scss'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks/reduxHooks' // Asegúrate de importar correctamente el hook
import { setUserLogged } from '../../redux/features/userLogged/userLoggedSlice'

import { useNavigate } from 'react-router-dom'

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { register, watch } = useForm<FormData>()
  const dispatch = useAppDispatch() // Obtén el despachador de Redux

  const watchFields = watch() // Observa todos los campos

  const handleLoginClick = (): void => {
    // Acción a realizar cuando se hace clic en el botón de ingresar
    console.log('Datos del formulario:', watchFields)

    // Despachar la acción setUserLogged con los datos del formulario
    dispatch(setUserLogged({ email: watchFields.email, password: watchFields.password }))
    navigate('/home')

    // Puedes realizar aquí la lógica necesaria con los datos del formulario
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
            <button type="button" onClick={handleLoginClick}>Ingresar</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Login
