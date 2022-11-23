import React, { Component } from 'react';
//import { Link } from "react-router-dom";
//import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 

export default class ConsultarCapacitacion extends Component {
  render() {
    return (
        <center>
        <Card style={{ width: '38rem' }}>
            <Card.Body>
            <Card.Text>
                <h2>Certificados de empleados</h2>
                <p> Ingrese identificacion para buscar sus certificaciones</p>
                
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="idUsuario"> 
                    <h5> <Form.Label>Id Usuario</Form.Label> </h5>
                    <Form.Control 
                        type="text"
                        placeholder='C.C 123456789'
                        //value={this.state.idUsuario}
                        //onChange={this.onChangeCapacitacionIdUsuario}
                    /> 
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    size="lg" 
                    block="block" 
                    type="submit"
                    className="mt-4"> 
                    Consultar 
                    </Button>
                </Form>
            </Card.Text>
            </Card.Body>
        </Card>
        </center>
    )
  }
}
