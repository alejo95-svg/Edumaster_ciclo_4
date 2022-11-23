import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import CapacitacionTableRow from "./CapacitacionTableRow";

export default class CapacitacionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capacitaciones: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/capacitacion/")
      .then((res) => {
        this.setState({
          capacitaciones: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.capacitaciones.map((res, i) => {
      return <CapacitacionTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Card>
        <Card.Header>REGISTROS</Card.Header>
        <Card.Body>
          <Card.Text>

            <Table  hover>
              <thead>
                <tr>
                  <th>Id Usurio</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Capacitacion</th>
                  <th>Duracion</th>
                  <th>Fecha</th>
                  <th>Accción</th>
                </tr>
              </thead>
              <tbody>{this.DataTable()}</tbody>
            </Table>

          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
