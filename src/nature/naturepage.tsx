import { Link, Outlet } from "react-router";
import Navbar from "../navbar/navbar";
import NatureData from './naturedata/natureData';


// Componente Tabledata
const Nature = () => {
   
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
            <h1>Nature</h1>

            <NatureData/>
        </>
    )
};

export default Nature;
