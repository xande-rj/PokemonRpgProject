import { Link, Outlet } from "react-router";
import Navbar from "../../navbar/navbar";
import './Treinadorcss.css';
const TreinadorPage = () => {
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
            <h1>Classes Treinador</h1>
            <div className="container">
                <Link to="/classes/info/treinador" className="box box-1" data-text="Treinador" style={{ backgroundImage: "url(https://pbs.twimg.com/media/FpxAawCXoAE4ACu.jpg)" }}></Link>
                <Link to="/classes/info/azarao" className="box box-2" data-text="Azarão" style={{ backgroundImage: "url(https://i.pinimg.com/736x/51/09/33/510933fee479455e497e79af89427504.jpg)" }}></Link>
                <Link to="/classes/info/cacador" className="box box-3" data-text="Caçador" style={{ backgroundImage: "url(https://preview.redd.it/shout-out-to-hunter-j-one-of-the-best-yet-underrated-v0-v6gz98b4vd7b1.png?width=640&crop=smart&auto=webp&s=e6b81d5546a08e549abaaf394aa0972a0c69df45)" }}></Link>
                <Link to="/classes/info/elementalista" className="box box-4" data-text="Elementalista" style={{ backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b85f02c5-3d71-4a8c-bb79-8faea86f0446/defrb3n-ca20f2d8-e620-4779-a5dc-c62969c3eb3d.jpg/v1/fill/w_1280,h_1707,q_75,strp/brock__pewter_gym__by_junkcrab_defrb3n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcL2I4NWYwMmM1LTNkNzEtNGE4Yy1iYjc5LThmYWVhODZmMDQ0NlwvZGVmcmIzbi1jYTIwZjJkOC1lNjIwLTQ3NzktYTVkYy1jNjI5NjljM2ViM2QuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Qpu5vGsKrdTf0N28sSUdHJm6yvCQ5hYiTlG8NP1B9Ao)" }}></Link>
                <Link to="/classes/info/especialista" className="box box-5" data-text="Especialista" style={{ backgroundImage: "url(https://i.pinimg.com/736x/de/0f/46/de0f4698d25b36bd3453f02fdcdabacd.jpg)" }}></Link>
            </div>
            <div className="container">
                <Link to="/classes/info/estrategista" className="box box-1" data-text="Estrategista" style={{ backgroundImage: "url(https://artfiles.alphacoders.com/136/136127.png)" }}></Link>
                <Link to="/classes/info/inquebravel" className="box box-2" data-text="Inquebrável" style={{ backgroundImage: "url(https://preview.redd.it/ok-i-dont-hate-horizons-but-im-starting-to-get-a-bit-v0-rirp47o6sx0c1.jpg?auto=webp&s=400f83fb75df4d421dbab6fc960447f5088605fd)" }}></Link>
                <Link to="/classes/info/sincrono" className="box box-3" data-text="Síncrono" style={{ backgroundImage: "url(https://64.media.tumblr.com/283af1d1beb844bf1d0eaab4f5eb9a44/015f083459ca836d-b6/s1280x1920/0aa163df7ad680e4a98a6d5c131e4963d41f6ec0.jpg)" }}></Link>
            </div>
        </>
    );
}

export default TreinadorPage;
