import { useState, useEffect } from 'react';
import './mypokemon.css';

import { PokemonData } from '../pokemonDataInterface';
import { Attack } from '../pokemonDataInterface';

const PokemonComponent = ({ data }: { data: PokemonData }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('1');
  const [viewMode, setViewMode] = useState<'info' | 'attacks'>('info');

  // Cria um objeto com os HPs iniciais de cada Pokémon
  const initialHPValues = Object.keys(data.pokemons).reduce((acc, id) => {
    const p = data.pokemons[id];
    acc[id] = (p.hp + p.level) * 4;
    return acc;
  }, {} as { [key: string]: number });

  const [hpValues, setHpValues] = useState<{ [key: string]: number }>(() => {
    const savedHpValues = localStorage.getItem('pokemonHpValues');
    return savedHpValues ? JSON.parse(savedHpValues) : initialHPValues;
  });
  useEffect(() => {
    localStorage.setItem('pokemonHpValues', JSON.stringify(hpValues));
  }, [hpValues]);

  // Obtenha o Pokémon selecionado
  const pokemon = data.pokemons[selectedPokemonId];

  // Função para copiar comandos de dano dos ataques
  const handleCopyCommandDano = (attack: Attack) => {
    let danoFormatado = attack.dano;

    if (danoFormatado.includes('+Fisico')) {
      danoFormatado = danoFormatado.replace('+Fisico', `+${pokemon.ataque}`);
    } else if (danoFormatado.includes('+spAtaque')) {
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

  // Função que aplica dano físico apenas ao Pokémon selecionado
  const handleDanoFisico = () => {
    const dano = Number(prompt('Digite o valor do dano Físico:'));
    if (isNaN(dano)) return; // Se não for número, sai

    const defesaOriginal = pokemon.defesa;
    const diferenca = dano - defesaOriginal;

    // Se o dano for menor ou igual à defesa, perde 1 ponto de HP; caso contrário, perde a diferença
    let novoHP: number;
    if (diferenca <= 0) {
      novoHP = hpValues[selectedPokemonId] - 1;
    } else {
      novoHP = hpValues[selectedPokemonId] - diferenca;
    }

    if (novoHP < 0) novoHP = 0;

    // Atualiza o HP apenas para o Pokémon selecionado
    setHpValues((prev) => ({ ...prev, [selectedPokemonId]: novoHP }));
  };
  const handleDanoEspecial = () => {
    const dano = Number(prompt('Digite o valor do dano Especial:'));
    if (isNaN(dano)) return; // Se não for número, sai

    const defesaOriginal = pokemon.spDefesa;
    const diferenca = dano - defesaOriginal;

    // Se o dano for menor ou igual à defesa, perde 1 ponto de HP; caso contrário, perde a diferença
    let novoHP: number;
    if (diferenca <= 0) {
      novoHP = hpValues[selectedPokemonId] - 1;
    } else {
      novoHP = hpValues[selectedPokemonId] - diferenca;
    }

    if (novoHP < 0) novoHP = 0;

    // Atualiza o HP apenas para o Pokémon selecionado
    setHpValues((prev) => ({ ...prev, [selectedPokemonId]: novoHP }));
  };

  const handleRecuperarHPPokemon = (id: string) => {
    setHpValues((prev) => ({
      ...prev,
      [id]: initialHPValues[id],
    }));

    const updatedHpValues = { ...hpValues, [id]: initialHPValues[id] };
    localStorage.setItem('pokemonHpValues', JSON.stringify(updatedHpValues));
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
              <div>
                <button onClick={() =>handleRecuperarHPPokemon(selectedPokemonId)}>
                  Recuperar HP deste Pokémon
                </button>
              </div>
                <div className="stat-item">
                  <span>HP</span>
                  <h3>{hpValues[selectedPokemonId]}</h3>
                  <div className="stat-bar">
                    <div
                      className="stat-fill"
                      style={{ width: `${hpValues[selectedPokemonId]}%` }}
                    ></div>
                  </div>
                  <div>
                    <button onClick={handleDanoFisico}>Dano Físico</button>
                  </div>
                  <div>
                    <button onClick={handleDanoEspecial}>Dano Especial</button>
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
                    <span>Velocidade</span>
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
              </div>
              <div className="stat" style={{
                marginTop: '30px',
                border: '#48bb78 1px solid',
                padding: '10px'
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
                onClick={handleCopyCommandCD}
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
        <h3 style={{ color: 'black' }}>Selecionar Pokémon</h3>
        {Object.values(data.pokemons).map((p) => (
          <div
            key={p.id}
            className={`list-item ${selectedPokemonId === p.id.toString() ? 'selected' : ''}`}
            onClick={() => setSelectedPokemonId(p.id.toString())}
          >
            <img src={p.image} alt={p.name} className="thumb" />
            <div className="list-info">
              <span>{p.nickname}</span>
              <small>Lv: {p.level || 5}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;
