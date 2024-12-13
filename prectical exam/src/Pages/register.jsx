import React ,{ useState} from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useStatee("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: math.floor(math.random() * 10000),
            username: username,
            password: password
        }

        let old = [...BsRecord, obj];
        localStorage, setItem('users', JSON.stringify(old));
        alert("record added");
        setUsername("")
        setPassword("");

    }

    return (
        <div align="center">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            Username:
                        </td>
                        <td>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}value={username}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            password
                        </td>
                        <td>
                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}value={password} />
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
            <Link to={`/login`}>login</Link>
        </div>
    )
}