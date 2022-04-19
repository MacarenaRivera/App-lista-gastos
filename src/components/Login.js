import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title, HeaderContainer } from "../elements/Header";
import Button from "./../elements/Button";
import { Form, Input, ContainerButton } from "../elements/FormElements";
import { ReactComponent as LoginImage } from "../images/login.svg";
import styled from "styled-components";

const Login = () => {
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
      <Form>
        <Svg />
        <Input type="email" name="email" placeholder="Correo Electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <ContainerButton>
          <Button as="button" primary type="submit">
            Iniciar Sesión
          </Button>
        </ContainerButton>
      </Form>
    </>
  );
};

const Svg = styled(LoginImage)`
  width: 100%;
  max-height: 11.5rem; /* menos de 200px */
  margin-bottom: 1.85rem; /* más de 20px */
`;

export default Login;
