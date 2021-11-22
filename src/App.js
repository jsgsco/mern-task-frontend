import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import ProyectoState from './context/proyectos/proyectoState'
import TareaState from './context/tareas/tareaState'

export default function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Routes>
            <Route exact path="/" element={ <Login /> } />
            <Route exact path="/nueva-cuenta" element={ <NuevaCuenta /> } />
            <Route exact path="/proyectos" element={ <Proyectos /> } />
          </Routes>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}