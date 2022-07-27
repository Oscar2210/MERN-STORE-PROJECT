//Componente para mostrar informacion de la 
// tabla de usuarios creados

import React from 'react';
import { request } from '../helper/helper';
import { Container, Row } from 'react-bootstrap';
import './empleados.css';

export default class EmpleadosBuscar extends React.Component {
    //_isMounted = false;
    constructor(props) {
        super(props);
        this.state = { };
    }

componentDidMount() {
    //this._isMounted = true;
    request 
    .get('/empleados')
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.error(err);
    });
}

    render() {
        return(
            <Container id="empleados-buscar-container">
                <Row>
                    <h2>SEARCH EMPLOYED</h2>
                </Row>
            </Container>
        );
    }
} 
