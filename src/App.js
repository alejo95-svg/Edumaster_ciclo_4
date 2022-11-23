import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateCapacitacion from "./components/create-capacitacion.component";
import EditCapacitacion from "./components/edit-capacitacion.component";
import CapacitacionList from "./components/capacitacion-list.component";
import ConsultarCapacitacion from "./components/consultar-capacitacion.component";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <Navbar bg="light">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  <b> <span className="edu">EDU</span>MASTER</b>
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-capacitacion"} className="nav-link">
                    Crear Capacitacion
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/capacitacion-list"} className="nav-link">
                    Listar Capacitacion
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <ConsultarCapacitacion {...props} />}
                  />
                  <Route
                    exact
                    path="/create-capacitacion"
                    component={(props) => <CreateCapacitacion {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-capacitacion/:id"
                    component={(props) => <EditCapacitacion {...props} />}
                  />
                  <Route
                    exact
                    path="/capacitacion-list"
                    component={(props) => <CapacitacionList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
