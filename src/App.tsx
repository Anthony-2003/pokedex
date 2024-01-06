
import { Aside } from './components/Aside'
import {Pokedex} from './components/Pokedex'

function App() {
  return (
    <section className='bg-[#F6F8FC]'>
      <main className='max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]  font-outfit '>
        <Pokedex />
        <Aside />
      </main>
    </section>
  )
}

export default App
