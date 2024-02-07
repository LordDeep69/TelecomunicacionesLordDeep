import React from 'react'
import './elementRound.scss'
const ElementRound: React.FC = () => {
  return (
    <article className='element'>

        <figure>
            <img className='imgElement' src="https://www.eduardono.com/cdn/shop/products/generadoresplantas-electricas-2600w-120v-871624.png?v=1663087737" alt="element" />
        </figure>

        <p className='nameElement'>Generador</p>

        <figure className='figureStatuElement'>
            <img className='statuElement' src="https://i.ibb.co/JzRzFNr/image-9-1.png" alt="Estado" />
            <p>Registrado</p>
        </figure>

    </article>
  )
}

export default ElementRound
