import React from 'react'
import './elementRound.scss'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { changeId } from './../../redux/features/stateElementSelected/stateElementSelected.ts'

interface Props {
  imgSystemGlobal: string
  nameSystemGlobal: string
  state: string
}

const ElementRound: React.FC<Props> = ({ imgSystemGlobal, nameSystemGlobal, state }) => {
  const dispatch = useAppDispatch()

  return (
    <article onClick={() => dispatch(changeId(nameSystemGlobal))}
    className='element'>

        <figure>
            <img className='imgElement' src={imgSystemGlobal} alt="element" />
        </figure>

        <p className='nameElement'>{nameSystemGlobal}</p>

        <figure className='figureStatuElement'>
            {state === 'check' && <img className='statuElement' src="https://i.ibb.co/JzRzFNr/image-9-1.png" alt="Estado" />}
            {state === 'pending' && <img className='statuElement pending' src="https://cdn-icons-png.flaticon.com/512/3756/3756719.png" alt="Estado" />}
            {state === 'offline' && <img className='statuElement offline' src="https://cdn-icons-png.flaticon.com/512/221/221755.png" alt="Estado" />}

            {state === 'check' && <p className='checkStatuP'>Registrado</p>}
            {state === 'pending' && <p className='pendingStatuP'>Pendiente</p>}
            {state === 'offline' && <p className='offlineStatuP'>No Disponible</p>}

        </figure>

    </article>
  )
}

export default ElementRound
