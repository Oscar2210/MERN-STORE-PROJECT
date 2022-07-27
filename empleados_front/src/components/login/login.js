import React from "react";
import axios from 'axios';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { APIHOST as host } from '../../app.json'
import './login.css';
import { isNull } from 'util';
import Cookies from 'universal-cookie';
import { calculaExpiracionSesion } from '../helper/helper'
import Loading from '../loading/loading';

const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      usuario: '', 
      pass: '', };
  }
iniciarSesion() {

  this.setState({ loading: true});
  
  axios.post(`${host}/usuario/login`, {
    usuario: this.state.usuario,
    pass: this.state.pass,
  })
  .then((response) => {
    if( isNull(response.data.token)) {
      alert('Usuario y/o contraseña incorrecta');      
    } 
    else {
      cookies.set('_s', response.data.token, {
        path: '/',
        expires: calculaExpiracionSesion(), 
      });

      this.props.history.push('/empleados'); // para cuando exista usuario y pass valido lleve a la vista empleados

    }
    this.setState({ loading: false});
  })
  .catch((err) => {
    console.log(err);
    this.setState({ loading: false});
  });

  //alert(`usuario: ${this.state.usuario} - password: ${this.state.password}`) ESTA LINEA NOS SIRVE PARA COMPROBAR LA CAPTURA DE DATOS
}

  render() {
    return (
      <Container id="login-container">
          {/*Importamos el Loading en la parte de arriba
          y lo etiquetamos acá*/}
          <Loading show={this.state.loading}/>

        <Row>
          <Col>
            <Row>
              <h2> Inicie Sesion </h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
              <Form>
                <Form.Group>
                  <Form.Label>User</Form.Label>
                  <Form.Control
                    onChange={(e) => this.setState({ usuario: e.target.value })}
                    type=""
                    placeholder="Enter User"
                  />
                  {/*{this.state.usuario} linea para validar la captura de los datos*/}
                  <Form.Text className="text-muted">
                    We'll never share your credentials with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      this.setState({ pass: e.target.value })
                    }
                    type="password"
                    placeholder="Password"
                  />
                  {/*{this.state.password}*/}
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Check me out"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type=""
                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  L O G I N
                </Button>
              </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
