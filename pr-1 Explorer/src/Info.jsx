import { Component } from "react";

class Users extends Component {
    render() {
        return (
            <div>
                <h2 align="center">USERS</h2>
                    <table align="center" border={1} cellPadding={10}>
                        <thead>
                            <tr>
                                <th>GRID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>PASSWORD</th>
                                <th>COURSE</th>
                                <th>CITY</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.data.map((data, i) => (
                                       <tr>
                                       <td>{data.grid}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>{data.course.join(" , ")}</td>
                                        <td>{data.city}</td>
                                       </tr>
                            ))
                        }
                        </tbody>
                    </table>
                
            </div>
        );
    }
}
export default Users