import React from "react";
import { Header, Title } from "./../elements/Header";
import {Helmet} from "react-helmet";
import BackButton from "../elements/BackButton";
import TotalSpent from "./TotalSpent";

const ExpensesByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por Categoría</title>
      </Helmet>
      <Header>
          <BackButton />
          <Title>Gastos por Categoría</Title>
      </Header>
      <TotalSpent />
    </>
  );
};

export default ExpensesByCategory;
