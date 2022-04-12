import React from "react";
import {Helmet} from "react-helmet";
import  {Header, Title, HeaderContainer, ContainerButtons} from "./elements/Header";
import Button from "./elements/Button";

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Agregar Gastos</title>
      </Helmet>
      <Header>
        <HeaderContainer>
          <Title>Agregar Gastos</Title>
          <ContainerButtons>
            <Button to="categories">Categorías</Button>
            <Button to="list">Lista de Gastos</Button>
            <Button to="">X</Button>
          </ContainerButtons>
        </HeaderContainer>
      </Header>
    </>
   );
}
 
export default App;
