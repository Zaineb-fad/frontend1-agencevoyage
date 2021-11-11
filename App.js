import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Image } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateDevis from "./components/create-devis.component";
import EditDevis from "./components/edit-devis.component";
import DevisList from "./components/devis-list.component";
import Seychelles from "./components/Seychelles.component";
import Maldives from "./components/Maldives.component";
import Mexique from "./components/Mexique.component";
import Zanzabir from "./components/Zanzabir.component";
import Bali from "./components/Bali.component";
import accueil from "./components/acceuil.component";
import Jordani from "./components/Jordani.component";
import Bordrum from "./components/Bordrum.component";
import Grece from "./components/Grece.component";
import voyageorganise from "./components/voyageorganise.component";
import thailand from "./components/thailand.component";
import Footer from "./components/Footer.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
                      <Image src="./300.PNG" thumbnail />

        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-devis"} className="nav-link">
                <Image src="./200.PNG" thumbnail />

              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
             <Nav>
                <Link to={"/accueil"} className="nav-link">
                  Acceuil
                </Link>
              </Nav>
              <Nav>
                <Link to={"/voyageorganise"} className="nav-link">
                  Voyage organise
                </Link>
              </Nav>
              <Nav>
                <Link to={"/thailand"} className="nav-link">
                  Thailand
                </Link>
              </Nav>
              <Nav>
                <Link to={"/create-devis"} className="nav-link">
                  Create Devis
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/devis-list"} className="nav-link">
                  Devis List
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
                <Route exact path='/' component={CreateDevis} />
                <Route path="/create-devis" component={CreateDevis} />
                <Route path="/edit-devis/:id" component={EditDevis} />
                <Route path="/devis-list" component={DevisList} />
                <Route  path='/accueil' component={accueil} />
                     <Route  path='/voyageorganise' component={voyageorganise} />
                     <Route  path='/thailand' component={thailand} />

                      <Route  path='/Bali' component={Bali} />
                      <Route  path='/Bordrum' component={Bordrum} />
                      <Route  path='/Grece' component={Grece} />
                      <Route  path='/Jordani' component={Jordani} />
                      <Route  path='/Maldives' component={Maldives} />
                      <Route  path='/Mexiuqe' component={Mexique} />
                      <Route  path='/Seychelles' component={Seychelles} />
                      <Route  path='/Zanzabir' component={Zanzabir} />

              </Switch>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  </Router>



  );
}

export default App;