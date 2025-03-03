
import MenuPage from '../menu/menuPage';
import PokemonComponent from './myPokemonData/myPokemonsdata';
import Data from './pokemondata.json';
import { PokemonData } from './pokemonDataInterface';

const MyPokemons = () => {
    const mockData: PokemonData = Data
    
    return (<>
        <MenuPage name='My Pokemons'/>
        <PokemonComponent data={mockData} />
    </>
    );
};
export default MyPokemons;