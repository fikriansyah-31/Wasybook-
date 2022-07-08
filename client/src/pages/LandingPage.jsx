import Books from "../component/halaman utama/SlideBook"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/img/WaysBookLogo.png'
// import { useContext } from 'react'
// import { UserContext } from '../context/userContext'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, Button } from 'react-bootstrap'
import Login from '../component/halaman utama/Login'
import Register from '../component/halaman utama/Register'


function Landingpage() {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    const registerHere = (e) => {
        e.preventDefault();
        setRegisterShow(false);
        setLoginShow(true);
    }

    const loginHere = (e) => {
        e.preventDefault();
        setLoginShow(false);
        setRegisterShow(true);
    }

    return (
        <>
            <div>
                <div className="bodyHome">
                    <div className="backgroundImage">
                        <Navbar bg="transparent" expand="lg" >
                            <Container>
                                <Navbar.Brand href="#"><img src={logo} style={{ maxWidth: '8rem' }} alt="" /></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="align-items-center">
                                            <Button variant="outline-dark" style={{ borderRadius: 0, borderWidth: '3px', width: '6rem', height: '2.5rem' }} onClick={() => setLoginShow(true)}>Login</Button>
                                        <Nav.Link>
                                            <Button variant="dark" style={{ borderRadius: 0, width: '6rem', height: '2.5rem' }} onClick={() => setRegisterShow(true)}>Register</Button>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <Books />
                    </div>
                </div>
            </div>
            <Login loginHere={loginHere} loginShow={loginShow} setLoginShow={setLoginShow} setRegisterShow={setRegisterShow} />
            <Register registerHere={registerHere} registerShow={registerShow} setRegisterShow={setRegisterShow} setLoginShow={setLoginShow} />

        </>
    );
}

export default Landingpage;