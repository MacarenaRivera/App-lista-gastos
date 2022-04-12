import styled from 'styled-components';
import theme from '../theme';

const ContainerFilters = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; /* 30px */
 
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Form = styled.form`
    padding: 0 2.5rem; /* 40px */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input { /*Inputs que esten dentro del form */
        width: 100%;
        text-align: center;
        padding: 1.6rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
 
const Input = styled.input`
    font-size: 2.3rem; 
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro}; /*llamamos al objeto theme */
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2.1rem; 
    }
`;
 
const LargeInput = styled(Input)`
    font-size: 4.37rem; /* 70px */
    font-weight: bold;
`;
 
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  /* 40px */
`;

export {ContainerFilters, Form, Input, LargeInput, ContainerButton};