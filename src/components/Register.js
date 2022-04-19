import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Header, Title, HeaderContainer } from "../elements/Header";
import Button from "./../elements/Button";
import { Form, Input, ContainerButton } from "../elements/FormElements";
import {ReactComponent as LogImage} from "../images/registro.svg";
import styled from 'styled-components';
import {auth} from "../firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Alert from "../elements/Alert";

const Register = () => {
const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");
const [alertState, setAlertState] = useState(false);
const [alert, setAlert] = useState({});

const handleChange = (e) => {
    switch(e.target.name){ //identificamos donde se origina el evento o a cual input corresponde
      case "email": //en el caso de que sea email, rescatamos su valor.
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value)
        break;
      default:
        break;
    }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  setAlertState(false);
  setAlert({});

//Comprobamos del lado del cliente que el correo sea valido
  const regularExp = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
  if( !regularExp.test(email) ){
      setAlertState(true);
      setAlert({
        type: "error",
        message: "Por favor ingresa un correo electrónico válido"
      })
      return; //usamos un return para salir de nuestra función y no siga ejecutando código
  }

//Comprobamos que los inputs no esten vacios
  if( email === "" || password === "" || password2 === ""){
    setAlertState(true);
    setAlert({
      type: "error",
      message: "Por favor rellenar los campos vacíos"
    })
    return;
  }

//Comprobamos que las dos contraseñas coincidan
  if( password !== password2){
    setAlertState(true);
    setAlert({
      type: "error",
      message: "Las contraseñas no coinciden. Vuelva a intentarlo"
    })
    return;
  }

//En el caso que ningún if se cumpla, creamos el nuevo usuario
  try{
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch(error){
    setAlertState(true);
    let message;
    switch(error.code){
      case "auth/weak-password":
          message = "La contraseña tiene que ser de al menos 6 caracteres."
          break;
      case "auth/email-already-in-use":
          message = "Ya existe una cuenta con el correo electrónico proporcionado."
      break;
      case "auth/invalid-email":
          message = "El correo electrónico no es válido."
      break;
      default:
          message = "Hubo un error al intentar crear la cuenta."
      break;
  }
  setAlert({ type: "error", message: message})
  }
}

  return (
    <>
      <Helmet>
        <title>Crear Cuenta</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Crear Cuenta</Title>
          <div>
            <Button to="/login">Iniciar Sesión</Button>
          </div>
        </HeaderContainer>
      </Header>
      <Form onSubmit={handleSubmit}>
          <Svg />
        <Input 
          type="email" 
          name="email" 
          placeholder="Correo Electrónico" 
          value={email}
          onChange={handleChange}
        />
        <Input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={handleChange}
        />
        <Input 
          type="password" 
          name="password2" 
          placeholder="Confirmar Contraseña" 
          value={password2}
          onChange={handleChange}
        />
        <ContainerButton>
            <Button as="button" primary type="submit">Crear Cuenta</Button>
        </ContainerButton>
      </Form>

      <Alert 
        type={alert.type}
        message={alert.message}
        alertState={alertState}
        setAlertState={setAlertState}
      />
    </>
  );
};

const Svg = styled(LogImage)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;


export default Register;
