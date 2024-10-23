import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Form = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Math.floor(Math.random() * 100000),
            name: name,
            phone: phone,
            status: "active"
        }
        const newrecord = [...allrecord, obj];
        localStorage.setItem("users", JSON.stringify(newrecord));
        alert("record add");
        navigate('/');

    }

    return (
        <div align="center">
            <h1>Add User</h1>

                <form className='container'  onSubmit={handleSubmit} style={{width:"600px"}}>
                    <div classNameName="mb-3 mt-3">
                        <label for="exampleInputEmail1" classNameName="form-label" style={{textAlign:"left",display:"block"}}>Name : </label>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleInputPassword1" className="form-label" style={{textAlign:"left",display:"block"}}>Phone No : </label>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            {/* </form> */}
            <Link to={`/`}>View</Link>
        </div>
    )
}

export default Form
