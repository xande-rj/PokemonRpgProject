import {  useState } from 'react';
import './mypokemon.css';

interface PokemonData {
  pokemons: {
    [key: string]: {
      name: string;
      nickname: string;
      id: number;
      image: string;
      hp: number;
      ataque: number;
      defesa: number;
      spAtaque: number;
      spDefesa: number;
      velocidade: number;
      bonusElement: number;
      level: number;
      exp: number;
      type: string[];
      habilidade: {
        nome: string;
        frequencia: string;
        efeito: string;
      };
      ataques: {
        skill: string;
        cd: string;
        type: string;
        dano: string;
        frequencia: string;
        efeito?: string;

      }[];
    };
  };
}

interface Attack {
  skill: string;
  cd: string;
  type: string;
  dano: string;
  frequencia: string;
}

const PokemonComponent = ({ data }: { data: PokemonData }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('1');
  const [viewMode, setViewMode] = useState<'info' | 'attacks'>('info');
  

  const pokemon = data.pokemons[selectedPokemonId];
  const pokemonList = Object.values(data.pokemons);
const [currentHP, setCurrentHP] = useState((pokemon.hp + pokemon.level) * 4);
  
  const handleCopyCommandDano = (attack: Attack) => {
    let danoFormatado = attack.dano;

    // Substituir Fisico pelo ataque físico
    if (danoFormatado.includes('+Fisico')) {
      danoFormatado = danoFormatado.replace('+Fisico', `+${pokemon.ataque}`);
    }
    // Substituir spAtaque pelo ataque especial
    else if (danoFormatado.includes('+spAtaque')) {
      danoFormatado = danoFormatado.replace('+spAtaque', `+${pokemon.spAtaque}`);
    }

    const command = `${danoFormatado}`;

    navigator.clipboard.writeText(command)
      .then(() => alert('Comando copiado!'))
      .catch(() => alert('Erro ao copiar'));
  };
  const handleCopyCommandCD = () => {

    const command = `1d20`;

    navigator.clipboard.writeText(command)
      .then(() => alert('Comando copiado!'))
      .catch(() => alert('Erro ao copiar'));
  };


  const handleDanoFisico = () => {
    const dano = Number(prompt('Digite o valor do dano físico:'));
    if (isNaN(dano)) return; // Se não for número, sai

    const defesaOriginal = pokemon.defesa;
    // Calcula a diferença entre o dano e a defesa
    const diferenca = dano - defesaOriginal;
    
    // Se o dano for menor ou igual à defesa, perde 1 ponto de HP
    // Caso contrário, perde a diferença
    let novoHP;
    if (diferenca <= 0) {
      novoHP = currentHP - 1;
    } else {
      novoHP = currentHP - diferenca;
    }
    
    // Evita que o HP fique negativo
    if (novoHP < 0) novoHP = 0;
    
    setCurrentHP(novoHP);
  };

  return (
    <div className="containerpok">
      <div className="main-content">
        <div className="pokemon-card">
          <div className="header">
            <h2>{pokemon.nickname}</h2>
            <span className="id">LV : {pokemon.level}</span>

          </div>

          <img src={pokemon.image} alt={pokemon.name} className="main-image" />

          <div className="navigation">
            <button
              onClick={() => setViewMode('info')}
              className={viewMode === 'info' ? 'active' : ''}
            >
              Informações
            </button>
            <button
              onClick={() => setViewMode('attacks')}
              className={viewMode === 'attacks' ? 'active' : ''}
            >
              Ataques
            </button>
          </div>

          {viewMode === 'info' ? (
            <div className="info-section">
              <div className="stats">
                <div className="stat-item">
                  <span>HP</span>
                  <h3>{currentHP}</h3>
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{ width: `${currentHP}%` }} // ou outro cálculo para a barra
                    ></div>
                  </div>
                  <div>
            {/* Botão para dano físico */}
            <button onClick={handleDanoFisico}>Dano Físico</button>
          </div>
          <div>
            {/* Botão para dano especial */}
            {/* <button onClick={handleDanoEspecial}>Dano Especial</button> */}
          </div>
                </div>
                <div className="stat-row">
                  <div className="stat">
                    <span>Ataque</span>
                    <strong>{pokemon.ataque || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>Defesa</span>
                    <strong>{pokemon.defesa || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>spAtaque</span>
                    <strong>{pokemon.spAtaque || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>spDefesa</span>
                    <strong>{pokemon.spDefesa || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>velocidade</span>
                    <strong>{pokemon.velocidade || 'N/A'}</strong>
                  </div>


                </div>
                <div className="stat">
                  <span>Type</span>
                  <div className="type">
                    {pokemon.type?.map((type) => (
                      <span key={type}>{type}</span>
                    ))}
                  </div>
                </div>
                {/* Adicionar mais stats conforme necessário */}
              </div>
              <div className="stat" style={{
                marginTop: '30px', border: '#48bb78 1px solid', padding: '10px'

              }}>
                <span>Habilidade</span>
                <div>
                  <span>{pokemon.habilidade.nome}</span>
                  <span>{pokemon.habilidade.frequencia}</span>
                  <span>{pokemon.habilidade.efeito}</span>
                </div>
              </div>
            </div>

          ) : (
            <div className="attacks-section">
              <button
                onClick={() => handleCopyCommandCD()}
                className="copy-button"
              >
                D20
              </button>

              {pokemon.ataques?.map((attack, index) => (
                <div key={index} className="attack-card">
                  <div className="attack-header">
                    <div>
                      <h4>{attack.skill}</h4>

                    </div>
                    <button
                      onClick={() => handleCopyCommandDano(attack)}
                      className="copy-button"
                    >
                      Copiar
                    </button>
                  </div>
                  <div className="attack-info">
                    <span>Tipo: {attack.type}</span>
                    <span>Dano: {attack.dano}</span>
                    <span>CD: {attack.cd}</span>
                    <span>Freq: {attack.frequencia}</span>
                    {attack.efeito && <p className="effect">{attack.efeito}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pokemon-list">
        <h3>Selecionar Pokémon</h3>
        {pokemonList.map((p) => (
          <div
            key={p.id}
            className={`list-item ${selectedPokemonId === p.id.toString() ? 'selected' : ''}`}
            onClick={() => setSelectedPokemonId(p.id.toString())}
          >
            <img src={p.image} alt={p.name} className="thumb" />
            <div className="list-info">
              <span >{p.nickname}</span>
              <small>Lv: {p.level || 5}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;