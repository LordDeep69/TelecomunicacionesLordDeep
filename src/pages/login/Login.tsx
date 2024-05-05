import React, { useEffect } from 'react'
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

  // useEffect(() => {
  //   // Función asincrónica para actualizar un usuario existente
  //   const actualizarUsuario = async (): Promise<void> => {
  //     const userId = '1' // Reemplaza 'ID_DEL_USUARIO' con el ID del usuario que deseas actualizar

  //     const datosActualizados = {
  //       nombre: 'NuevoNombre',
  //       correo: 'nuevoCorreo@example.com',
  //       tipo_usuario: 'admin',
  //       contrasena: 'NewPassWord',
  //       foto_perfil: 'LordDeep.jpg'
  //       // Agrega aquí otros campos que necesites actualizar
  //     }

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(datosActualizados)
  //       })

  //       if (response.ok) {
  //         const data = await response.json()
  //         console.log('Usuario actualizado exitosamente:', data)
  //       } else {
  //         console.error('Error al actualizar el usuario')
  //       }
  //     } catch (error) {
  //       console.error('Error en la solicitud:', error)
  //     }
  //   }

  //   // Llama a la función para actualizar un usuario existente y maneja cualquier error
  //   actualizarUsuario().catch(error => { console.error('Error al actualizar usuario:', error) })
  // }, [])

  // useEffect(() => {
  //   // Función asincrónica para obtener los usuarios
  //   const obtenerUsuarios = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('http://localhost:3002/api/users')
  //       const data = await response.json()
  //       console.log('PRUEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.')
  //       console.log(data) // Aquí tendrás los datos de los usuarios
  //     } catch (error) {
  //       console.error('Error al obtener usuarios:', error)
  //     }
  //   }

  //   // Llama a la función para obtener los usuarios y maneja cualquier error
  //   obtenerUsuarios().catch(error => { console.error('Error al obtener usuarios:', error) })
  // }, [])

  // useEffect(() => {
  //   // Función asincrónica para crear un nuevo usuario
  //   const crearUsuario = async (): Promise<void> => {
  //     const nuevoUsuario = {
  //       nombre: 'LordDeep',
  //       correo: 'lordDeep@example.com',
  //       tipo_usuario: 'admin',
  //       contrasena: '12345',
  //       foto_perfil: 'deus.jpg'
  //     }

  //     try {
  //       const response = await fetch('http://localhost:3002/api/users', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(nuevoUsuario)
  //       })

  //       if (response.ok) {
  //         console.log('Usuario creado exitosamente')
  //       } else {
  //         console.error('Error al crear el usuario')
  //       }
  //     } catch (error) {
  //       console.error('Error en la solicitud:', error)
  //     }
  //   }

  //   // Llama a la función para crear un nuevo usuario y maneja cualquier error
  //   crearUsuario().catch(error => { console.error('Error al crear usuario:', error) })
  // }, [])

  // useEffect(() => {
  //   // Función asincrónica para actualizar un usuario existente
  //   const actualizarUsuario = async (): Promise<void> => {
  //     const usuarioActualizado = {
  //       nombre: 'NuevoNombre',
  //       correo: 'nuevoCorreo@example.com',
  //       tipo_usuario: 'admin',
  //       contrasena: 'nuevaContrasena',
  //       foto_perfil: 'nuevaFoto.jpg'
  //     }

  //     const userId = '2' // Reemplaza 'ID_DEL_USUARIO' con el ID del usuario que deseas actualizar

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(usuarioActualizado)
  //       })

  //       if (response.ok) {
  //         console.log('Usuario actualizado exitosamente')
  //       } else {
  //         console.error('Error al actualizar el usuario')
  //       }
  //     } catch (error) {
  //       console.error('Error en la solicitud:', error)
  //     }
  //   }

  //   // Llama a la función para actualizar un usuario existente y maneja cualquier error
  //   actualizarUsuario().catch(error => { console.error('Error al actualizar usuario:', error) })
  // }, [])

  // useEffect(() => {
  //   // Función asincrónica para eliminar un usuario existente
  //   const eliminarUsuario = async (): Promise<void> => {
  //     const userId = '1' // Reemplaza 'ID_DEL_USUARIO' con el ID del usuario que deseas eliminar

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
  //         method: 'DELETE'
  //       })

  //       if (response.ok) {
  //         console.log('Usuario eliminado exitosamente')
  //       } else {
  //         console.error('Error al eliminar el usuario')
  //       }
  //     } catch (error) {
  //       console.error('Error en la solicitud:', error)
  //     }
  //   }

  //   // Llama a la función para eliminar un usuario existente y maneja cualquier error
  //   eliminarUsuario().catch(error => { console.error('Error al eliminar usuario:', error) })
  // }, [])

  // useEffect(() => {
  //   // Función asincrónica para obtener todos los modelos
  //   const getModelos = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('http://localhost:3002/api/modelos')
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al obtener modelos:', error)
  //     }
  //   }

  //   const getEquipos = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('http://localhost:3002/api/equipos')
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al obtener modelos:', error)
  //     }
  //   }

  //   const getRonda = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('http://localhost:3002/api/Rondas')
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al obtener modelos:', error)
  //     }
  //   }

  //   const getSistemas = async (): Promise<void> => {
  //     try {
  //       const response = await fetch('http://localhost:3002/api/sistemas')
  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al obtener modelos:', error)
  //     }
  //   }
  //   // Llama a todas las funciones para obtener la información al cargar la página
  //   getModelos().catch(error => { console.error('Error al Obtener Sistema:', error) })
  //   getEquipos().catch(error => { console.error('Error al Obtener Equipos:', error) })
  //   getSistemas().catch(error => { console.error('Error al Obtener Sistema:', error) })
  //   getRonda().catch(error => { console.error('Error al Obtener Sistema:', error) })

  //   const createSistema = async (): Promise<void> => {
  //     const sistemaData = {
  //       id_usuario: 2, // ID del usuario al que pertenece el sistema
  //       nombre_sistema: 'Nombre del sistema',
  //       imagen_sistema: 'URL de la imagen del sistema',
  //       id_sistema: '88'
  //     }
  //     try {
  //       const response = await fetch('http://localhost:3002/api/sistemas', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(sistemaData)
  //       })
  //       const data = await response.json()
  //       console.log(data)
  //       return data
  //     } catch (error) {
  //       console.error('Error al crear un nuevo sistema:', error)
  //       throw new Error('Error al crear un nuevo sistema')
  //     }
  //   }

  //   createSistema().catch(error => { console.error('Error al Crear Sistema:', error) })

  //   const createModelo = async (): Promise<void> => {
  //     const modeloData = {
  //       nombre: 'Bomba',
  //       imagen: 'Bomba.jpg'
  //     }

  //     try {
  //       const response = await fetch('http://localhost:3002/api/modelos', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(modeloData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //       return data
  //     } catch (error) {
  //       console.error('Error al crear un nuevo modelo:', error)
  //       throw new Error('Error al crear un nuevo modelo')
  //     }
  //   }

  //   // Llamada a la función para crear un nuevo modelo
  //   createModelo()
  //     .then(data => {
  //       console.log('Modelo creado exitosamente:', data)
  //       // Aquí puedes manejar la respuesta si es necesario
  //     })
  //     .catch(error => {
  //       console.error('Error al crear un nuevo modelo:', error)
  //       // Aquí puedes manejar el error si es necesario
  //     })

  //   const createEquipo = async (): Promise<void> => {
  //     const equipoData = {
  //       id_sistema: 1, // ID del sistema al que pertenece el equipo
  //       nombre_equipo: 'Motor_616',
  //       imagen_equipo: 'imagenMotor_402.jpg',
  //       id_equipo: 'E516',
  //       id_modelo: 1 // ID del modelo asociado al equipo
  //     }

  //     try {
  //       const response = await fetch('http://localhost:3002/api/equipos', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(equipoData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //       return data
  //     } catch (error) {
  //       console.error('Error al crear un nuevo equipo:', error)
  //       throw new Error('Error al crear un nuevo equipo')
  //     }
  //   }

  //   // Llamada a la función para crear un nuevo equipo
  //   createEquipo()
  //     .then(data => {
  //       console.log('Equipo creado exitosamente:', data)
  //       // Aquí puedes manejar la respuesta si es necesario
  //     })
  //     .catch(error => {
  //       console.error('Error al crear un nuevo equipo:', error)
  //       // Aquí puedes manejar el error si es necesario
  //     })

  //   const createRonda = async (): Promise<void> => {
  //     const rondaData = {
  //       id_sistema: 2, // ID del sistema al que pertenece la ronda
  //       fecha: new Date().toISOString().slice(0, 19).replace('T', ' ') // Formatear la fecha en formato MySQL
  //     }

  //     try {
  //       const response = await fetch('http://localhost:3002/api/rondas', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(rondaData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //       return data
  //     } catch (error) {
  //       console.error('Error al crear una nueva ronda:', error)
  //       throw new Error('Error al crear una nueva ronda')
  //     }
  //   }

  //   // Llamada a la función para crear una nueva ronda
  //   createRonda()
  //     .then(data => {
  //       console.log('Ronda creada exitosamente:', data)
  //       // Aquí puedes manejar la respuesta si es necesario
  //     })
  //     .catch(error => {
  //       console.error('Error al crear una nueva ronda:', error)
  //       // Aquí puedes manejar el error si es necesario
  //     })
  // }, [])

  // useEffect(() => {
  //   const updateSistema = async (): Promise<void> => {
  //     const id = 4
  //     const sistemaData = {
  //       id_usuario: 3, // Nuevo ID de usuario
  //       nombre_sistema: 'LORD',
  //       imagen_sistema: 'DEEP.JPG',
  //       id_sistema: '37'
  //     }

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/sistemas/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(sistemaData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al actualizar el sistema:', error)
  //     }
  //   }

  //   const updateModelo = async (): Promise<void> => {
  //     const id = 4
  //     const modeloData = {
  //       nombre: 'Probando',
  //       imagen: 'Prueba.jpg'
  //     }

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/modelos/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(modeloData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al actualizar el modelo:', error)
  //     }
  //   }

  //   const updateEquipo = async (): Promise<void> => {
  //     const id = 7
  //     const equipoData = {
  //       id_sistema: 2, // Nuevo ID de sistema
  //       nombre_equipo: 'EQUIPO LORD',
  //       imagen_equipo: 'EQUIPOLORD.JPG',
  //       id_equipo: 'Bueeeeeeeeenoooooooo',
  //       id_modelo: 2 // Nuevo ID de modelo
  //     }

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/equipos/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(equipoData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al actualizar el equipo:', error)
  //     }
  //   }

  //   const updateRonda = async (): Promise<void> => {
  //     const id = '97008877-095f-11ef-b6b0-cecd02c24f20'
  //     const rondaData = {
  //       id_sistema: 4, // Nuevo ID de sistema
  //       fecha: new Date().toISOString().slice(0, 19).replace('T', ' ') // Nueva fecha en formato MySQL
  //     }

  //     try {
  //       const response = await fetch(`http://localhost:3002/api/rondas/${id}`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(rondaData)
  //       })

  //       const data = await response.json()
  //       console.log(data)
  //     } catch (error) {
  //       console.error('Error al actualizar la ronda:', error)
  //     }
  //   }

  //   // Llamadas a las funciones de actualización al cargar la página
  //   updateSistema().catch(error => { console.error('Error al actualizar el sistema:', error) })
  //   updateModelo().catch(error => { console.error('Error al actualizar el sistema:', error) })
  //   updateEquipo().catch(error => { console.error('Error al actualizar el Equipo:', error) })
  //   updateRonda().catch(error => { console.error('Error al actualizar el Equipo:', error) })

  //   // updateModelo(1).catch(error => { console.error('Error al actualizar el modelo:', error) })
  //   // updateEquipo(1).catch(error => { console.error('Error al actualizar el equipo:', error) })
  //   // updateRonda('ronda1_uuid').catch(error => { console.error('Error al actualizar la ronda:', error) })
  // }, [])

  useEffect(() => {
    const deleteSistema = async (): Promise<void> => {
      const id = 8 // ID del sistema a eliminar

      try {
        // Petición GET para obtener todas las rondas
        const responseRondas = await fetch('http://localhost:3002/api/rondas')
        const rondasData = await responseRondas.json()

        // Filtrar las rondas relacionadas con el sistema a eliminar
        const rondasToDelete = rondasData.filter((ronda: any) => ronda.id_sistema === id)

        // Recorrer las rondas filtradas y ejecutar una petición DELETE para cada una
        await Promise.all(rondasToDelete.map(async (ronda: any) => {
          try {
            await fetch(`http://localhost:3002/api/rondas/${ronda.id}`, {
              method: 'DELETE'
            })
            console.log(`Ronda ${ronda.id} eliminada.`)
          } catch (error) {
            console.error(`Error al eliminar la ronda ${ronda.id}:`, error)
          }
        }))

        // Después de eliminar las rondas relacionadas, proceder a eliminar el sistema
        const response = await fetch(`http://localhost:3002/api/sistemas/${id}`, {
          method: 'DELETE'
        })

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error al eliminar el sistema:', error)
      }
    }

    const deleteModelo = async (): Promise<void> => {
      const id = 4 // ID del modelo a eliminar

      try {
        const response = await fetch(`http://localhost:3002/api/modelos/${id}`, {
          method: 'DELETE'
        })

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error al eliminar el modelo:', error)
      }
    }

    const deleteEquipo = async (): Promise<void> => {
      const id = 7 // ID del equipo a eliminar

      try {
        const response = await fetch(`http://localhost:3002/api/equipos/${id}`, {
          method: 'DELETE'
        })

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error al eliminar el equipo:', error)
      }
    }

    const deleteRonda = async (): Promise<void> => {
      const id = 'ronda3_uuid' // ID de la ronda a eliminar

      try {
        const response = await fetch(`http://localhost:3002/api/rondas/${id}`, {
          method: 'DELETE'
        })

        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error al eliminar la ronda:', error)
      }
    }

    // Llamadas a las funciones de eliminación al cargar la página
    deleteSistema().catch(error => { console.error('Error al eliminar el sistema:', error) })
    // deleteRonda().catch(error => { console.error('Error al eliminar la Ronda:', error) })
    // deleteModelo().catch(error => { console.error('Error al eliminar el modelo:', error) })
    // deleteEquipo().catch(error => { console.error('Error al eliminar el equipo:', error) })
    // deleteRonda().catch(error => { console.error('Error al eliminar la ronda:', error) })
  }, [])

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
