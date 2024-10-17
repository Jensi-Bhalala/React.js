import React from 'react'
import "./App.css";
import { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [edit, setEdit] = useState("");
  const [record, setrecord] = useState([]);

  const handlSubmit = (e) => {
    e.preventDefault();

    if (!date || !name || !task) {
      alert("PLEASE ADD NAME,DATE AND TASK..");
      return;
    }
    let obj = {
      id: edit ? edit : Math.floor(Math.random() * 10000),
      name: name,
      date: date,
      task: task,
    };


    if (edit) {
      let updateRecords = record.map((val) => val.id === edit ? obj : val);
      localStorage.setItem('user', JSON.stringify(updateRecords));
      setrecord(updateRecords);
      alert("RECORD UPDATE..!");
    }
    else {
      let allRecord = [...record, obj];
      localStorage.setItem("user", JSON.stringify(allRecord));
      setrecord(allRecord);
      alert("RECORD ADD..!");
    }


    setName("");
    setDate("");
    setTask("");
    seteditId("");
  }

  const handleDelete = (id) => {
    let filterRecord = record.filter((val) => val.id !== id);
    localStorage.setItem("user", JSON.stringify(filterRecord))
    setrecord(filterRecord);
    alert("RECORD DELETE..!")
  }

  const handleEdit = (val) => {
    setName(val.name);
    setDate(val.date);
    setTask(val.task);
    seteditId(val.id);
  }

  const handleClear = () => {
    setName("");
    setDate("");
    setTask("");
    setedit("");
  }

  return (
    <div>
      <div className="container text-center align-items-center">


        <div className="form-container">
          <div className="card">
            <h3>TODO APP</h3>
            <form onSubmit={handlSubmit}>

              <div className="input-form">
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="input-form mt-3">
                <input type="date" placeholder='Enter Date' onChange={(e) => setDate(e.target.value)} value={date} />
              </div>

              <div className="input-form mt-3">
                <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} value={task} />
              </div>

              <div className="button-group">

                &nbsp;<button type="submit" className="btn-primary" >
                  {edit ? 'Update Task':<i><FaPlus /></i>}
                </button>&nbsp;&nbsp;

                <button type="button" className='btn-secondary' onClick={handleClear}>
                <MdDelete />
                </button>

              </div>
            </form>
          </div>


          <div className="input-list text-start">
            {record.length > 0 ? (
              record.map((val) => (
                <div className="input-card" key={val.id}>
                  <div className="input-details">
                    <h5>{val.name}</h5>
                    <h6>{val.date}</h6>
                    <p>{val.task}</p>
                    <div className="input-status text-center">
                      <button className="btn-edit" onClick={() => handleEdit(val)}>
                      <i><FaEdit /></i>
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(val.id)}>
                      <i><RiDeleteBin6Fill /></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="input-no">
                <p className='text-center'>PLEASE ADD TASK..!!</p>
              </div>
            )
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
