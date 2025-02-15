
import { useParams } from 'react-router';
import TemplatePage from './TemplatePage';
import dataByClass from './classesInfo.json'; // Importa os dados do arquivo JSON

const classeinfo = () => {

  // Captura o parâmetro da URL
  const { className } = useParams<{ className: string }>();

  
  // Busca os dados da classe com base no parâmetro
  const data = dataByClass[className as keyof typeof dataByClass] || null;

  // Renderiza a página com os dados, ou mensagem de erro caso a classe não exista
  return data ? <TemplatePage data={data} /> : <h1>Classe não encontrada</h1>;
};

export default classeinfo;
