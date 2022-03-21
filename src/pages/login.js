import React, { Component, useState } from 'react' ;
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ImgEx from '../components/ImgEx';
import {Button, Container} from 'react-bootstrap';

function Login() {
    const adminUser = {
        email: "zoey@naver.com",
        password: "1234"
    }

    const [user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("로그인 성공");
            setUser({
                email: details.email
            });
        } else {
            setError("이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.");
        }
    }

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        
        Login(details);
    }

    return (
        /*<Container>
            <Container>
                <h1>조주기능사 모의테스트</h1>
            </Container>
            <Container>
                    <ImgEx/>
            </Container>
            <Container>
                <label for ="inputid"> ID </label> 
                <input type="text" id="inputid"placeholder="ID" required autofocus /><br/>
                <label for="inputPassword"> Password </label>
                <input type="password" id="inputPassword" placeholder= "password" required />
                <Link to = '/quiz'>
                    <Button variant="outline-success">Go</Button>
                </Link>
            </Container>
        </Container>*/
        <form onSubmit={submitHandler}>
            <div>
                <h1>조주기능사 모의테스트</h1>
            </div>
            <div>
                <ImgEx/>
            </div>
            <div>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div>
                    <label htmlFor="id">ID: </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <Button type="submit" variant="outline-success">Go</Button>
                <Link to = '/quiz'>
                    <Button variant="outline-success">Go</Button>
                </Link>
            </div>
        </form>
    );
}

export default Login;