 import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const View = ({ 
    record, 
    editData, 
    deleteUser, 
    
}) => {
    return (
        <div className="table-container">
            <table className="custom-table" border={2}>
                <thead>
                    <tr className="table-header">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Designation</th>
                        <th>Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {record.map((item) => {
                        const { id, name, email, password, city, salary, designation, status } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{password}</td>
                                <td>{city}</td>
                                <td>{salary}</td>
                                <td>{designation}</td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(id)}
                                        className="action-btn delete-btn"
                                    >
                                        Delete
                                    </button>
                                    &nbsp;
                                    <button
                                        onClick={() => editData(id)}
                                        className="action-btn edit-btn"
                                    >
                                        Edit
                                    </button>
                                </td>
                               
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default View;
