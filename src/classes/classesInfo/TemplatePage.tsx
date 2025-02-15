import { Link, Outlet } from 'react-router';
import Navbar from '../../navbar/navbar';
import './TemplatePage.css';

const templatePage = ({ data }:any) => {
  return (
    <>
    <div className='menu'>
                <Navbar />
                <Outlet />
            </div>
            <div>
            <Link to='/'>
          <img src='https://www.freeiconspng.com/uploads/pokeball-pokemon-ball-png-images-4.png' className="logo react" alt="poke logo" />
        </Link>
            </div>
            <h1>Classe {data.nome}</h1>
            
    <div className="template-container">
      <div className="image-section" style={{ backgroundImage: `url(${data.imageUrl})` }}></div>
      <div className="text-section">
        <p><strong>Requisitos:</strong> {data.requisitos}</p>
        {data.multi? <p><strong>Requisitos MultiClasse:</strong> {data.multi}</p> : null}
        {data.descricao? <p><strong>Descrição:</strong> {data.descricao}</p> : null}
        <p><strong>Perícias de Classe:</strong> {data.periciasClasse.join(', ')}</p>
        <h3>Talentos</h3>
        <div className="talents">
          {data.talentos.map((talento:any, index:any) => (
            <div key={index} className="talent">
              <p><strong>{talento.nome}</strong></p>
              <p><strong>Frequência: {talento.frequencia}</strong></p>
              <p>{talento.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default templatePage;
