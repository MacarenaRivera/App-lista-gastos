import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title, HeaderContainer } from "../elements/Header";
import Button from "./../elements/Button";
import { Form, Input, ContainerButton } from "../elements/FormElements";
import {ReactComponent as LogImage} from "../images/registro.svg";
import styled from 'styled-components';

const Register = () => {
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
      <Form>
          <Svg />
        <Input type="email" name="email" placeholder="Correo Electrónico" />
        <Input type="password" name="password" placeholder="Contraseña" />
        <Input type="password" name="password2" placeholder="Confirmar Contraseña" />
        <ContainerButton>
            <Button as="button" primary type="submit">Crear Cuenta</Button>
        </ContainerButton>
      </Form>
    </>
  );
};

const Svg = styled(LogImage)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`;


export default Register;
