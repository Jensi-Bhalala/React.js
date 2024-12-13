import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Add_user } from '../Action/CrudAction'

const Add = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 10000),
            name: name,
            email: email

        }


        dispatch(Add_user(obj))
        alert("record add")
        setName("")
        setEmail("")

    }

    return (
        <div align="center">
            <div className='container'>
                <div className='row'>
                    <h1>add user</h1>
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                                </td>
                            </tr>

                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
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

                    <Link to={'/view'}>View Data</Link>
                </div>
            </div>
        </div>
    )
}

export default Add
