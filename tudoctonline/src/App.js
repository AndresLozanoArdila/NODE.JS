import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/auth/login';
import LoginMedico from './paginas/auth/loginMedico';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Home from './paginas/home';
import HomeMedico from './paginas/homeMedico';
import CitasAdmin from './paginas/GestionDeCitas/CitasAdmin';
import CitasCrear from './paginas/GestionDeCitas/CitasCrear';
import CitasEditar from './paginas/GestionDeCitas/CitasEditar';
import CitasDisponibles from './paginas/GestionDeCitas/CitasDisponibles';
import CitasAgendadas from './paginas/GestionDeCitas/CitasAgendadas';
import CitasAgendadasM from './paginas/GestionDeCitas/CitasAgendadasM';




/*import logo from './logo.svg';
import './App.css';*/

function App() {
  return (
    <Fragment>
      
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/> 
          <Route path="/LoginMedico" exact element={<LoginMedico/>}/> 
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/HomeMedico" exact element={<HomeMedico/>}/>
          <Route path="/CitasAdmin" exact element={<CitasAdmin/>}/>
          <Route path="/CitasCrear" exact element={<CitasCrear/>}/>
          <Route path="/CitasEditar/:idCitas" element={<CitasEditar />} />
          <Route path="/CitasDisponibles" exact element={<CitasDisponibles/>}/>
          <Route path="/CitasAgendadas" exact element={<CitasAgendadas/>}/>
          <Route path="/CitasAgendadasM" exact element={<CitasAgendadasM/>}/>
        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;