import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../login/login';
import PrivateRoute from '../auth/privateroute';
import EmpleadosBuscar from '../empleados/empleados.buscar';


export default function AppRouter() {
  return(
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login}/>
        <PrivateRoute exact path={["/empleados"]} component={ EmpleadosBuscar }/>

        <Route 
        path={'*'} //el asterico sirve para definir error al momento de ingresar cualquier pagina que no exista
        component={() => (
          <h2 style={{ marginTop: 300 }}>
            404
            <br/> N o t  F o u n d
          </h2>
        )} />
      </Switch>
    </Router>
  )
}
/*
function Home() {
  return(
    <div>
      <h2>Welcome Home</h2>
    </div>
  )
} */