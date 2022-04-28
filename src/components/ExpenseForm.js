import React, {useState} from "react";
import {ContainerFilters, Form, Input, LargeInput, ContainerButton} from "../elements/FormElements";
import Button from "../elements/Button";
import {ReactComponent as PlusIcon} from "../images/plus.svg";
import CategorySelect from "./CategorySelect";

const ExpenseForm = () => {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [category, setCategory] = useState("hogar");

    const handleChange = (e) => {
        if(e.target.name === "description"){
            setDescriptionInput(e.target.value);
        }else if(e.target.name === "value"){
            setValueInput(e.target.value.replace(/[^0-9.]/g, "")); //expresión regular para escribir solo números
        }
    }

    return ( 
        <Form>
            <ContainerFilters>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                />
                <p>Date Picker</p>
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
                    Agregar Gastos <PlusIcon/>
                </Button>
            </ContainerButton>
        </Form>
     );
}
 
export default ExpenseForm;