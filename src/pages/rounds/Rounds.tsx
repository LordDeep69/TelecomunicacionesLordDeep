import React from 'react'
import './rounds.scss'
import ElementRound from '../../components/elementRound/ElementRound'
import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../hooks/reduxHooks'
import GeneradorFormat from '../../components/ElementsFormats/GeneradorFormat/GeneradorFormat'
import MotorFormat from '../../components/ElementsFormats/MotorFormat/MotorFormat'

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
//   const { register } = useForm<FormData>()

  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.idElemetSelecte.id)
  //   const watchFields = watch() // Observa todos los campos

  // Define la función que se ejecuta al enviar el formulario

  //   const handleLoginClick = (): void => {
  //     // Acción a realizar cuando se hace clic en el botón de ingresar
  //     console.log('Datos del formulario:', watchFields)
  //   }

  console.log(`El Id Seleccionado es: ${count}`)

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
                                <span className='dataOne roundDataOne'>
                                    <p> <span>Tipo:</span> Guerra</p>
                                    <p><span>Equipos:</span> 208</p>
                                </span>

                                <span className='dataTwo roundDataTwo'>
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
                    <ElementRound state='check' imgSystemGlobal='https://galaico.com.co/wp-content/uploads/2020/04/AP-170FB.png' nameSystemGlobal='Motor' />

                    <ElementRound state='check' imgSystemGlobal='https://http2.mlstatic.com/D_NQ_NP_780236-MCO52390227857_112022-O.webp' nameSystemGlobal='Aiere' />

                    <ElementRound state='pending' imgSystemGlobal='https://static.vecteezy.com/system/resources/previews/028/078/384/original/industrial-electric-generator-engine-isometric-free-png.png' nameSystemGlobal='Generador' />

                    <ElementRound state='check' imgSystemGlobal='https://www.roxell.com/sites/default/files/styles/full_width_preserve_ratio_desktop/public/2022-03/heating-direct-fired-cannon-heater-gas-oil-render-siroc-turbo.png?itok=2sO52FnU' nameSystemGlobal='Calentador' />

                    <ElementRound state='offline' imgSystemGlobal='https://www.quincycompressor.com/wp-content/uploads/2020/12/qv-10-aug-2016-1.png' nameSystemGlobal='Bomba' />

                    <ElementRound state='check' imgSystemGlobal='https://i1.wp.com/www.macrolaser.com.co/wp-content/uploads/2016/02/MR4040.png?fit=910%2C1036' nameSystemGlobal='CNC' />
                    <ElementRound state='check' imgSystemGlobal='https://http2.mlstatic.com/D_NQ_NP_780236-MCO52390227857_112022-O.webp' nameSystemGlobal='Aiere' />

                    <ElementRound state='pending' imgSystemGlobal='https://static.vecteezy.com/system/resources/previews/028/078/384/original/industrial-electric-generator-engine-isometric-free-png.png' nameSystemGlobal='Generador' />

                    <ElementRound state='check' imgSystemGlobal='https://www.roxell.com/sites/default/files/styles/full_width_preserve_ratio_desktop/public/2022-03/heating-direct-fired-cannon-heater-gas-oil-render-siroc-turbo.png?itok=2sO52FnU' nameSystemGlobal='Calentador' />

                    <ElementRound state='offline' imgSystemGlobal='https://www.quincycompressor.com/wp-content/uploads/2020/12/qv-10-aug-2016-1.png' nameSystemGlobal='Bomba' />

                </section>
                { count === 'Generador' && <GeneradorFormat/>}

                {count === 'Aiere' && <h2>FORMATO DE AIRE</h2>}
                {count === 'Motor' && <MotorFormat/>}
                {count === 'Calentador' && <h2>FORMATO DE Calentador</h2>}
                {count === 'Bomba' && <h2>FORMATO DE Bomba</h2>}
                {count === 'CNC' && <h2>FORMATO DE CNC</h2>}

            </section>
        </main>
  )
}

export default Rounds
