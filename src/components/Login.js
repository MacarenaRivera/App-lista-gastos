import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header, Title, HeaderContainer } from "../elements/Header";
import Button from "./../elements/Button";
import { Form, Input, ContainerButton } from "../elements/FormElements";
import { ReactComponent as LoginImage } from "../images/login.svg";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import Alert from "../elements/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertState, setAlertState] = useState(false);
  const [alert, setAlert] = useState({});

  const handleChange = (e) => {
    if(e.target.name === "email"){
        setEmail(e.target.value)
    }else if(e.target.name === "password"){
        setPassword(e.target.value)
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
          message: "Por favor ingresa un correo electrónico válido."
        })
        return; //usamos un return para salir de nuestra función y no siga ejecutando código
    }
  
  //Comprobamos que los inputs no esten vacios
    if( email === "" || password === "" ){
      setAlertState(true);
      setAlert({
        type: "error",
        message: "Por favor rellenar los campos vacíos."
      })
      return;
    }
    
  //En el caso que ningún if se cumpla, creamos el nuevo usuario
    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch(error){
      setAlertState(true);
      let message;
      switch(error.code){
        case "auth/wrong-password":
          message = "La contraseña no es correcta."
          break;
        case "auth/user-not-found":
          message = "Usuario no registrado."
          break;
        default:
            message = "Hubo un error al acceder a la cuenta."
        break;
    }
    setAlert({ type: "error", message: message})
    }
  }

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Iniciar Sesión</Title>
          <div>
            <Button to="/register">Registrarse</Button>
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
        <ContainerButton>
          <Button as="button" primary type="submit">
            Iniciar Sesión
          </Button>
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

const Svg = styled(LoginImage)`
  width: 100%;
  max-height: 11.5rem; /* menos de 200px */
  margin-bottom: 1.85rem; /* más de 20px */
`;

export default Login;
