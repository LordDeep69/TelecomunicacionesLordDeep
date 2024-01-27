import React from 'react'
import './cardSystem.scss'
const CardSystem: React.FC = () => {
  return (
    <article className='systemCard'>
        <figure className='systemCard__picture'>
            <img src="https://i.ibb.co/fDDv9H6/Mask-group.png" alt="Imagen del Sistema" />
        </figure>

        <div className='systemCard__info'>
            <span className='nameSystem'>Buque A</span>
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
