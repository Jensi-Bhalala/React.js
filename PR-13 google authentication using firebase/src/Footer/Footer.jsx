import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div>
            <section style={{ marginTop: "100px",backgroundColor:"#f7f7f8",borderTop:"1px solid #e9e9e9",paddingTop:"80px"}}>
                <div className="container">
                    <div className="row">
                        <div className="footer d-flex align-items-start">
                            <div className="col-4">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" style={{ paddingBottom: "15px" }} />
                                <p style={{ color: "#777" }}>Carrot is the biggest market of grocery products. Get<br></br> your daily needs from our store.</p>
                                <div className="contact-menu">
                                    <ul className="d-flex align-items-center mt-2 ps-0">
                                        <li><i className="fa-solid fa-location-dot" style={{ paddingRight: "30px", fontSize: "18px", color: "#64b496" }}></i> </li>
                                        <li><span style={{ fontSize: "14px", color: "#777" }}>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span></li>
                                    </ul>
                                    <ul className="d-flex align-items-center mt-2 ps-0">
                                        <li><i class="fa-regular fa-envelope" style={{ paddingRight: "30px", fontSize: "18px", color: "#64b496" }}></i></li>
                                        <li><a href="#">example@email.com</a></li>
                                    </ul>
                                    <ul className="d-flex align-items-center mt-2 ps-0">
                                        <li><i class="fa-solid fa-phone" style={{ paddingRight: "30px", fontSize: "18px", color: "#64b496" }}></i></li>
                                        <li><a href="#">+91 123 4567890</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-2">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><h4>Company</h4></li>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Delivery Information</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">contact Us</a></li>
                                            <li><a href="#">Support Center</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="footer-2">
                                    <div className="footer-menu">
                                        <ul>
                                            <li><h4>Category</h4></li>
                                            <li><a href="#">Dairy & Bakery</a></li>
                                            <li><a href="#">Fruits & Vegetable</a></li>
                                            <li><a href="#">Snack & Spice</a></li>
                                            <li><a href="#">Juice & Drinks</a></li>
                                            <li><a href="#">Chicken & Meat</a></li>
                                            <li><a href="#">Fast Food</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="footer-3">
                                    <h4>Subscribe Our Newsletter</h4>
                                    <form>
                                        <input type="text" name="" id="" placeholder="Search here" />
                                        <i class="fa-solid fa-paper-plane"></i>
                                    </form>
                                    <div className="d-flex align-items-center mt-2">
                                        <div className="social my-2 me-2">
                                            <i class="fa-brands fa-facebook"></i>
                                        </div>
                                        <div className="social m-2">
                                            <i class="fa-brands fa-twitter"></i>
                                        </div>
                                        <div className="social m-2">
                                            <i class="fa-solid fa-globe"></i>
                                        </div>
                                        <div className="social m-2">
                                            <i class="fa-brands fa-instagram"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="image m-1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" alt="" />
                                        </div>
                                        <div className="image m-1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" alt="" />
                                        </div>
                                        <div className="image m-1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" alt="" />
                                        </div>
                                        <div className="image m-1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg" alt="" />
                                        </div>
                                        <div className="image m-1">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-end text-center py-3" style={{borderTop:"1px solid #e9e9e9",marginBottom:"0"}}>
                            <p>© 2024 <a href="#">Carrot</a>, All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer;