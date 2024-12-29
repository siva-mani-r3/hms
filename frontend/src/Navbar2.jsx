import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

const Navbar2 = () => {
  const navigate = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    navigate('/login');
  };

  const name = localStorage.getItem('user');

  return (
    <Navbar expand="lg" className="fixed-top" style={{ background: "turquoise" }}>
      <Container fluid>
        <Navbar.Brand href="https://www.aec.edu.in/" target="_blank">
          <img src="2.png" alt="siva" style={{ width: "70px", height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Button
              style={{
                boxShadow: "0px 1px 5px 0px darkblue",
                backgroundColor: "white",
                color: "black",
                margin: "7px",
              }}
              onClick={() => navigate('/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v23')}
            >
              Home
            </Button>
            <Button
              style={{
                boxShadow: "0px 1px 5px 0px darkblue",
                backgroundColor: "white",
                color: "black",
                margin: "7px",
              }}
              onClick={() => navigate('/rooms2')}
            >
              Rooms
            </Button>
            <Button
              style={{
                boxShadow: "0px 1px 5px 0px darkblue",
                backgroundColor: "white",
                color: "black",
                margin: "7px",
              }}
              onClick={() => navigate('/available2')}
            >
              Available
            </Button>
          </Nav>

          <Form className="d-flex">
            <span
              style={{
                marginTop: "5px",
                marginRight: "5px",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
                textTransform: "uppercase",
                padding: "5px",
              }}
            >
              Welcome__{name?.substring(0, 15)}
            </span>

            <Button
              variant="outline-danger"
              style={{ marginLeft: "10px" }}
              onClick={Logout}
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
