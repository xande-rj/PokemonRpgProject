import { useState, useEffect } from "react";
import "./classdata.css";
import { Link } from "react-router";

const Classedata = () => {
    // Exemplo de dados JSON com URLs diferentes para cada card
    const [cardsData, setcardsData] = useState<any>({ classes: [] });

    useEffect(() => {
        fetch('./classes.json', {
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setcardsData(data);  // Atualiza o estado com os dados carregados
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
            });
    }, []);

    return (
        <div className="class">
            {cardsData.classes.map((item: any, index: number) => (
                <Link to={item.nome} key={index}>
                <div className="card" >
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,

                        }}
                    ></div>
                    <div className="text"
                    >
                        <p className="h3"style={{
                            color: `${ item.bg }`,
                        }}>{item.nome}</p>
                        <p className="p">{item.descrição}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default Classedata;
