import { useState, useEffect } from 'react';
import './mypokemon.css';

import { PokemonData } from '../pokemonDataInterface';
import { Attack } from '../pokemonDataInterface';

const PokemonComponent = ({ data }: { data: PokemonData }) => {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('1');
  const [viewMode, setViewMode] = useState<'info' | 'attacks'>('info');

    // xp inicial de cada pokemon
    const initialExpData = Object.keys(data.pokemons).reduce((acc, id) => {
      const p = data.pokemons[id];
      acc[id] = { xp: 0, level: p.level || 1 };
      return acc;
    }, {} as { [key: string]: { xp: number; level: number } });
    
  // salva xp no localstorage
  const [expData, setExpData] = useState<{ [key: string]: { xp: number; level: number } }>(() => {
    const saved = localStorage.getItem('pokemonExpData');
    return saved ? JSON.parse(saved) : initialExpData;
  });
  
   // Cria um objeto com os HPs iniciais de cada Pokémon
   const initialHPValues = Object.keys(data.pokemons).reduce((acc, id) => {
    const p = data.pokemons[id];
    acc[id] = (p.hp + expData[selectedPokemonId]?.level) * 4;
    return acc;
  }, {} as { [key: string]: number });

  // salva o hp no localstorage
  const [hpValues, setHpValues] = useState<{ [key: string]: number }>(() => {
    const savedHpValues = localStorage.getItem('pokemonHpValues');
    return savedHpValues ? JSON.parse(savedHpValues) : initialHPValues;
  });

  const [pokemonStats, setPokemonStats] = useState<{ [key: string]: any }>(() => {
    const savedStats = localStorage.getItem('pokemonStats');
    return savedStats ? JSON.parse(savedStats) : data.pokemons;
  });

  // Atualiza o localStorage sempre que pokemonStats mudar.
  useEffect(() => {
    localStorage.setItem('pokemonStats', JSON.stringify(pokemonStats));
  }, [pokemonStats]);
  // xp necessario para subir de nivel
  const xpRequirements: { [level: number]: number } = {
    1: 25,   // Para sair do nível 1, precisa de 25 XP
    2: 50,   // Para sair do nível 2, precisa de 50 XP
    3: 100,  // Para sair do nível 3, precisa de 100 XP
    4: 150,
    5: 200,
    6: 400,
    7: 600,
    8: 800,
    9: 1000,
    10: 1500,
    11: 2000,
    12: 3000,
    13: 4000,
    14: 5000,
    15: 6000,
    16: 7000,
    17: 8000,
    18: 9000,
    19: 10000,
    20: 11500,
    21: 13000,
    22: 14500,
    23: 16000,
    24: 17500,
    25: 19000,
    26: 20500,
    27: 22000,
    28: 23500,
    29: 25000,
    30: 27500,
    31: 30000,
    32: 32500,
    // O nível 20 pode ser considerado o máximo
  };





  // Atualiza o localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem('pokemonExpData', JSON.stringify(expData));
  }, [expData]);

  // Adiciona experiência ao Pokémon selecionado
  const handleAddExp = () => {
    const expToAdd = Number(prompt('Digite quantos pontos de experiência adicionar:'));
    if (isNaN(expToAdd)) return;

    setExpData((prev) => {
      const current = prev[selectedPokemonId] || { xp: 0, level: 1 };
      const xpNeeded = xpRequirements[current.level] || Infinity;
      let newXp = current.xp + expToAdd;
      let newLevel = current.level;

      if (newXp >= xpNeeded) {
        // Ao atingir o XP necessário, solicita ao usuário que escolha um atributo para upgrade.
        const choice = prompt(
          "Level Up! Escolha um atributo para aumentar:\n" +
          "1: HP\n2: Ataque\n3: Defesa\n4: spAtaque\n5: spDefesa\n6: Velocidade"
        );
        let attributeKey = "";
        switch (choice) {
          case "1":
            attributeKey = "hp";
            break;
          case "2":
            attributeKey = "ataque";
            break;
          case "3":
            attributeKey = "defesa";
            break;
          case "4":
            attributeKey = "spAtaque";
            break;
          case "5":
            attributeKey = "spDefesa";
            break;
          case "6":
            attributeKey = "velocidade";
            break;
          default:
            alert("Escolha inválida! Nenhum atributo foi aumentado.");
            break;
        }
        console.log(attributeKey);
        if (attributeKey !== "") {
          // Atualiza o atributo escolhido para o Pokémon selecionado.
          setPokemonStats((prevStats) => {
            const currentStats = prevStats[selectedPokemonId];
            return {
              ...prevStats,
              [selectedPokemonId]: {
                ...currentStats,
                [attributeKey]: currentStats[attributeKey] + 1,
              },
            };
          });
        }

        // Sobe de nível e reseta a experiência
        newLevel = current.level + 1;
        newXp = 0;
      }

      return { ...prev, [selectedPokemonId]: { xp: newXp, level: newLevel } };
    });
  };

  const pokemonStatus = pokemonStats[selectedPokemonId];

  const currentExpInfo = expData[selectedPokemonId] || { xp: 0, level: 1 };
  const xpNeeded = xpRequirements[currentExpInfo.level] || Infinity;
  const expProgress = (currentExpInfo.xp / xpNeeded) * 100;

 


  // recupera o hp do localstorage
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

  // copia o comando d20
  const CopyCommandCD = () => {
    const command = `1d20`;
    navigator.clipboard.writeText(command)
      .then(() => alert('Comando copiado!'))
      .catch(() => alert('Erro ao copiar'));
  };

  // Função que aplica dano físico e especial apenas ao Pokémon selecionado
  const DanoFisico = () => {
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

  const DanoEspecial = () => {
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

  // recupera totalmente o hp do pokemon
  const RecuperarHPPokemon = (id: string) => {
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
            <span className="id">Lv: {expData[selectedPokemonId]?.level}</span>
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
                  <button onClick={() => RecuperarHPPokemon(selectedPokemonId)}>
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
                    <button onClick={DanoFisico}>Dano Físico</button>
                  </div>
                  <div>
                    <button onClick={DanoEspecial}>Dano Especial</button>
                  </div>
                </div>
                {/* Seção de Experiência */}
                <div className="exp-section" style={{ marginTop: '20px', color: 'black' }}>
                  <h4>Experiência</h4>
                  <p>
                    {currentExpInfo.xp} / {xpNeeded} pontos
                    <br />
                    Progresso: {expProgress.toFixed(2)}%
                  </p>
                  <div className="exp-bar" style={{ background: '#ddd', height: '20px', width: '100%' }}>
                    <div
                      className="exp-fill"
                      style={{
                        background: '#48bb78',
                        height: '100%',
                        width: `${expProgress}%`,
                      }}
                    ></div>
                  </div>
                  <button onClick={handleAddExp}>Adicionar Experiência</button>
                </div>
                <div className="stat-row">
                  <div className="stat">
                    <span>HP</span>
                    <strong>{pokemonStatus.hp || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>Ataque</span>
                    <strong>{pokemonStatus.ataque || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>Defesa</span>
                    <strong>{pokemonStatus.defesa || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>spAtaque</span>
                    <strong>{pokemonStatus.spAtaque || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>spDefesa</span>
                    <strong>{pokemonStatus.spDefesa || 'N/A'}</strong>
                  </div>
                  <div className="stat">
                    <span>Velocidade</span>
                    <strong>{pokemonStatus.velocidade || 'N/A'}</strong>
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
                onClick={CopyCommandCD}
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
              <small>Lv: {expData[p.id]?.level}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonComponent;
