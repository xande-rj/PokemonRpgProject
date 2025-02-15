import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className='menu'>
            <Link to='/'>Berries</Link>
            <Link to='/nature'>Natureza</Link>
            <Link to='/pokebolas'>Pokebolas</Link>
            <Link to='/meditens'>Itens Medicinais</Link>
            <Link to='/holditens'>Itens Mantidos</Link>
            <Link to='/classes'>Classes</Link>
            <Link to='/meusPokemons'>Meus Pokemons</Link>
        </nav>
    );
}

export default Navbar;
