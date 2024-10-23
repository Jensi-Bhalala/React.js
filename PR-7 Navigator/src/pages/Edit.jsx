import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Edit = () => {
    const location = useLocation();

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [editid, setEditId] = useState("")

    const [allrecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

    useEffect(() => {
        setName(location?.state?.name)
        setPhone(location?.state?.phone)
        setEditId(location?.state?.id)
    }, [location?.state])

    const handleSubmit = (e) => {
        e.preventDefault();
        let up = allrecord.map((val, i) => {
            if (val.id == editid) {
                val.name = name,
                    val.phone = phone
            }
            return val;
        })
        localStorage.setItem("users", JSON.stringify(up));
        alert("record update")
        navigate("/")
    }

    return (
        <div align="center">
            <h1>Edit User</h1>

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
            <Link to={`/`}>View</Link>
        </div>
    )
}

export default Edit
