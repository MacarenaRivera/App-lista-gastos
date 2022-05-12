import React from "react";
import { Header, Title } from "./../elements/Header";
import { Helmet } from "react-helmet";
import BackButton from "../elements/BackButton";
import TotalSpent from "./TotalSpent";
import useGetExpenses from "../hooks/useGetExpenses";
import {
  List,
  ListElement,
  CategoryList,
  CategoryListItem,
  Category,
  Description,
  Value,
  Date,
  ContainerButtons,
  ActionButton,
  MoreLoadButton,
  CenterButtonContainer,
  SubtitleContainer,
  Subtitle,
} from "../elements/ListElements";
import IconsCategories from "../elements/IconsCategories";
import convertToCoin from "../functions/convertToCoin";
import {ReactComponent as EditIcon} from "../images/editar.svg";
import {ReactComponent as DeleteIcon} from "../images/borrar.svg";
import { Link } from "react-router-dom";
import Button from "../elements/Button";


const ExpenseList = () => {
  //extraemos los valores del array
  const [expenses] = useGetExpenses();

  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>
      <Header>
        <BackButton />
        <Title>Lista de Gastos</Title>
      </Header>
      <List>
        {expenses.map((expense) => (
          <ListElement key={expense.id}>
            <Category>
              <IconsCategories name={expense.category} />
              {expense.category}
            </Category>
            <Description>
              {expense.description}
            </Description>
            <Value>
              {convertToCoin(expense.value)}
            </Value>
            <ContainerButtons>
              <ActionButton 
                as={Link} to={`/edit/${expense.id}`}>
                <EditIcon />
              </ActionButton>
              <ActionButton>
                <DeleteIcon />
              </ActionButton>
            </ContainerButtons>
          </ListElement>
        ))}
        <CenterButtonContainer>
          <MoreLoadButton>Cargar más</MoreLoadButton>
        </CenterButtonContainer>

        {expenses.length === 0 && 
          <SubtitleContainer>
            <Subtitle>No hay gastos por mostrar</Subtitle>
            <Button as={Link} to="/">Agregar gastos</Button>
          </SubtitleContainer>
        }
      </List>
      <TotalSpent />
    </>
  );
};

export default ExpenseList;
