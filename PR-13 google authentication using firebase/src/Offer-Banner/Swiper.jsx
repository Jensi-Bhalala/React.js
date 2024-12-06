import React from "react";
import './swiper.css';

const Swiper = () => {
    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="offer d-flex justify-content-center">
                            <div className="col-4 m-2">
                                <div className="offer-img">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/2.jpg" alt="" />
                                    <div className="offer-content">
                                        <h3>Fresh <br></br>Snacks & Sweets</h3>
                                        <span className="d-block"><span style={{ color: "#64b496", fontSize: "20px", fontWeight: "700" }}>20%</span> Off on first order</span>
                                        <button>
                                            <a href="#">Shop Now</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 m-2">
                                <div className="offer-img">
                                    <img src="	https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/3.jpg" alt="" />
                                    <div className="offer-content">
                                        <h3>Fresh & healthy <br></br>Organic Fruits</h3>
                                        <span className="d-block"><span style={{ color: "#64b496", fontSize: "20px", fontWeight: "700" }}>20%</span> Off on first order</span>
                                        <button>
                                            <a href="#">Shop Now</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 m-2">
                                <div className="offer-img">
                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/1.jpg" alt="" />
                                    <div className="offer-content">
                                        <h3>Healthy<br></br> Bakery Products</h3>
                                        <span className="d-block"><span style={{ color: "#64b496", fontSize: "20px", fontWeight: "700" }}>20%</span> Off on first order</span>
                                        <button>
                                            <a href="#">Shop Now</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="row">
                        <div className="pack d-flex justify-content-center">
                            <div className="col-3">
                                <div className="packing">
                                    <i className="fa-solid fa-boxes-packing"></i>
                                    <h3>Product Packing</h3>
                                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="packing">
                                <i class="fa-solid fa-headset"></i>
                                    <h3>24X7 Support</h3>
                                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="packing">
                                <i class="fa-solid fa-truck"></i>
                                    <h3>Delivery in 5 Days</h3>
                                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="packing">
                                <i class="fa-solid fa-money-check-dollar"></i>
                                    <h3>Payment Secure</h3>
                                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Swiper;