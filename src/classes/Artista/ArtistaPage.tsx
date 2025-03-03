import { Link } from "react-router";
import MenuPage from "../../menu/menuPage";

const ArtistaPage = () => {
    return (
        <>
            <MenuPage name="Classes Artista" />
            <div className="container">
                <Link to="/classes/info/artista"  className="box box-1" data-text="Artista" style={{ backgroundImage: "url(https://i.pinimg.com/736x/93/31/ae/9331ae7c13f6e41d3d31dd757c7ea456.jpg)" }}></Link>  
                <Link to="/classes/info/beldade" className="box box-2" data-text="Beldade" style={{ backgroundImage: "url(https://thicc-uwu.mywaifulist.moe/waifus/elesa-pokemon/YJSUay1nmL3mM0BEUltXWf9LgeJQKksCCFdw3MZr.webp?class=thumbnail)" }}></Link>
                <Link to="/classes/info/cativante" className="box box-3" data-text="Cativante" style={{ backgroundImage: "url(https://cdn.donmai.us/sample/bf/68/__squirtle_and_green_pokemon_and_1_more_drawn_by_rainys_bill__sample-bf689499cc8a5ec9ae9440fdeafb093e.jpg)" }}></Link>
                <Link to="/classes/info/coreógrafo" className="box box-4" data-text="Coreógrafo" style={{ backgroundImage: "url(https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c4697ff2-2e6c-436a-bce6-68faedd35f26/width=450/2144056.jpeg)" }}></Link>
                <Link to="/classes/info/descolado" className="box box-5" data-text="Descolado" style={{ backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c16901c-5cf2-427d-bda3-079d0b96a23d/dgfq9fb-2f7e7059-7062-4e2d-a760-07bc855d88da.jpg/v1/fit/w_828,h_1340,q_70,strp/pokemon___diantha_by_vivivoovoo_dgfq9fb-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzNjMTY5MDFjLTVjZjItNDI3ZC1iZGEzLTA3OWQwYjk2YTIzZFwvZGdmcTlmYi0yZjdlNzA1OS03MDYyLTRlMmQtYTc2MC0wN2JjODU1ZDg4ZGEuanBnIiwid2lkdGgiOiI8PTk4OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kSusDaoocVM5Ikfvtdox38bzxYTAj6k49mxBQQIkVsA)" }}></Link>
                <Link to="/classes/info/estilista" className="box box-6" data-text="Estilista" style={{ backgroundImage: "url(https://cdn.donmai.us/original/95/97/95970f30cbf59624e41d2aafe657c9b2.jpg)" }}></Link>
                <Link to="/classes/info/nerd" className="box box-7" data-text="Nerd" style={{ backgroundImage: "url(https://safebooru.org//images/4031/49fb10a884acfa7a8261353c8c59bd9d2e1b3268.png?4211829)" }}></Link>
                <Link to="/classes/info/parrudo" className="box box-8" data-text="Parrudo" style={{ backgroundImage: "url(https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg5ec6bcedac7db5.86656041.png%3FlastEdited%3D1590082815&w=400&h=400&f=webp)" }}></Link>
            </div>
            
        </>
    );
}

export default ArtistaPage;
