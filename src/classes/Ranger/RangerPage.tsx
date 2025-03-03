import { Link } from "react-router";
import MenuPage from "../../menu/menuPage";
const RangerPage = () => {
    return (
        <>
            <MenuPage name="Classes Ranger"/>
            <div className="container">
                <Link to="/classes/info/ranger" className="box box-1" data-text="Ranger" style={{ backgroundImage: "url(https://i.pinimg.com/736x/8b/59/20/8b5920eb441a712d72a3f043ecde892a.jpg)" }}></Link>
                <Link to="/classes/info/aventureiro" className="box box-2" data-text="Aventureiro" style={{ backgroundImage: "url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/05/ash-ketchum-and-all-of-his-pokemon-in-the-anime-1.jpg)" }}></Link>
                <Link to="/classes/info/cavaleiro" className="box box-3" data-text="Cavaleiro" style={{ backgroundImage: "url(https://www.creativeuncut.com/gallery-36/art/plgp-pokemon-riding.jpg)" }}></Link>
                <Link to="/classes/info/detetive" className="box box-4" data-text="Detetive" style={{ backgroundImage: "url(https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/83c97a13-4113-477c-96ce-46ddcd0571e4/width=512,original=false/00051-anything-v4.5-pruned_3756348294.jpeg)" }}></Link>
                <Link to="/classes/info/guia" className="box box-5" data-text="Guia" style={{ backgroundImage: "url(https://cdna.artstation.com/p/assets/images/images/046/920/432/large/ryoha-kosako-.jpg?1646306675)" }}></Link>
            
                <Link to="/classes/info/oficial" className="box box-6" data-text="Oficial" style={{ backgroundImage: "url(https://i.ytimg.com/vi/doG_XmmbrgY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfunc3L5KpLwn4VjClPuTzfo9New)" }}></Link>
                <Link to="/classes/info/pactuario" className="box box-7" data-text="Pactuário" style={{ backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGB0ec8jowlRwg5E_hucr0thI5s8sWug5Xqw8AQ07CT20juvgtfQl2nZO2eaxm8hf4DaVVUwP0AnvZFxEq7e6ozK_t1EsgkqJ65aD2itb-sL8LOqro-N7afjct5yW_fTPaCdYOCaWGcm8/s610/Pokemon_Ranger_Guardian_Signs_Deoxys.png)" }}></Link>
                <Link to="/classes/info/policial" className="box box-8" data-text="Policial" style={{ backgroundImage: "url(https://cdn.donmai.us/original/97/ed/97edb34ff227caf81b2cde8629e39416.jpg)" }}></Link>
            </div>
        </>
    );
}

export default RangerPage;
