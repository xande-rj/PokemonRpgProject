import React from 'react';
import './TemplatePage.css';

const Artistainfo = () => {
    return (
        <div className="template-container">
      <div className="image-section" style={{ backgroundImage: `url(${data.imageUrl})` }}></div>
      <div className="text-section">
        <p><strong>Requisitos:</strong> {data.requisitos}</p>
        <p>{data.descricao}</p>
        <p><strong>Perícias de Classe:</strong> {data.periciasClasse.join(', ')}</p>
        <h3>Talentos</h3>
        <div className="talents">
          {data.talentos.map((talento, index) => (
            <div key={index} className="talent">
              <p><strong>{talento.nome}</strong></p>
              <p>{talento.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default Artistainfo;
