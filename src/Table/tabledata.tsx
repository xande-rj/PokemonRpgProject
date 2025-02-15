import { useEffect, useState } from 'react';
import './tabledata.css'
// Componente Tabledata
const Tabledata = () => {
  const [data, setData] = useState<any>({ berrie: [] });
  const [loading, setLoading] = useState<boolean>(true);  // Estado de carregamento
  const [searchTerm, setSearchTerm] = useState<string>('');  // Estado para armazenar a pesquisa
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null); // Estado para controle de ordenação

  useEffect(() => {
    fetch('./berrie.json', {
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
  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc"; // Alterna entre ascendente e descendente
    setSortOrder(newOrder); // Atualiza o estado de ordenação

    // Ordena os dados com base no novo estado
    const sortedData = [...data.berrie].sort((a: any, b: any) => {
        const priceA = parseFloat(a.preco);
        const priceB = parseFloat(b.preco);

        return newOrder === "asc" ? priceA - priceB : priceB - priceA;
    });

    setData({ ...data, berrie: sortedData }); // Atualiza os dados ordenados
};

  // Função para filtrar as frutas com base na pesquisa
  const filteredData = data.berrie.filter((item: any) =>
    item.Fruto.toLowerCase().includes(searchTerm.toLowerCase())  // Filtra pela fruta (ignorando maiúsculas/minúsculas)
  );

  return (
    <>
    
      {/* Campo de pesquisa */}
      <div>
        <input
        type="text"
        placeholder="Pesquisar por fruta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        id='nome fruta' // Atualiza o estado da pesquisa
      />
      </div>
      

      {/* Tabela filtrada */}
      <div className="table_component" role="region" >
      <table>
        <thead>
          <tr>
          <th onClick={handleSort} style={{ cursor: "pointer" }}>
                                Preço {sortOrder === "asc" ? "▲" : sortOrder === "desc" ? "▼" : ""}
                            </th>
            <th>Fruto</th>
            <th>Fruta Real</th>
            <th>Amarga</th>
            <th>Azeda</th>
            <th>Doce</th>
            <th>Picante</th>
            <th>Seca</th>
            <th>Consumo</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.preco}</td>
              <td>{item.Fruto}</td>
              <td>{item.FrutaReal}</td>
              <td>{item.Amarga}</td>
              <td>{item.Azeda}</td>
              <td>{item.Doce}</td>
              <td>{item.Picante}</td>
              <td>{item.Seca}</td>
              <td>{item.Consumo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Tabledata;
