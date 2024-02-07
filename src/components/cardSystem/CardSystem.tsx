import React from 'react'
import './cardSystem.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  imgSystemGlobal: string
  nameSystemGlobal: string
}

const CardSystem: React.FC<Props> = ({ imgSystemGlobal, nameSystemGlobal }) => {
  const navigate = useNavigate()
  const handleGo = (): void => {
    navigate('/round')
  }
  return (
    <article className='systemCard' onClick={() => { handleGo() }}>
        <figure className='systemCard__picture'>
            <img src={imgSystemGlobal} alt="Imagen del Sistema" />
        </figure>

        <div className='systemCard__info'>
            <span className='nameSystem'>{nameSystemGlobal}</span>
            <div className='dataSystem'>
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
    </article>
  )
}

export default CardSystem
