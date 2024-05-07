import React from 'react'
import { type Motor09, obtenerRegistrosMotor09, actualizarRegistroMotor09, eliminarRegistroMotor09, crearRegistroMotor09 } from '../../../api'

const MostrarRegistrosMotor09: React.FC = () => {
  const handleMostrarRegistros = async (): Promise<void> => {
    try {
      const registros = await obtenerRegistrosMotor09()
      console.log('Registros de Motor_09:', registros)
    } catch (error) {
      console.error('Error al obtener registros:', error)
    }
  }

  const handleActualizarRegistro = async (): Promise<void> => {
    try {
      const id = 1 // ID del registro a actualizar
      const motorData: Partial<Motor09> = { temp_refrigerante: 40.0 } // Datos a actualizar
      await actualizarRegistroMotor09(id, motorData)
      console.log('Registro actualizado exitosamente')
    } catch (error) {
      console.error('Error al actualizar el registro:', error)
    }
  }

  const handleEliminarRegistro = async (): Promise<void> => {
    try {
      const id = 3 // ID del registro a eliminar
      await eliminarRegistroMotor09(id)
      console.log('Registro eliminado exitosamente')
    } catch (error) {
      console.error('Error al eliminar el registro:', error)
    }
  }

  const handleCrearRegistro = async (): Promise<void> => {
    try {
      await crearRegistroMotor09(nuevoRegistro)
      console.log('Registro creado exitosamente')
      // Puedes hacer más cosas aquí después de crear el registro, como limpiar el formulario o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al crear el registro:', error)
      // Aquí podrías manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  }

  const nuevoRegistro: Motor09 = {
    id_sistema: 1,
    id_equipo: 1,
    id_ronda: '2b2589d1-0a98-11ef-ab0b-cecd02c24f20',
    fecha: '2024-04-29T12:00:00',
    temp_admision: 25.5,
    temp_refrigerante: 35.5,
    presion_barometrica: 1013.25,
    altitud: 500,
    temp_agua_bruta: 20.5,
    rpm_nominal: 1500,
    margen_vel_helice: 5,
    margen_vel_disposicion: 10,
    vel_media_piston: 200,
    potencia_iso_3046: 500,
    presion_media_efectiva: 200,
    mapa_prestaciones: 'mapa_prestaciones_01',
    mapa_desempeno: 'mapa_desempeno_01',
    depresion_admision_filtro_nuevo: 2.5,
    depresion_admision_max: 3.0,
    contrapresion_escape: 1.2,
    contrapresion_escape_max: 1.5,
    contrapresion_escape_estatica: 1.0,
    temp_combustible_conexion: 40.0,
    temp_combustible_conexion_max: 45.0,
    temp_combustible_intercambiador: 50.0,
    consumo_especifico_combustible_fsp: 0.35,
    consumo_especifico_combustible: 0.4,
    consumo_especifico_combustible_optimo: 0.3,
    consumo_especifico_combustible_cruise: 0.45,
    consumo_combustible_ralenti: 0.1,
    consumo_aceite_100h: 0.5,
    presion_sobrealimentacion_abs: 1.8,
    caudal_volumetrico_aire_combustion: 2000,
    caudal_volumetrico_escape: 1800,
    temp_escape_turbocompresor: 300,
    temp_escape_turbocompresor_max: 320,
    temp_escape_motor: 100,
    temp_escape_motor_max: 110,
    calor_refrigerante_calor_aceite: 1500,
    disipacion_calor_refrigerante_aceite_calefaccion: 1000,
    calor_refrigerante_calor_aceite_sin_calefaccion: 1200,
    calor_refrigerante_sin_calefaccion: 900,
    calor_aceite: 800,
    disipacion_calor_aire_aceite: 300,
    calor_remanente_combustible_retorno: 200,
    calor_radiacion_conveccion_motor: 700,
    calor_radiacion_conveccion_motor_temperatura: 80,
    dif_temp_refrigerante: 15,
    temp_funcionamiento_refrigerante_desde: 70,
    temp_funcionamiento_refrigerante_hasta: 90,
    temp_refrigerante_despues_motor_limite1: 100,
    temp_refrigerante_despues_motor_limite2: 110,
    temp_refrigerante_despues_equipo_enfriamiento: 60,
    temp_refrigerante_despues_equipo_enfriamiento_max: 65,
    contenido_anticongelante_max: 50,
    bomba_refrigerante_caudal: 100,
    bomba_refrigerante_caudal_5p: 120,
    equipo_refrigeracion_caudal: 80,
    bomba_refrigerante_dif_presion: 1.2,
    bomba_refrigerante_dif_presion_min: 1.0,
    bomba_refrigerante_dif_presion_max: 1.5,
    bomba_refrigerante_dif_presion_con_equipo: 1.3,
    bomba_refrigerante_dif_presion_sin_equipo: 1.1
  }

  return (
    <div>
      <h2>Otras Operaciones con Motor_09</h2>
      <button onClick={handleMostrarRegistros}>Mostrar Registros</button>
      <button onClick={handleActualizarRegistro}>Actualizar Registro</button>
      <button onClick={handleEliminarRegistro}>Eliminar Registro</button>
      <button onClick={handleCrearRegistro}>Agregar Registro</button>

    </div>
  )
}

export default MostrarRegistrosMotor09
