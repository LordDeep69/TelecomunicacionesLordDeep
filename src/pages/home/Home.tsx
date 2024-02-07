import React from 'react'
import './home.scss'
import EngineSearch from '../../components/engineSearch/EngineSearch'
import CardSystem from '../../components/cardSystem/CardSystem'

const Home: React.FC = () => {
  const handleSearchInput = (value: string): void => {
    // Manejar la entrada de búsqueda aquí, si es necesario
    console.log('Valor de búsqueda:', value)
  }

  return (
    <main className="home">
      <section className="home__left">
        <figure>
          <img src="https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png" alt="Logo App" />
          <h2>Rondas</h2>
        </figure>
        <section className='menu'>
          <h2 className='titleMenu'>Tablero de  <br/>Operaciones</h2>
          <h2 className='option'>Sistemas</h2>
          <h2 className='option'>Historial</h2>
          <h2 className='option'>Reportar Alerta</h2>
          <h2 className='option'>Ayuda</h2>
        </section>
      </section>
      <section className="home__right">
        <section className='searchEngine'>
          <h1 className='titleSelected' >Sistemas</h1>
          {/* Proporcionar la función handleSearchInput como propósito */}
          <section className='mySearch'>

            <figure className='figureFilter'>
              <img src="https://i.ibb.co/M6pXjrd/image-2.png" alt="filter" />
            </figure>
            <EngineSearch getInput={handleSearchInput} />

          </section>
        </section>
        <section className='container'>
          <section className='actionsBoard'>
            <span className='addSystem'>
                <p>Agregar <br/>Sistema</p>
            </span>

            <span className='classystem'>
                <p>Tipo Guerra</p>
            </span>

          </section>
          <section className='board'>
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />

          <CardSystem imgSystemGlobal='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/04/16516741859149.jpg' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />
          <CardSystem imgSystemGlobal='https://i.ibb.co/fDDv9H6/Mask-group.png' nameSystemGlobal='Buque Z' />

          </section>
        </section>
      </section>
    </main>
  )
}

export default Home
