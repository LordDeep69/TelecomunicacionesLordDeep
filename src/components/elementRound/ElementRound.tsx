import React from 'react'
import './elementRound.scss'
const ElementRound: React.FC = () => {
  return (
    <article className='element'>

        <figure>
            <img className='imgElement' src="https://i.ibb.co/zPng5c4/image-8.png" alt="element" />
        </figure>

        <p className='nameElement'>Motor</p>

        <figure className='figureStatuElement'>
            <img className='statuElement' src="https://i.ibb.co/JzRzFNr/image-9-1.png" alt="Estado" />
            <p>Registrado</p>
        </figure>

    </article>
  )
}

export default ElementRound
