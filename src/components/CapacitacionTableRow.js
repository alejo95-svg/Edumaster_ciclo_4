import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class CapacitacionTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteCapacitacion = this.deleteCapacitacion.bind(this);
  }

  deleteCapacitacion() {
    if (window.confirm("Deseas eliminar el registro?")) {
      axios
        .delete(
          "http://localhost:4000/capacitacion/delete-capacitacion/" + this.props.obj._id
        )
        .then((res) => {
          this.props.history.push("/capacitacion-list");
          console.log("Capacitacion successfully deleted!");
          alert("Registro eliminado con exito!!!");          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.idUsuario}</td>
        <td>{this.props.obj.nombresUsuario}</td>
        <td>{this.props.obj.apellidosUsuario}</td>
        <td>{this.props.obj.capacitacion}</td>
        <td>{this.props.obj.duracionCapacitacion}</td>
        <td>{this.props.obj.fechaCapacitacion}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-capacitacion/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteCapacitacion} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
