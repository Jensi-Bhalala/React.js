
import './Header.css'
import { useState } from "react"
import { app } from '../../firebase'
import { getDatabase, ref, set } from "firebase/database"  




function Header() {

    const [name, setName] = useState("");
    const [emailid, setEmailid] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 10000);

        set(ref(db, `user/${id}`), {
            name: name,
            phone: phone,
            emailid: emailid,
            message: message,
        })

        alert("Record Added...");
        setName("");
        setEmailid("");
        setPhone("");
        setMessage("");
    }
    return (
        <header className="header">
            <div className="container top_header">
                <div className="navbar-brand">
                    <img src="src/Pages/img/logo.png" alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for items..." />
                    <select>
                        <option value="All Categories">All Categories</option>
                        <option value="Mens">Men's</option>
                        <option value="Womens">Women's</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className="navbar-right">
                    <a href="#account" className="nav-link"><i className="fa fa-user"></i> Account</a>
                    <a href="#wishlist" className="nav-link"><i className="fa fa-heart"></i> Wishlist</a>
                    <a href="#cart" className="nav-link"><i className="fa fa-shopping-cart"></i> Cart</a>



                    <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa-regular fa-address-book"></i>Contact</a>


                </div>
            </div>

            {/* modal start */}
            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                <img src="/img/logo.png" alt="Logo" style={{ width: 100 }} />
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className='form-group'>
                                <div className="group">
                                    <label>Name:</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="group">
                                    <label>Company:</label>
                                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>
                                <div className="group">
                                    <label htmlFor="name">Email:</label>
                                    <input type="text" value={emailid} onChange={(e) => setEmailId(e.target.value)} />
                                </div>
                                <div className="group">
                                    <label>Phone:</label>
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className="group">
                                    <label>Massage:</label>
                                    <textarea type="text" value={massage} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <br></br>

                                <input type="Submit" defaultValue="Submit" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* modal end */}

        </header>
    );
}

export default Header;
