import { Link, Outlet } from "react-router";
import Navbar from "../navbar/navbar";
import HolditensData from "./holditensData/holditensData";


// Componente Tabledata
const holditens = () => {
   
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
            <h1>Itens Mantidos</h1>

            <HolditensData/>
        </>
    )
};

export default holditens;
