import React from 'react'
import './rounds.scss'
import ElementRound from '../../components/elementRound/ElementRound'
import { useForm } from 'react-hook-form'

interface FormData {
  // Aquí puedes definir los campos que necesites, con sus respectivos tipos
  // Por ejemplo:
  name: string
  password: string
  email: string
  age: number
  gender: string
  rating: number
  temperatureOil: number
  pressure: number
  statuPressureOilLow: string
  statuPressureOilHight: string
  generatorRpm: number
  generatorOperation: string
  generatorAutomatic: string
  generatorManual: string
  generatorRemoteBlock: string
  generatorCB: string
  generatorFailure: string
}

const Rounds: React.FC = () => {
  // Crea una instancia de useForm con el tipo de los datos
  const { register, formState: { errors }, watch } = useForm<FormData>()
  const watchFields = watch() // Observa todos los campos

  // Define la función que se ejecuta al enviar el formulario

  const handleLoginClick = (): void => {
    // Acción a realizar cuando se hace clic en el botón de ingresar
    console.log('Datos del formulario:', watchFields)
  }

  return (
        <main className='round'>
            <section className='roundsOperations'>

                <figure className='figureSystemRound'>
                    <img src="https://images.ecestaticos.com/uR18VRzf557uZn7XFdhtTPDyYSE=/0x178:1898x1245/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F453%2Fc2d%2Fd82%2F453c2dd823162e82b5b779f5fa390e63.jpg" alt="a" />
                </figure>

                <div className='actionsRounds'>

                    <span className='titleActionsRound'>Buque B</span>

                    <div className='containerActions'>
                        <div className='systemCard__info twoInfo'>
                            <div className='dataSystem twoDataSystem'>
                                <span className='dataOne'>
                                    <p> <span>Tipo:</span> Guerra</p>
                                    <p><span>Equipos:</span> 208</p>
                                </span>

                                <span className='dataTwo'>
                                    <p><span>Rondas:</span> Realizadas</p>
                                    <p><span>Ubicación:</span> Cartagena</p>
                                </span>
                            </div>
                        </div>

                        <section className='actionsButtons'>

                            <span className='edit'>
                                <figure>
                                    <img src="https://i.ibb.co/rmwh7vd/image-3.png" alt="Edit" />
                                </figure>
                                <p>Editar</p>
                            </span>

                            <span className='delete'>
                                <figure>
                                    <img src="https://i.ibb.co/5GX2sKY/image-4.png" alt="Delte" />
                                </figure>
                                <p>Eliminar</p>
                            </span>

                            <span className='newRound'>
                                <figure>
                                    <img src="https://i.ibb.co/rvkKtK1/image-5.png" alt="New Round" />
                                </figure>
                                <p>Nueva Ronda</p>
                            </span>

                            <span className='history'>
                                <figure className='historyFigure'>
                                    <img className='historyImg' src="https://i.ibb.co/xL4RpZw/image-6.png" alt="history" />
                                </figure>

                                <p>Historial</p>
                            </span>

                        </section>
                    </div>

                </div>
            </section>

            <section className='formatRound'>

                <section className='elementsSystem'>
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />
                    <ElementRound />

                </section>
                <section className='format'>

                    <span className='titleElement'>Generador</span>
                    <section className='formatRoundlement'>
                        <span className='titleRegister'>REGISTRO</span>
                        <form className='formElementSelected'>

                            <article className='containerInputs'>
                                <span className='titleInput'>Aceite</span>
                                <div className='divider'></div> {/* Línea divisoria */}
                                <section className='inputsAll'>

                                    <div className='oneInput'>

                                        <label htmlFor='pressure'>Presión de Aceite (bar) </label>
                                        <input
                                            type='number'
                                            id='pressure'
                                            {...register('pressureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Presión'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Temperatura (°C) </label>
                                        <input
                                            type='number'
                                            id='temperature'
                                            {...register('temperatureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Ingrese en unidad de °C'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Baja Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilLow', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Alta Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilHight', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                </section>

                            </article>

                            <article className='containerInputs'>
                                <span className='titleInput'>Estado</span>
                                <div className='divider'></div> {/* Línea divisoria */}
                                <section className='inputsAll'>

                                    <div className='oneInput'>

                                        <label htmlFor='pressure'>Rpm Generador (bar) </label>
                                        <input
                                            type='number'
                                            id='generatorRpm'
                                            {...register('generatorRpm', { required: true, min: -50, max: 50 })}
                                            placeholder='Rpm'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Generador Operado </label>
                                        <select id='generatorOperation' {...register('generatorOperation', { required: true })}>
                                            <option value='Not Running'>Not Running</option>
                                            <option value='Runing'>Runing</option>
                                        </select>

                                    </div>
                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Generador en Automático </label>
                                        <select id='generatorAutomatic' {...register('generatorAutomatic', { required: true })}>
                                            <option value='On'>On</option>
                                            <option value='Off'>Off</option>
                                        </select>

                                    </div>
                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Generador Arranque Manual</label>
                                        <select id='generatorManual' {...register('generatorManual', { required: true })}>
                                            <option value='On'>On</option>
                                            <option value='Off'>Off</option>
                                        </select>

                                    </div>
                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Remoto Bloqueado </label>
                                        <select id='generatorRemoteBlock' {...register('generatorRemoteBlock', { required: true })}>
                                            <option value='On'>On</option>
                                            <option value='Off'>Off</option>
                                        </select>

                                    </div>
                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>CB Estado </label>
                                        <select id='generatorCB' {...register('generatorCB', { required: true })}>
                                            <option value='On'>On</option>
                                            <option value='Off'>Off</option>
                                        </select>

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Falla del Generador</label>
                                        <select id='generatorFailure' {...register('generatorFailure', { required: true })}>
                                            <option value='Normal'>Not Failure</option>
                                            <option value='Alerta'>Alarm</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                </section>

                            </article>

                            <article className='containerInputs'>
                                <span className='titleInput'>Aceite</span>
                                <div className='divider'></div> {/* Línea divisoria */}
                                <section className='inputsAll'>

                                    <div className='oneInput'>

                                        <label htmlFor='pressure'>Presión de Aceite (bar) </label>
                                        <input
                                            type='number'
                                            id='pressure'
                                            {...register('pressureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Presión'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Temperatura (°C) </label>
                                        <input
                                            type='number'
                                            id='temperature'
                                            {...register('temperatureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Ingrese en unidad de °C'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Baja Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilLow', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Alta Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilHight', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                </section>

                            </article>

                            <article className='containerInputs'>
                                <span className='titleInput'>Aceite</span>
                                <div className='divider'></div> {/* Línea divisoria */}
                                <section className='inputsAll'>

                                    <div className='oneInput'>

                                        <label htmlFor='pressure'>Presión de Aceite (bar) </label>
                                        <input
                                            type='number'
                                            id='pressure'
                                            {...register('pressureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Presión'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Temperatura (°C) </label>
                                        <input
                                            type='number'
                                            id='temperature'
                                            {...register('temperatureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Ingrese en unidad de °C'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Baja Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilLow', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Alta Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilHight', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                </section>

                            </article>

                            <article className='containerInputs'>
                                <span className='titleInput'>Aceite</span>
                                <div className='divider'></div> {/* Línea divisoria */}
                                <section className='inputsAll'>

                                    <div className='oneInput'>

                                        <label htmlFor='pressure'>Presión de Aceite (bar) </label>
                                        <input
                                            type='number'
                                            id='pressure'
                                            {...register('pressureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Presión'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='temperature'>Temperatura (°C) </label>
                                        <input
                                            type='number'
                                            id='temperature'
                                            {...register('temperatureOil', { required: true, min: -50, max: 50 })}
                                            placeholder='Ingrese en unidad de °C'
                                        />

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Baja Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilLow', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                    <div className='oneInput'>

                                        <label htmlFor='oilPressure'>Alta Presión de Aceite</label>
                                        <select id='oilPressure' {...register('statuPressureOilHight', { required: true })}>
                                            <option value='Normal'>Normal</option>
                                            <option value='Alerta'>Critical</option>
                                            <option value='Revisión'>Revisión</option>
                                        </select>

                                    </div>

                                </section>

                            </article>

                        </form>
                        <span className='buttonRegisterElement'>Registrar</span>

                    </section>
                    <section className='registerRound'>

                    </section>

                </section>

            </section>
        </main>
  )
}

export default Rounds
