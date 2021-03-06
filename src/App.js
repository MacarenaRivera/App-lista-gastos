import React from "react";
import {Helmet} from "react-helmet";
import  {Header, Title, HeaderContainer, ContainerButtons} from "./elements/Header";
import Button from "./elements/Button";
import LogoutButton from "./elements/LogoutButton";
import ExpenseForm from "./components/ExpenseForm";
import TotalSpent from "./components/TotalSpent";

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
            <LogoutButton />
          </ContainerButtons>
        </HeaderContainer>
      </Header>
      <ExpenseForm />
      <TotalSpent />
    </>
   );
}
 
export default App;
