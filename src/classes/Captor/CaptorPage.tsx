import { Link, Outlet } from "react-router";
import Navbar from "../../navbar/navbar";
import './Captorcss.css';
const CaptorPage = () => {
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
            <h1>Classes Captor</h1>
            <div className="container">
            <Link to="/classes/info/captor" className="box box-1" data-text="Captor" style={{ backgroundImage: "url(https://media.pocketmonsters.net/characters/51/5118.png)" }}></Link>
            <Link to="/classes/info/artífice" className="box box-2" data-text="Artífice" style={{ backgroundImage: "url(https://i0.wp.com/sixprizes.com/wp-content/uploads/2015/12/blacksmith-flf-16-9.jpg?fit=577,325&ssl=1)" }}></Link>
            <Link to="/classes/info/colecionador" className="box box-3" data-text="Colecionador" style={{ backgroundImage: "url(https://assets.st-note.com/production/uploads/images/146810377/rectangle_large_type_2_5a06a96facd2a20b215507ac8d2fb3e5.jpeg?width=1200)" }}></Link>
            <Link to="/classes/info/domador" className="box box-4" data-text="Domador" style={{ backgroundImage: "url(https://i.pinimg.com/736x/1b/a2/b3/1ba2b3715bd55e3a2a33774b20d3e70a.jpg)" }}></Link>
            <Link to="/classes/info/engenheiro" className="box box-5" data-text="Engenheiro" style={{ backgroundImage: "url(https://pbs.twimg.com/media/E53dgdMX0AMbiS-.jpg)" }}></Link>
            </div>
            <div className="container">
            <Link to="/classes/info/ladrão" className="box box-1" data-text="Ladrão" style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/5cf4cfa4382ac0000123aa1b/c962ef2a-44d4-4054-bf2d-cf58ab2c9cb8/RSA+Thumbnail.jpg)" }}></Link>
            <Link to="/classes/info/malabarista" className="box box-2" data-text="Malabarista" style={{ backgroundImage: "url(https://pturpg.wdfiles.com/local--files/juggler/juggler.jpg)" }}></Link>
            <Link to="/classes/info/pokébolista" className="box box-3" data-text="Pokébolista" style={{ backgroundImage: "url(https://assets.mycast.io/characters/kurt-2645721-normal.jpg?1621483956)" }}></Link>
            </div>
        </>
    );
}

export default CaptorPage;
