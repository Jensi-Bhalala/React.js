import { Component } from "react";
class Header extends Component{
    constructor(){
        super();
        console.log("hello");
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">content</a>
                    </li>

                </ul>
            </div>
        )
    }
} 

export default Header;
