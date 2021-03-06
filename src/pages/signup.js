import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const SignUp = ({ history }) => {
    const [id, onChangeId, setId] = useInput("");
    const [pwd, onChangePwd, setPwd] = useInput("");
    const [confirmPwd, onChangeConfirmPwd, setConfirmPwd] = useInput("");
    const [errorMessage, setErrorMessage] = useState({
      idError: "",
      pwdError: "",
      confirmPwdError: "",
    });
    const { idError, pwdError, confirmPwdError } = errorMessage;
  
    const inputRegexs = {
      idReg: /^[A-za-z0-9]{5,15}$/g,
      pwdReg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g,
    };
    const validationCheck = useCallback(
      (input, regex) => {
        let isValidate = false;
        if (input === "") {
          isValidate = false;
        } else if (regex.test(input)) {
          isValidate = true;
        } else {
          isValidate = false;
        }
        return isValidate;
      },
      [pwd, id]
    );
  
    const onReset = useCallback(() => {
      setId("");
      setPwd("");
      setConfirmPwd("");
    }, [setId, setPwd, setConfirmPwd]);
    
    useEffect(() => {
      if (validationCheck(id, inputRegexs.idReg) || id === "") {
        setErrorMessage({
          ...errorMessage,
          idError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          idError: "아이디는 영문 또는 숫자로 5~15자 이여야 합니다.",
        });
      }
    }, [id]);
  
    useEffect(() => {
      if (validationCheck(pwd, inputRegexs.pwdReg) || pwd === "") {
        setErrorMessage({
          ...errorMessage,
          pwdError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          pwdError:
            "비밀번호는 최소 하나의 문자 및 하나의 숫자로 8자 이상이여야 한다.",
        });
      }
    }, [pwd]);
    
    useEffect(() => {
      if (pwd === confirmPwd || confirmPwd === "") {
        setErrorMessage({
          ...errorMessage,
          confirmPwdError: "",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          confirmPwdError: "비밀번호 확인이 일치하지 않습니다.",
        });
      }
    }, [confirmPwd]);
  
    const onSignUp = () => {
      if (!id || !pwd || !confirmPwd) {
        alert("입력해주세요")
        return;
      }
  
      alert("가입 완료");
      history.push("/");
      onReset();
    };
  
    return (
      <Container>
        <Title>회원가입</Title>
        <InputContainer>
          <InputItem>
            <InputTitle>아이디</InputTitle>
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChangeId}
              required
            />
            {idError ? <ErrorMessage>{idError}</ErrorMessage> : ""}
          </InputItem>
          <InputItem>
            <InputTitle>비밀번호</InputTitle>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pwd}
              onChange={onChangePwd}
              required
            />
            {pwdError ? <ErrorMessage>{pwdError}</ErrorMessage> : ""}
          </InputItem>
          <InputItem>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input
              type="password"
              placeholder="비밀번호 확인을 입력하세요"
              value={confirmPwd}
              onChange={onChangeConfirmPwd}
              required
            />
            {confirmPwdError ? (
              <ErrorMessage>{confirmPwdError}</ErrorMessage>
            ) : (
              ""
            )}
          </InputItem>
        </InputContainer>
        <Btn type="submit" value="Sign Up" onClick={onSignUp} />
        <Link to="/">
          <Btn type="submit" value="Login" />
        </Link>
      </Container>
    );
  };
  
  export default SignUp;