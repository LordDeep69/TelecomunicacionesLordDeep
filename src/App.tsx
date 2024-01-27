import { Counter } from './redux/features/counter/Counter'

const App = (): JSX.Element => {
  return (
    <div>
      <h1>RONDAS DE MANTENIMIENTO</h1>
      <section>
          <Counter/>
      </section>
    </div>
  )
}

export default App
