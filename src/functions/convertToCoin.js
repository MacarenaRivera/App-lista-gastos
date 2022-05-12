
const formatQuantity = (quantity) => {
    return new Intl.NumberFormat(
        "es-CL",
        {style: "currency", currency: "CLP"}
    ).format(quantity);
}
 
export default formatQuantity;