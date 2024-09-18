import { Component } from "react";

class Users extends Component {
    render() {
        return (
            <div>
                <h2 align="center">USERS INFORMATION</h2>
                    <table align="center" border={1} cellPadding={5}>
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
                            this.props.info.map((info, i) => (
                                       <tr>
                                       <td>{info.grid}</td>
                                        <td>{info.name}</td>
                                        <td>{info.email}</td>
                                        <td>{info.password}</td>
                                        <td>{info.course.join(" , ")}</td>
                                        <td>{info.city}</td>
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