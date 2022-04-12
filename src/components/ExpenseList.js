import React from "react";
import { Header, Title } from "./../elements/Header";
import {Helmet} from "react-helmet";
import BackButton from "../elements/BackButton";

const ExpenseList = () => {
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BackButton />
        <Title>Lista de Gastos</Title>
      </Header>
    </>
  );
};

export default ExpenseList;
