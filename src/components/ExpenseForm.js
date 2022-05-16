import React, { useState } from "react";
import {
  ContainerFilters,
  Form,
  Input,
  LargeInput,
  ContainerButton,
} from "../elements/FormElements";
import Button from "../elements/Button";
import { ReactComponent as PlusIcon } from "../images/plus.svg";
import CategorySelect from "./CategorySelect";
import DatePicker from "./DatePicker";
import getUnixTime from "date-fns/getUnixTime";
import addExpense from "../firebase/addExpense";
import { useAuth } from "../contexts/AuthContext";
import Alert from "../elements/Alert";

const ExpenseForm = () => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [category, setCategory] = useState("hogar");
  const [date, setDate] = useState(new Date());
  const [alertState, setAlertState] = useState(false);
  const [alert, setAlert] = useState({});

  const { user } = useAuth();

  const handleChange = (e) => {
    if (e.target.name === "description") {
      setDescriptionInput(e.target.value);
    } else if (e.target.name === "value") {
      setValueInput(e.target.value.replace(/[^0-9.]/g, "")); //expresión regular para escribir solo números
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //comprobamos que haya una descripción y valor.
    if (descriptionInput !== "" && valueInput !== "") {
      addExpense({
        description: descriptionInput,
        value: valueInput,
        category: category,
        date: getUnixTime(date),
        user: user.uid,
      })
        //accedemos a la promesa que retornamos en addExpense
        .then(() => {
          setCategory("hogar");
          setDescriptionInput("");
          setValueInput("");
          setDate(new Date());

          setAlertState(true);
          setAlert({
            type: "exito",
            message: "El gasto fue agregado correctamente.",
          });
        })
        .catch(() => {
          setAlertState(true);
          setAlert({
            type: "error",
            message: "Hubo un problema al intentar agregar tu gasto.",
          });
        });
    } else {
      setAlertState(true);
      setAlert({
        type: "error",
        message: "Por favor completa todos los campos.",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ContainerFilters>
        <CategorySelect category={category} setCategory={setCategory} />
        <DatePicker date={date} setDate={setDate} />
      </ContainerFilters>
      <div>
        <Input
          type="text"
          name="description"
          placeholder="Descripción"
          value={descriptionInput}
          onChange={handleChange}
        />
        <LargeInput
          type="text"
          name="value"
          placeholder="$0.000"
          value={valueInput}
          onChange={handleChange}
        />
      </div>
      <ContainerButton>
        <Button as="button" primary withIcon type="submit">
          Agregar Gastos <PlusIcon />
        </Button>
      </ContainerButton>
      <Alert
        type={alert.type}
        message={alert.message}
        alertState={alertState}
        setAlertState={setAlertState}
      />
    </Form>
  );
};

export default ExpenseForm;
