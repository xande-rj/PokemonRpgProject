export interface PokemonData {
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
            habilidade:{
                nome:string;
                frequencia:string;
                efeito:string;
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

export interface Attack {
    skill: string;
    cd: string;
    type: string;
    dano: string;
    frequencia: string;
  }