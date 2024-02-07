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
                                    <img className = 'historyImg' src="https://i.ibb.co/xL4RpZw/image-6.png" alt="history" />
                                </figure>

                                <p>Historial</p>
                            </span>

                        </section>
                    </div>

                </div>
            </section>

            <section className='formatRound'>

                <section className='elementsSystem'>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>
                    <ElementRound/>

                </section>
                <section className='format'>

                    <title>Motor</title>
                    <section className='formatRoundlement'>
                        <form>

                            {/* // Campo de texto para el nombre, requerido y con un mínimo de 3 caracteres */}
                            <label htmlFor='name'>Nombre</label>
                            <input type='text' id='name' {...register('name', { required: true, minLength: 3 })} />
                            {/* // Muestra el error si el campo no es válido */}
                            {errors.name != null && <p>El nombre es obligatorio y debe tener al menos 3 caracteres</p>}

                            {/* // Campo de contraseña para la contraseña, requerido y con un mínimo de 6 caracteres */}
                            <label htmlFor='password'>Contraseña</label>
                            <input type='password' id='password' {...register('password', { required: true, minLength: 6 })} />
                            {/* // Muestra el error si el campo no es válido */}
                            {errors.password != null && <p>La contraseña es obligatoria y debe tener al menos 6 caracteres</p>}

                            {/* // Campo de email para el correo electrónico, requerido y con formato de email */}
                            <label htmlFor='email'>Correo electrónico</label>
                            <input type='email' id='email' {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                            {/* // Muestra el error si el campo no es válido */}
                            {errors.email != null && <p>El correo electrónico es obligatorio y debe tener un formato válido</p>}

                            {/* // Campo de número para la edad, requerido y con un valor entre 18 y 99 */}
                            <label htmlFor='age'>Edad</label>
                            <input type='number' id='age' {...register('age', { required: true, min: 18, max: 99 })} />
                            {/* // Muestra el error si el campo no es válido */}
                            {errors.age != null && <p>La edad es obligatoria y debe estar entre 18 y 99 años</p>}

                            {/* // Campo de selector para el género, requerido y con dos opciones: masculino y femenino */}
                            <label htmlFor='gender'>Género</label>
                            <select id='gender' {...register('gender', { required: true })}>
                            <option value=''>Selecciona una opción</option>
                            <option value='masculino'>Masculino</option>
                            <option value='femenino'>Femenino</option>
                            </select>
                            {/* // Muestra el error si el campo no es válido */}
                            {errors.gender != null && <p>El género es obligatorio</p>}

                            {/* // Campo de rango para la valoración, opcional y con un valor entre 1 y 5 */}
                            <label htmlFor='rating'>Valoración</label>
                            <input type='range' id='rating' {...register('rating', { min: 1, max: 5 })} />
                            {/* // No muestra ningún error, ya que el campo es opcional */}

                            <span onClick={() => { handleLoginClick() }}>ENVIAR</span>

                        </form>

                    </section>
                    <section className='registerRound'>

                    </section>

                </section>

            </section>
        </main>
  )
}

export default Rounds
