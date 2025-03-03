import { Link } from "react-router";
import MenuPage from "../../menu/menuPage";
const MísticoPage = () => {
    return (
        <>
            <MenuPage name="Classes Místico"/>
            <div className="container">
                <Link to="/classes/info/mistico" className="box box-1" data-text="Místico" style={{ backgroundImage: "url(https://i.redd.it/zinnia-from-pokemon-oras-v0-jrazmi8919bc1.jpg?width=1492&format=pjpg&auto=webp&s=48a37b4291dfd163575187f799a8e9bb021e3d48)" }}></Link>
                <Link to="/classes/info/bardo" className="box box-2" data-text="Bardo" style={{ backgroundImage: "url(https://i.quotev.com/ss2c2i3qaaaa.jpg)" }}></Link>
                <Link to="/classes/info/guardiao" className="box box-3" data-text="Guardião" style={{ backgroundImage: "url(https://www.gamespot.com/a/uploads/scale_small_plus/mig/6/3/4/1/2116341-169_pokemonconquest_intro_ot_ds_040512.jpg)" }}></Link>
                <Link to="/classes/info/ilusionista" className="box box-4" data-text="Ilusionista" style={{ backgroundImage: "url(https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/seasons/season16/season16_ep30_ss04.jpg)" }}></Link>
                <Link to="/classes/info/medium" className="box box-5" data-text="Médium" style={{ backgroundImage: "url(https://preview.redd.it/you-are-challenged-by-hex-maniac-anina-v0-4ofbztnj7wea1.jpg?auto=webp&s=cc39088aad1d7203f0ebdb0bb4e520a016277413)" }}></Link>
       
                <Link to="/classes/info/orador" className="box box-6" data-text="Orador" style={{ backgroundImage: "url(https://m.media-amazon.com/images/M/MV5BOTc3Y2EzMDQtZWM1Yi00ZWYzLWJiNDYtNGMwNDBmMWUyYWU3XkEyXkFqcGc@._V1_.jpg)" }}></Link>
                <Link to="/classes/info/runico" className="box box-7" data-text="Rúnico" style={{ backgroundImage: "url(https://m.media-amazon.com/images/M/MV5BZjVhMjIxNzAtZDg3My00MjZmLThjNDMtNGJhMjI5NDNiMzVhXkEyXkFqcGc@._V1_.jpg)" }}></Link>
                <Link to="/classes/info/xama" className="box box-8" data-text="Xamã" style={{ backgroundImage: "url(https://artfiles.alphacoders.com/153/thumb-153147.png)" }}></Link>
            </div>
        </>
    );
}

export default MísticoPage;
