import React, {useState} from "react";
import styled from "styled-components";
import theme from "../theme";
import {ReactComponent as DownIcon} from "../images/down.svg";

const CategorySelect = ({category, setCategory}) => {
    const [showSelect, setShowSelect] = useState(false);

    const categories = [
        {id: "comida", text: "Comida"},
        {id: "cuentas y pagos", text: "Cuentas y pagos"},
        {id: "hogar", text: "Hogar"},
        {id: "transporte", text: "Transporte"},
        {id: "ropa", text: "Ropa"},
        {id: "salud e higiene", text: "Salud e Higiene"},
        {id: "compras", text: "Compras"},
        {id: "diversion", text: "Diversion"}
    ]

    const handleClick = (e) => {
        setCategory(e.currentTarget.dataset.valor);
    }

    return ( 
        <SelectContainer onClick={() => setShowSelect(!showSelect)}>
            <SelectedOption>
                {category} <DownIcon/>
            </SelectedOption>

            {showSelect && 
                <Options>
                    {categories.map((category) => (
                        <Option 
                            key={category.id}
                            data-valor={category.id}
                            onClick={handleClick}
                        >{category.text}
                </Option>
                    ))}
                </Options>
            }
        </SelectContainer>
     );
}

const SelectContainer = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    position: relative;
    height: 5rem; /* 80px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`;
 
const SelectedOption = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */
    }
`;
 
const Options = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Option = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

export default CategorySelect;