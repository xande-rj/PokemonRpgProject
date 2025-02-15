import { Link, Outlet } from 'react-router';
import Navbar from '../navbar/navbar';
import PokemonComponent from './myPokemonData/myPokemonsdata';
import Data from './pokemondata.json';
interface PokemonData {
    pokemons: {
        [key: string]: {
            name: string;
            nickname: string;
            id: number;
            image: string;
            hp: number;
            ataque: number;
            defesa: number;
            spAtaque: number;
            spDefesa: number;
            velocidade: number;
            bonusElement: number;
            level: number;
            exp: number;
            type: string[];
            habilidade:{
                nome:string;
                frequencia:string;
                efeito:string;
            };
            ataques: {
                skill: string;
                cd: string;
                type: string;
                dano: string;
                frequencia: string;
                efeito?: string;
            }[];
        };
    };
}

const MyPokemons = () => {
    const mockData: PokemonData = Data
    
    return (<>
        <div className='menu'>
            <Navbar />
            <Outlet />
        </div>
        <div>
            <Link to='/'>
                <img src='https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png' className="logo react" alt="poke logo" />
            </Link>
        </div>
        <h1>Meus Pokemons</h1>
        <PokemonComponent data={mockData} />
    </>
    );
};
export default MyPokemons;