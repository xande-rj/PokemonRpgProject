import { Link, Outlet } from "react-router";
import Navbar from "../navbar/navbar";
import Classedata from "./classdata/classedata";


// Componente Tabledata
const ClassPage = () => {
   
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
            <h1>Classes</h1>
            <Classedata/>
        </>
    )
};

export default ClassPage;
