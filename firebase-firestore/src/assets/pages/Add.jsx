import React, {useState} from "react";
import {app} from "../../firebase";
import { getFirestore,addDoc, collection } from "firebase/firestore";

const Add = () => {
    const db = getFirestore(app)
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await addDoc(collection(db, "users"),{
                name: name,
                phone: phone
            })
            alert("record successfully added");
            navigate("/");
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>Phone:</td>
                        <td>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" />
                        </td>
                    </tr>
                </table>
            </form>
            <link to={`/`}>View</link>
        </div>
    );

};

export default Add;
