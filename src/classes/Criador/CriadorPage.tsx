import { Link } from "react-router";
import MenuPage from "../../menu/menuPage";
const CriadorPage = () => {
    return (
        <>
             <MenuPage name="Classes Criador"/>
            <div className="container">
            <Link to="/classes/info/criador" className="box box-1" data-text="Criador" style={{ backgroundImage: "url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/05/split-images-of-pokemon-adventure-typhlosion-and-raikou-1.jpg)" }}></Link>
            <Link to="/classes/info/botânico" className="box box-2" data-text="Botânico" style={{ backgroundImage: "url(https://e0.pxfuel.com/wallpapers/45/277/desktop-wallpaper-pokemon-aesthetic-shaymin.jpg)" }}></Link>
            <Link to="/classes/info/cozinheiro" className="box box-3" data-text="Cozinheiro" style={{ backgroundImage: "url(https://pbs.twimg.com/profile_images/1622036747755331584/lBxXgJk9_400x400.jpg)" }}></Link>
            <Link to="/classes/info/cuidador" className="box box-4" data-text="Cuidador" style={{ backgroundImage: "url(https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/seasons/season18/season18_ep38_ss01.jpg)" }}></Link>
            <Link to="/classes/info/evolucionista" className="box box-5" data-text="Evolucionista" style={{ backgroundImage: "url(https://comicbook.com/wp-content/uploads/sites/4/2021/09/d2f63521-5537-4e8a-9b83-0f912243fbe9.jpg?w=1024)" }}></Link>

      
        <Link to="/classes/info/incubador" className="box box-6" data-text="Incubador" style={{ backgroundImage: "url(https://i.pinimg.com/736x/0a/55/07/0a5507ca2be1fa9ee32b5088768e4e21.jpg)" }}></Link>
        <Link to="/classes/info/médico" className="box box-7" data-text="Médico" style={{ backgroundImage: "url(https://bracketfights.com/images/templates/2019/99452/pokegirls-99452/doctorftcgpng.png)" }}></Link>
        <Link to="/classes/info/tutor" className="box box-8" data-text="Tutor" style={{ backgroundImage: "url(https://pbs.twimg.com/media/EJBZNxfU8AIf2cb.jpg)" }}></Link>
      </div>
        </>
    );
}

export default CriadorPage;
