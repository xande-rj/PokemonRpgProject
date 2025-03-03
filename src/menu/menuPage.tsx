import { Link, Outlet } from 'react-router'
import Navbar from '../navbar/navbar'
import './menu.css'
const MenuPage = (props:any) => {
    return (
        <>
            <div className='menu'>
                <Navbar />
                <Outlet />
            </div>
            <div>
                <Link to='/'>
                    <img src='https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png' className="logo react" alt="poke logo" />
                </Link>
            </div>
            <h1>{props.name}</h1>
        </>
    );
}

export default MenuPage;
