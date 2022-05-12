import {db} from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const addExpense = ({description, value, category, date, user}) => {
    return addDoc(collection(db, "expenses"), {
        description: description,
        value: value,
        category: category,
        date: date,
        user: user
    })
}

export default addExpense;