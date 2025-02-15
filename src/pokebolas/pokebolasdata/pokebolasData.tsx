import { useEffect, useState } from "react";
const PokebolasData = () => {
    const [data, setData] = useState<any>({ berrie: [] });
    const [loading, setLoading] = useState<boolean>(true);  // Estado de carregamento
    const [searchTerm, setSearchTerm] = useState<string>('');  // Estado para armazenar a pesquisa

    useEffect(() => {
        fetch('./pokebolas.json', {
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);  // Atualiza o estado com os dados carregados
                setLoading(false);  // Finaliza o carregamento
            })
            .catch((error) => {
                console.error('Erro ao carregar os dados:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando dados...</p>; // Exibe uma mensagem de carregamento
    }

    // Função para filtrar as frutas com base na pesquisa
    const filteredData = data.pokebolas.filter((item: any) =>
        item.Pokébola.toLowerCase().includes(searchTerm.toLowerCase())  // Filtra pela fruta (ignorando maiúsculas/minúsculas)
    );
    return (
        <>
         {/* Campo de pesquisa */}
         <div>
                <input
                    type="text"
                    placeholder="Pesquisar por Natureza..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    id="nome nature" // Atualiza o estado da pesquisa
                />
            </div>


            {/* Tabela filtrada */}
            <div className="table_component" role="region" >
                <table>
                    <thead>
                        <tr>
                            <th>Pokébola</th>
                            <th>Preço</th>
                            <th>Modificador</th>
                            <th>Efeitos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item: any, index: number) => (
                            <tr key={index}>
                                <td>{item.Pokébola}</td>
                                <td>{item.Preço}</td>
                                <td>{item.Modificador}</td>
                                <td>{item.Efeitos}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PokebolasData;
