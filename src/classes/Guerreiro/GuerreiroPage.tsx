import { Link, Outlet } from "react-router";
import Navbar from "../../navbar/navbar";
import './Guerreirocss.css';
const GuerreiroPage = () => {
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
            <h1>Classes Guerreiro</h1>
            <div className="container">
                <Link to="/classes/info/guerreiro" className="box box-1" data-text="Guerreiro" style={{ backgroundImage: "url(https://pm1.aminoapps.com/7513/73aa33ed48bc7a24336815730bc9c6560f85a60ar1-500-500v2_00.jpg)" }}></Link>
                <Link to="/classes/info/artista_marcial" className="box box-2" data-text="Artista Marcial" style={{ backgroundImage: "url(https://pbs.twimg.com/media/GDH0ZbAWEAAKEMx?format=jpg&name=large)" }}></Link>
                <Link to="/classes/info/atleta" className="box box-3" data-text="Atleta" style={{ backgroundImage: "url(https://i.pinimg.com/736x/0a/90/40/0a9040812ead5a987f20eaf35985dd37.jpg)" }}></Link>
                <Link to="/classes/info/augure" className="box box-4" data-text="Áugure" style={{ backgroundImage: "url(https://pm1.aminoapps.com/6339/b8651202d35f63e2549088159723ec0c2a13ce4d_00.jpg)" }}></Link>
                <Link to="/classes/info/bandido" className="box box-5" data-text="Bandido" style={{ backgroundImage: "url(https://cdn.donmai.us/original/cf/52/cf521b7a0f378d322902c9c68d68bbf7.jpg)" }}></Link>
            </div>
            <div className="container">
                <Link to="/classes/info/monge" className="box box-1" data-text="Monge" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-kRjPNNFT0fq_xzYLGm4Lp-JKouss_pTv1OB5sR2iG44qHcbd_or49h-nsCqfZv_QXI&usqp=CAU)" }}></Link>
                <Link to="/classes/info/ninja" className="box box-2" data-text="Ninja" style={{ backgroundImage: "url(https://i-ogp.pximg.net/c/540x540_70/img-master/img/2019/05/25/17/29/06/74895659_p0_square1200.jpg)" }}></Link>
                <Link to="/classes/info/soldado" className="box box-3" data-text="Soldado" style={{ backgroundImage: "url(https://pturpg.wdfiles.com/local--files/104:soldier/soldier.jpg)" }}></Link>
            </div>
        </>
    );
}

export default GuerreiroPage;
