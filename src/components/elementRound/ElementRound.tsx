import React from 'react'
import './elementRound.scss'

interface Props {
  imgSystemGlobal: string
  nameSystemGlobal: string
}

const ElementRound: React.FC<Props> = ({ imgSystemGlobal, nameSystemGlobal }) => {
  return (
    <article className='element'>

        <figure>
            <img className='imgElement' src={imgSystemGlobal} alt="element" />
        </figure>

        <p className='nameElement'>{nameSystemGlobal}</p>

        <figure className='figureStatuElement'>
            <img className='statuElement' src="https://i.ibb.co/JzRzFNr/image-9-1.png" alt="Estado" />
            <p>Registrado</p>
        </figure>

    </article>
  )
}

export default ElementRound
