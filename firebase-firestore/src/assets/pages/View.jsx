import { collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const View = () => {
    const navigate = useNavigate();
    const db = getFirestore(app);
    const [users,setusers] = useState([])
    const viewuser = async() => {
        try{
            const data = await collection(db,"users");
            const users = await getDocs(data);
            const allrecord = users.docs.map(val => ({
                id : val.id,
                ...val.data()
            }))
            setusers(allrecord)
        }
        catch(err){
            console.log(err);
            return false;
        }
    };
    const deleteUser = async(id) => {
        try{
            let deletedata = await doc(db,`/users/${id}`);
            await deleteDoc(deletedata)
            alert("user delete");
            viewuser()
        }
        catch(err){
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        viewuser();
    },[]);

    return(
        <div align="ceenter">
            
        </div>
    )
}