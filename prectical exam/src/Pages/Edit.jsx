import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { EDIT_USER, UPDATE_USER } from '../Action/CrudAction'

const Edit = () => {
    const [name, setName] = useState("")

    let single = useSelector(state => state.crud.single)
    // console.log(single);
    let editId = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();


    useEffect(() => {
        setName(single?.name || "")
    }, [single])


    useEffect(() => {
        if (editId) {
            dispatch(EDIT_USER(editId));
        }
    }, [editId])


    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            id: single?.id,
            name,
        }
        dispatch(UPDATE_USER(obj));
        setName("")

        setTimeout(() => {
            navigate('/view');
        }, 1000)
    }


    return (
        // <div align="center">
        //     <div className='container'>
        //         <div className='row'>
        //             <form onSubmit={handleSubmit}>
        //                 <br></br>
        //                 Name : &nbsp;
        //                 <input type='text'
        //                     onChange={e => setName(e.target.value)}
        //                     value={name}
        //                 />
        //                 <br></br> <br></br>
                       
        //                 <input type='submit'
        //                     style={{
        //                         border: "none", color: "#fff",
        //                         borderRadius: "5px",
        //                         fontWeight: "700",
        //                         letterSpacing: "2px",
        //                         width: "120px"
        //                     }}
        //                     className='bg-success'
        //                 ></input>
        //                 <br></br><br></br>
        //             </form>

        //             <Link to={'/view'}>View Data</Link>
        //         </div>
        //     </div>
        // </div>
        <div className='container-fluid'>
                    <div className='row'>
                        
        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">SRNO</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    record.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{++index}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
        
                                                <td>
                                                    <button onClick={() => dispatch(Delete_user(val.id))}
                                                        className='btn btn-danger'
                                                        style={{
                                                            border: "none", color: "#fff",
                                                            borderRadius: "5px",
                                                            fontWeight: "500",
                                                            width: "80px",
                                                            backgroundColor: "red"
                                                        }}
                                                    >DELETE</button>
                                                </td>
                                                <td>
                                                    <Link to={`/edit/${val.id}`}>
                                                        <button className='btn btn-primary'
                                                            style={{
                                                                border: "none",
                                                                color: "#fff",
                                                                borderRadius: "5px",
                                                                fontWeight: "500",
                                                                width: "80px",
        
        
                                                            }}
                                                        >Edit</button>
        
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to={'/'}>Add Data</Link>
                        <Link to={'/Edit'}></Link>
                        
                    </div>
                </div>
    )
}

export default Edit
