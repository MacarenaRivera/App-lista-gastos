import React from "react";
import { Header, Title } from "./../elements/Header";
import { Helmet } from "react-helmet";
import BackButton from "../elements/BackButton";
import TotalSpent from "./TotalSpent";
import useGetExpenses from "../hooks/useGetExpenses";
import {
  List,
  ListElement,
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
import { ReactComponent as EditIcon } from "../images/editar.svg";
import { ReactComponent as DeleteIcon } from "../images/borrar.svg";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { format, fromUnixTime } from "date-fns";
import { es } from "date-fns/locale";
import deleteExpense from "../firebase/deleteExpense";

const ExpenseList = () => {
  //extraemos los valores del array
  const [expenses, getMoreExpenses, moreToLoad] = useGetExpenses();

  const formatDate = (date) => {
    return format(fromUnixTime(date), "dd 'de' MMMM 'de' yyyy", { locale: es });
  };

  const dateIsTheSame = (expenses, index, expense) => {
    // si el index es diferente a 0, comprobamos. Ya que para el primer elemento no queremos que ejecute esta comprobación
    if (index !== 0) {
      const currentDate = formatDate(expense.date);
      const previousExpenseDate = formatDate(expenses[index - 1].date);

      if (currentDate === previousExpenseDate) {
        return true;
      } else {
        return false;
      }
    }
  };

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
        {expenses.map((expense, index) => (
          <div key={expense.id}>
            {!dateIsTheSame(expenses, index, expense) && (
              <Date>{formatDate(expense.date)}</Date>
            )}

            <ListElement>
              <Category>
                <IconsCategories name={expense.category} />
                {expense.category}
              </Category>
              <Description>{expense.description}</Description>
              <Value>{convertToCoin(expense.value)}</Value>
              <ContainerButtons>
                <ActionButton as={Link} to={`/edit/${expense.id}`}>
                  <EditIcon />
                </ActionButton>
                <ActionButton onClick={() => deleteExpense(expense.id)}>
                  <DeleteIcon />
                </ActionButton>
              </ContainerButtons>
            </ListElement>
          </div>
        ))}
        {moreToLoad && (
          <CenterButtonContainer>
            <MoreLoadButton onClick={() => getMoreExpenses()}>
              Cargar más
            </MoreLoadButton>
          </CenterButtonContainer>
        )}
        {expenses.length === 0 && (
          <SubtitleContainer>
            <Subtitle>No hay gastos por mostrar</Subtitle>
            <Button as={Link} to="/">
              Agregar gastos
            </Button>
          </SubtitleContainer>
        )}
      </List>
      <TotalSpent />
    </>
  );
};

export default ExpenseList;
