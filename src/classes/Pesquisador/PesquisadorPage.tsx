import { Link } from "react-router";
import MenuPage from "../../menu/menuPage";
const PesquisadorPage = () => {
    return (
        <>
           <MenuPage name="Classes Pesquisador"/>
            <div className="container">
                <Link to="/classes/info/pesquisador" className="box box-1" data-text="Pesquisador" style={{ backgroundImage: "url(https://pbs.twimg.com/media/EZgDabhXsAATM2J.jpg:large)" }}></Link>
                <Link to="/classes/info/cientista" className="box box-2" data-text="Cientista" style={{ backgroundImage: "url(https://i.pinimg.com/736x/7e/45/7b/7e457bb119c829892fc82743d7c760b0.jpg)" }}></Link>
                <Link to="/classes/info/fotografo" className="box box-3" data-text="Fotógrafo" style={{ backgroundImage: "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7GHUJXmID8rGRtLYXZb3NH9zGLEcbjmh72PkhK3GMUZY9R0_OYpooARnr7Ufh57gkNMTDQcXckDlm-_NcZsNow0-jGtMW_WctPfCbaXuxxs0fGp0L_GdGtYBg953kAyzdMq9fyZMY-Vc/s1600/184996-todd_snap.png)" }}></Link>
                <Link to="/classes/info/hipnologo" className="box box-4" data-text="Hipnólogo" style={{ backgroundImage: "url(https://images5.fanpop.com/image/photos/26600000/Professor-Fennel-Curtsy-pokemon-26622446-585-950.jpg)" }}></Link>
                <Link to="/classes/info/observador" className="box box-5" data-text="Observador" style={{ backgroundImage: "url(https://cdn.donmai.us/original/54/82/5482c14da910605f9fcb8bf61a93172c.jpg)" }}></Link>
            
                <Link to="/classes/info/ocultista" className="box box-6" data-text="Ocultista" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVhOnEymxXPnn9qJ660NhBhYDCb7ESiuE_g&s)" }}></Link>
                <Link to="/classes/info/petrologista" className="box box-7" data-text="Petrologista" style={{ backgroundImage: "url(https://i.pinimg.com/736x/2b/c9/7e/2bc97ef2b52a8944d0ed642964bba256.jpg)" }}></Link>
                <Link to="/classes/info/professor" className="box box-8" data-text="Professor" style={{ backgroundImage: "url(https://imgix.ranker.com/user_node_img/3683/73645741/original/73645741-photo-u2065045985?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355)" }}></Link>
            </div>
        </>
    );
}

export default PesquisadorPage;
