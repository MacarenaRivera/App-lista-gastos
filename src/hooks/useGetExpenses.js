import {useState, useEffect} from 'react';
import {db} from "../firebase/firebaseConfig";
import {useAuth} from "../contexts/AuthContext";
import { collection, onSnapshot, query, orderBy, where, limit, startAfter } from 'firebase/firestore';

const useGetExpenses = () => {
    const {user} = useAuth();
    const [expenses, setExpenses] = useState([]);
    const [lastExpense, setLastExpense] = useState(null);
    const [moreToLoad, setMoreToLoad] = useState(false);

    //al ejecutar esta función estamos obteniendo los ultimos gastos o los gastos despues de los 10 primeros aplicando los mismos filtros.
    const getMoreExpenses = () => {
        const inquiry = query(collection(db, "expenses"),
        where("user", "==", user.uid),
        orderBy("date", "desc"),
        limit(10),
        startAfter(lastExpense)
        );

        onSnapshot(inquiry, (snapshot) => {
            //nos devuelve un arreglo de gastos, si estos son mayor a 0 significa que aún tiene más gastos.
            if(snapshot.docs.length > 0){
                //con esto establecemos cual será el nuevo último gasto
                setLastExpense(snapshot.docs[snapshot.docs.length -1]);
                //el arreglo que nos retorna contiene los nuevos gastos y luego concatenamos los gastos antiguos con los nuevos. pd: lee el código de adentro hacía fuera
                setExpenses(expenses.concat(snapshot.docs.map((expense) => {
                    return {...expense.data(), id: expense.id}
                })));
            }else{
                setMoreToLoad(false);
            }
        }, error => {console.log(error)});
    }

    useEffect(()=>{
        const inquiry = query(
            collection(db, "expenses"), 
            where("user", "==", user.uid),
            orderBy("date", "desc"),
            limit(10)
        );

        const unsuscribe = onSnapshot(inquiry, (snapshot) => {
            if(snapshot.docs.length > 0){
                //accedemos al ultimo elemento después del 10
                setLastExpense(snapshot.docs[snapshot.docs.length -1]);
                setMoreToLoad(true);
            }else{
                setMoreToLoad(false);
            }

            setExpenses(snapshot.docs.map((expense) => {
                return {...expense.data(), id: expense.id}
            }))
        })
        //desmontamos el componente al salir de lista de gastos, ya que si salimos de lista de gastos y agregamos un nuevo valor nos mostrará un error, de esta manera lo evitamos.
        return unsuscribe;
    }, [user]); //agregamos usuario para que cada vez que cambie se vuelva a conectar

    return [expenses, getMoreExpenses, moreToLoad];
}
 
export default useGetExpenses;
