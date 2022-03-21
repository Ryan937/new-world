import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Quiz from "../pages/quiz";
import Mypage from "../pages/mypage";
import Recipes from "../pages/recipes";
import Login from "../pages/login";
import QuizProblems from "../pages/problems";
// import Timer from "./components/Timer";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/css/components.css';
import logo from '../assets/TA.jpg'

export default function NavbarCus() {
    return(
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div style={{ marginRight: "30px", marginTop: "20px"}}>
                            <img 
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d=inline-block align-top"
                            />{' '}
                            조주기능사
                        </div>
                    </Navbar.Brand>
                    </Container>
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/quiz">
                                Quiz
                            </Nav.Link>
                            <Nav.Link as={Link} to="/mypage">
                                My page
                            </Nav.Link>
                            <Nav.Link as={Link} to="/recipes">
                                Recipes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/problems" element={<QuizProblems />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/recipes" element={<Recipes />} />              
            </Routes>
        </Router>
    )
}