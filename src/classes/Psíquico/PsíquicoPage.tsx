import { Link } from "react-router";

import MenuPage from "../../menu/menuPage";
const PsíquicoPage = () => {
    return (
        <>
             <MenuPage name="Classes Psíquico"/>
            <div className="container">
                <Link to="/classes/info/psiquico" className="box box-1" data-text="Psíquico" style={{ backgroundImage: "url(https://www.nightwater.email/content/images/size/w600/2024/01/psychic-control-1.jpeg)" }}></Link>
                <Link to="/classes/info/ardente" className="box box-2" data-text="Ardente" style={{ backgroundImage: "url(https://cdn.donmai.us/original/30/c2/30c2a312c1335dffca4e4773a9df6017.jpg)" }}></Link>
                <Link to="/classes/info/bruxo" className="box box-3" data-text="Bruxo" style={{ backgroundImage: "url(https://i.pinimg.com/474x/c0/8c/f9/c08cf9d9a7ef1dba89c6e15617e61737.jpg)" }}></Link>
                <Link to="/classes/info/celio" className="box box-4" data-text="Célio" style={{ backgroundImage: "url(https://assets.mycast.io/actor_images/actor-olympia-pokemon-405938_large.jpg?1649895922)" }}></Link>
                <Link to="/classes/info/empatico" className="box box-5" data-text="Empático" style={{ backgroundImage: "url(https://i.pinimg.com/736x/5f/5d/60/5f5d60d6220e8fb59e2d5bd703b9ea72.jpg)" }}></Link>
           
                <Link to="/classes/info/nebuloso" className="box box-6" data-text="Nebuloso" style={{ backgroundImage: "url(https://images6.fanpop.com/image/photos/34100000/Marlon-pokemon-marlon-34135257-500-495.jpg)" }}></Link>
                <Link to="/classes/info/terrulento" className="box box-7" data-text="Terrulento" style={{ backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtMlEnWotoXkgcxhpZoK4-KhvNCyvWTcLhI8BprVlBPmi2H8VP-WOwTkNi43PdcLEfs7EHaimkbn5YP4VHSpPT4sWxVV5vvKVNo9jgVZ1eHsEVhZNW6j9W7KB3uQVtWg02COVls900Mhc/s16000-rw/800px-Young_Roark.jpg)" }}></Link>
                <Link to="/classes/info/vidente" className="box box-8" data-text="Vidente" style={{ backgroundImage: "url(https://images6.fanpop.com/image/photos/34100000/Caitlin-pokemon-caitlin-34182222-506-512.jpg)" }}></Link>
            </div>
        </>
    );
}

export default PsíquicoPage;
