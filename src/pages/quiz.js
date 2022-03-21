
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgEx from '../components/ImgEx2';
import {Button, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function Quiz() {
    return (
            <Container>
            <ImgEx/>
            조주기능사 모의테스트 <br/>
            <Link to='/problems'>
            <Button variant="outline-success" > Start </Button>
            </Link>
            </Container>
    );
}
