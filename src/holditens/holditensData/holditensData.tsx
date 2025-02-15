import { useEffect, useState } from "react";

const HoldItensData = () => {
    const [data, setData] = useState<any>({ HoldItens: [] });
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
    const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para armazenar a pesquisa
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null); // Estado para controle de ordenação

    useEffect(() => {
        fetch("./holditens.json", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data); // Atualiza o estado com os dados carregados
                setLoading(false); // Finaliza o carregamento
            })
            .catch((error) => {
                console.error("Erro ao carregar os dados:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando dados...</p>; // Exibe uma mensagem de carregamento
    }

    // Função para ordenar os itens com base no preço
    const handleSort = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc"; // Alterna entre ascendente e descendente
        setSortOrder(newOrder); // Atualiza o estado de ordenação

        // Ordena os dados com base no novo estado
        const sortedData = [...data.HoldItens].sort((a: any, b: any) => {
            const priceA = parseFloat(a.Preço);
            const priceB = parseFloat(b.Preço);

            return newOrder === "asc" ? priceA - priceB : priceB - priceA;
        });

        setData({ ...data, HoldItens: sortedData }); // Atualiza os dados ordenados
    };

    // Filtra os itens com base no termo de pesquisa
    const filteredData = data.HoldItens.filter((item: any) =>
        item.Nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Campo de pesquisa */}
            <div>
                <input
                    type="text"
                    placeholder="Pesquisar por Natureza..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado da pesquisa
                    id="nome-nature"
                />
            </div>

            {/* Tabela filtrada */}
            <div className="table_component" role="region">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th onClick={handleSort} style={{ cursor: "pointer" }}>
                                Preço {sortOrder === "asc" ? "▲" : sortOrder === "desc" ? "▼" : ""}
                            </th>
                            <th>Frequência</th>
                            <th>Efeitos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item: any, index: number) => (
                            <tr key={index}>
                                <td>{item.Nome}</td>
                                <td>{item.Preço}</td>
                                <td>{item.Frequência}</td>
                                <td>{item.Efeito}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default HoldItensData;
