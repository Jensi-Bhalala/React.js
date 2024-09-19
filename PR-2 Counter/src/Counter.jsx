import React from "react"

const Counter = ({no,plus,minus,reset}) => {
    return(
        <div align="center" className=" bg-info p-5">
            <h1>Counter App</h1>
                <h2>Count : {no}</h2>
                <button onClick={() => plus()} className="m-1">+</button>
                <button onClick={() => reset()} className="m-1">Reset</button>  
                {
                    no === 0 ? (
                        <button disabled onClick={() => minus()} className="m-1">-</button>
                    ) : (
                        <button onClick={() => minus()} className="m-1">-</button>
                    )
                }
        </div>
    )
}

export default Counter