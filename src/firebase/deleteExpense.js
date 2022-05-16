import { db } from "./firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const deleteExpense = async (id) => {
    await deleteDoc(doc(db, "expenses", id))
}
 
export default deleteExpense;