import { useState } from 'react'

const actu: React.FC = () => {
  const [userId, setUserId] = useState('') // Asume que tienes el ID del usuario
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

  const actualizarUsuario = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          correo
          // Agrega aquí otros campos que necesites actualizar
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Usuario actualizado exitosamente:', data)
      } else {
        console.error('Error al actualizar el usuario')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  return (
        <div>
            <input
                type="text"
                value={userId}
                onChange={(e) => { setUserId(e.target.value) }}
                placeholder="ID del usuario"
            />
            <input
                type="text"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
                placeholder="Nombre del usuario"
            />
            <input
                type="email"
                value={correo}
                onChange={(e) => { setCorreo(e.target.value) }}
                placeholder="Correo del usuario"
            />
            <button onClick={actualizarUsuario}>Actualizar Usuario</button>
        </div>
  )
}

export default actu
