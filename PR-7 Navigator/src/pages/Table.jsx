import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Table = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState("")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [filterData, setfilterData] = useState([])
    const [mdelete, setMdelete] = useState([])


    const allusers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    const [record, setRecord] = useState(allusers)

    const userDelete = (id) => {
        let d = record.filter(val => val.id != id);
        localStorage.setItem("users", JSON.stringify(d));
        setRecord(d);
        alert("record delete");
    }

    const changeStatus = (id, st) => {
        if (st == "active") {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "inactive"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("status successfully changed");
        } else {
            let up = record.map((val, i) => {
                if (val.id == id) {
                    val.status = "active"
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(up));
            setRecord(up);
            alert("status successfully changed");
        }

    }

    useEffect(() => {
        let filtered = [...allusers]

        if (status != "") {
            filtered = filtered.filter(val => val.status == status);
        } else {
            setfilterData(allusers)
        }

        if (search !== "") {
            filtered = filtered.filter(value => value.name.toLowerCase().includes(search.toLowerCase()));

        } else {
            setfilterData(allusers)
        }

        if (sort != "") {
            filtered.sort((a, b) => {
                if (sort === "asc") {
                    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
                } else if (sort === "dsc") {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
                }
            });

        } else {
            setfilterData(allusers)
        }
        setfilterData(filtered)
    }, [status, search, sort, record])

    const reset = () => {
        setfilterData(allusers);
        setStatus("");
        setSearch("");
        setSort("");
    }


    const multipleDeleteRecord = (id, checked) => {
        let old = [...mdelete];
        if (checked) {
            old.push(id)
        } else {
            old = old.filter(val => val != id)
        }
        setMdelete(old)
    }

    const multipleDelete = () => {
        let d = record.filter(val => !mdelete.includes(val.id));

        localStorage.setItem("users", JSON.stringify(d));
        setRecord(d)
        alert("record delete");
        setMdelete([])
    }

    return (
        <div align="center">
            <h1>View User</h1>

            <select onChange={(e) => setStatus(e.target.value)} value={status} style={{width:"200px",backgroundColor:"#f2f2f2"}} className='p-1 m-2 rounded'>
                <option value="">--select status--</option>
                <option value="active">active</option>
                <option value="inactive">inactive</option>
            </select>

            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder='search here'  style={{width:"300px",backgroundColor:"#f2f2f2"}} className='p-1 m-2 rounded'/>

            <select onChange={(e) => setSort(e.target.value)} value={sort} style={{width:"200px",backgroundColor:"#f2f2f2"}} className='p-1 m-2 rounded'>
                <option value="">---select sort---</option>
                <option value="asc">A-Z</option>
                <option value="dsc">Z-A</option>
            </select>




            <button onClick={() => reset()} style={{width:"100px",backgroundColor:"#f2f2f2"}} className='p-1 m-2 rounded'>Reset</button>

            <br></br><br></br>



            <div className="container">
                <table cellpadding="5" border={1} className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>
                                <button onClick={() => multipleDelete()}>Delete</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            filterData.map((u, i) => {
                                const { id, name, phone, status } = u
                                return (
                                    <tr key={i}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{phone}</td>
                                        <td>
                                            {
                                                status == "active" ? (
                                                    <button onClick={() => changeStatus(id, status)} style={{ backgroundColor: "green" }}>
                                                        {status}
                                                    </button>
                                                ) : (
                                                    <button onClick={() => changeStatus(id, status)} style={{ backgroundColor: "red" }}>
                                                        {status}
                                                    </button>
                                                )
                                            }
                                        </td>
                                        <td>
                                            <span onClick={() => userDelete(id)}><i className=''><MdDelete style={{ color: "orange" }} />
                                            </i></span>&nbsp;&nbsp;
                                            <span onClick={() => navigate(`/edit`, { state: u })}><i><MdEdit style={{ color: "blue" }} /></i></span>
                                        </td>
                                        <td>
                                            <input type="checkbox" checked={mdelete.includes(id)} onChange={(e) => multipleDeleteRecord(id, e.target.checked)} />
                                        </td>
                                    </tr>
                                )
                            })
                        }



                    </tbody>
                </table>
            </div>
            <Link to={`/add`}>Add</Link>
        </div >
    )
}

export default Table




