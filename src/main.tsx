//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Naturepage from './nature/naturepage.tsx';
import PokebolasPage from './pokebolas/pokebolaspage.tsx';
import { BrowserRouter, Route, Routes } from "react-router";
import MedItens from './meditens/medPage.tsx';
import HoldItens from './holditens/holditensPage.tsx';
import ClassPage from './class/classPage.tsx';

import ArtistaPage from './classes/Artista/ArtistaPage.tsx';
import CaptorPage from './classes/Captor/CaptorPage.tsx';
import Classeinfo from './classes/classesInfo/classeinfo.tsx';
import GuerreiroPage from './classes/Guerreiro/GuerreiroPage.tsx';
import CriadorPage from './classes/Criador/CriadorPage.tsx';
import MísticoPage from './classes/Místico/MísticoPage.tsx';
import PesquisadorPage from './classes/Pesquisador/PesquisadorPage.tsx';
import PsíquicoPage from './classes/Psíquico/PsíquicoPage.tsx';
import RangerPage from './classes/Ranger/RangerPage.tsx';
import TreinadorPage from './classes/Treinador/TreinadorPage.tsx';

import MyPokemons from './my pokemon/mypokemonPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nature" element={<Naturepage/>} />
      <Route path="/pokebolas" element={<PokebolasPage/>} />
      <Route path="/meditens" element={<MedItens/>} />
      <Route path="/holditens" element={<HoldItens/>} />
      <Route path="/classes" element={<ClassPage/>} />
      <Route path="classes/Artista" element={<ArtistaPage/>} />
      <Route path="classes/Captor" element={<CaptorPage/>} />
      <Route path="classes/Criador" element={<CriadorPage/>} />
      <Route path="classes/Guerreiro" element={<GuerreiroPage/>} />
      <Route path="classes/Místico" element={<MísticoPage/>} />
      <Route path="classes/Pesquisador" element={<PesquisadorPage/>} />
      <Route path="classes/Psíquico" element={<PsíquicoPage/>} />
      <Route path="classes/Ranger" element={<RangerPage/>} />
      <Route path="classes/Treinador" element={<TreinadorPage/>} />
      <Route path="classes/info/:className" element={<Classeinfo/>} /> 
      <Route path="/meusPokemons" element={<MyPokemons/>} /> 

    </Routes>
  </BrowserRouter>
)
