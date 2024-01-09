import { Aside } from "./components/Aside";
import { ModalPokemon } from "./components/ModalPokemon";
import { Pokedex } from "./components/Pokedex";
import { usePokemonContext } from "./hooks/usePokemonContext";

function App() {
  const { showDetailPokemon, closePokemonDetail } = usePokemonContext();
  console.log(showDetailPokemon);

  return (
    <section className="bg-[#F6F8FC]">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]  font-outfit ">
        <Pokedex />
        <Aside />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
        />
      </main>
    </section>
  );
}

export default App;
