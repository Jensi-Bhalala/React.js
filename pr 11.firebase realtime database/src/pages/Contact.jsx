import { useState } from "react"
import "./Contact.css";
import {app} from '../../firebase'
import { getDatabase,ref,set } from "firebase/database";


const Data = () => {

    const [name, setName] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 10000);

        set(ref(db, `user/${id}`),{
            name: name,
            phone: phone,
            emailid: emailid,
            message: message,
        })

        alert("Record Added...");
        setName("");
        setEmailid("");
        setPhone("");
        setMessage("");
    }
    return(
        <div align="center">
            <h2>Firebase Realtime Database</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Emailid:</label>
                    <input type="text" value={emailid} onChange={(e) => setEmailid(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Message:</label>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>

               <input type="Submit" defaultValue="Submit"/>

            </form>
        </div>
    )

}

export default Data