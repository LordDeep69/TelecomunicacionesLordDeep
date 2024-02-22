import React, { useState } from 'react'
import './home.scss'
import EngineSearch from '../../components/engineSearch/EngineSearch'
import CardSystem from '../../components/cardSystem/CardSystem'

const Home: React.FC = () => {
  const handleSearchInput = (value: string): void => {
    // Manejar la entrada de búsqueda aquí, si es necesario
    console.log('Valor de búsqueda:', value)
  }
  const [option, setOption] = useState<number>(1)

  return (
    <main className="home">
      <section className="home__left">
        <figure>
          <img src="https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png" alt="Logo App" />
          <h2>Rondas</h2>
        </figure>
        <section className='menu'>
          <h2 className='titleMenu'>Tablero de  <br/>Operaciones</h2>
          <h2 onClick={() => { setOption(1) }} className='option'>Sistemas</h2>
          <h2 onClick={() => { setOption(2) }} className='option'>Historial</h2>
          <h2 onClick={() => { setOption(3) }} className='option'>Reportar Alerta</h2>
          <h2 onClick={() => { setOption(4) }} className='option'>Ayuda</h2>
        </section>
      </section>
      {option === 1 && <section className="home__right">
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

          <CardSystem imgSystemGlobal='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/04/16516741859149.jpg' nameSystemGlobal='Buque A' />
          <CardSystem imgSystemGlobal='https://www.eltiempo.com/files/article_main_1200/files/crop/uploads/2023/07/24/64befdaacd2a6.r_1690286358602.0-96-1024-711.jpeg' nameSystemGlobal='Buque R' />
          <CardSystem imgSystemGlobal='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Russian_cruiser_Marshal_Ustinov_MOD_45164874.jpg/640px-Russian_cruiser_Marshal_Ustinov_MOD_45164874.jpg' nameSystemGlobal='Buque T' />
          <CardSystem imgSystemGlobal='data:image/jpeg;base64,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' nameSystemGlobal='Buque L' />
          <CardSystem imgSystemGlobal='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Admiral_Gorshkov_frigate_03.jpg/640px-Admiral_Gorshkov_frigate_03.jpg' nameSystemGlobal='Buque B' />
          <CardSystem imgSystemGlobal='https://www.elheraldo.co/sites/default/files/body/2012/02/02/articulo/8Bbuque.JPG' nameSystemGlobal='Buque K' />
          <CardSystem imgSystemGlobal='https://mf.b37mrtl.ru/actualidad/public_images/2018.11/article/5c0128dfe9180fb31f8b4567.jpg' nameSystemGlobal='Buque M' />
          <CardSystem imgSystemGlobal='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nEmSJm_dy6e6itzOy6dDky-LiPMVqTbkEw&usqp=CAU' nameSystemGlobal='Buque V' />

          </section>
        </section>
      </section>}

      {option === 2 && <section className="home__right">
            <b>HISTORIAL</b>
      </section>}

      {option === 3 && <section className="home__right">
            <b>REPORTE DE ALERTA</b>
      </section>}

      {option === 4 && <section className="home__right">
            <b>AYUDA</b>
      </section>}

    </main>
  )
}

export default Home
