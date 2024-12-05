import React ,{ useEffect, useState} from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import {app} from "../firebase";
import{getDatabase, ref, set, update } from "firebase/database";


const Edit = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const db = getDatabase(app);

    useEffect(() => {
        setName(location?.state[1].name)
        setPhone(location?.state[1].phone);
        setEmail(location?.state[0]);
    },[location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        const us = ref(db,`users/${editid}`)
        update(us,{
            name:name,
            phone:phone
        })

        alert("record update");
        navigate("/");
    };
    return (
        <div align="center">
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        </td>
                    </tr>

                    <tr>
                        <td>Phone:</td>
                        <td>
                            <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}/>
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
            <Link to={`/`}>View</Link>
        </div>
    );
};

export default Edit;

