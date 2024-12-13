import React ,{ useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    useEffect(() => {
        let userLogin = JSON.parse(localStorage.getItem("user"));
        if (userLogin) {
            navigate("/");
        }
    });

    const navigate = useNavigate();
    const [username, setUsername] = useStatee("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

       let user = record .find((user) => user.username === username && user.password === password);
       if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        } else {
            alert("Invalid username or password");
            }
            

    };

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
            <Link to={`/Register`}>Register</Link>
        </div>
    )
}