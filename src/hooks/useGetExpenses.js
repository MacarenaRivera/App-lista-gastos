import {useState, useEffect} from 'react';
import {db} from "../firebase/firebaseConfig";
import {useAuth} from "../contexts/AuthContext";
import { collection, onSnapshot, query, orderBy, where, limit } from 'firebase/firestore';

const useGetExpenses = () => {
    const {user} = useAuth();
    const [expenses, setExpenses] = useState([]);
    //const [lastExpense, setLastExpense] = useState(null);
    //const [moreToLoad, setMoreToLoad] = useState(false);

    useEffect(()=>{
        const inquiry = query(
            collection(db, "expenses"), 
            where("user", "==", user.uid),
            orderBy("date", "desc"),
            limit(10)
        );

        const unsuscribe = onSnapshot(inquiry, (snapshot) => {
    //        if(snapshot.docs.length > 0){
    //            setLastExpense(snapshot.docs[snapshot.length -1]);
    //            setMoreToLoad(true);
    //        }else{
     //           setMoreToLoad(false);
     //       }

            setExpenses(snapshot.docs.map((expense) => {
                return {...expense.data(), id: expense.id}
            }))
        })
        //desmontamos el componente al salir de lista de gastos, ya que si salimos de lista de gastos y agregamos un nuevo valor nos mostrará un error, de esta manera lo evitamos.
        return unsuscribe;
    }, [user]); //agregamos usuario para que cada vez que cambie se vuelva a conectar

    return [expenses];
}
 
export default useGetExpenses;
