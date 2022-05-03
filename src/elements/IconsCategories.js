import React from 'react';
import {ReactComponent as FoodIcon} from "../images/cat_comida.svg";
import {ReactComponent as ShoppingIcon} from "../images/cat_compras.svg";
import {ReactComponent as PaymentsgIcon} from "../images/cat_cuentas-y-pagos.svg";
import {ReactComponent as FunIcon} from "../images/cat_diversion.svg";
import {ReactComponent as HomeIcon} from "../images/cat_hogar.svg";
import {ReactComponent as ClothesIcon} from "../images/cat_ropa.svg";
import {ReactComponent as HealthIcon} from "../images/cat_salud-e-higiene.svg";
import {ReactComponent as TransportIcon} from "../images/cat_transporte.svg";

const IconsCategories = ({name}) => {
    switch(name){
        case "comida":
            return <FoodIcon/>;
        case "compras":
            return <ShoppingIcon/>;
        case "cuentas y pagos":
            return <PaymentsgIcon/>;
        case "diversion":
            return <FunIcon/>;
        case "hogar":
            return <HomeIcon/>;
        case "ropa":
            return <ClothesIcon/>;
        case "salud e higiene":
            return <HealthIcon/>;
        case "transporte":
            return <TransportIcon/>;
        default:
        break;
    }
}
 
export default IconsCategories;