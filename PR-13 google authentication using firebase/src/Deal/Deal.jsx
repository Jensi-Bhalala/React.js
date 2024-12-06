import React from "react";
import './deal.css'

const Deal = () => {
    return (
        <div>
            <section className="deal">
                <div className="container">
                    <div className="row">
                        <div className="deals">
                            <span><span style={{ fontSize: "20px", color: "#64b496", fontWeight: "600" }}>35%</span> OFF</span>
                            <h4 className="mt-2">Great deal on organic food.</h4>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br></br> do maecenas accumsan lacus vel facilisis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <div className="snack d-flex">
                                <div className="col-4">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" alt="" />
                                            <div className="lock">
                                                <i class="fa-regular fa-heart" style={{ color: "#64b496" }}></i>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <span className="d-block">Snacks</span>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span>(5.0)</span>
                                            <p>Best snakes with hazel nut pack 200gm</p>
                                            <h3 className="d-inline-block me-3">$145</h3>
                                            <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$150</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" alt="" />
                                            <div className="lock">
                                                <i class="fa-regular fa-heart" style={{ color: "#64b496" }}></i>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <span className="d-block">Vegetables</span>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> <span>(4.5)</span>
                                            <p>Fresh organic apple 1kg simla marming</p>
                                            <h3 className="d-inline-block me-3">$120.25</h3>
                                            <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$123.35</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="product-card">
                                        <div className="product-img">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" alt="" />
                                            <div className="lock">
                                                <i class="fa-regular fa-heart" style={{ color: "#64b496" }}></i>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <span className="d-block">Bakery</span>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span>(5.0)</span>
                                            <p>Delicious white baked fresh bread and toast</p>
                                            <h3 className="d-inline-block me-3">$20</h3>
                                            <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$22.10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="healthy">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/products-rightview.jpg" alt="" className="w-100" />
                                <div className="healthy-content text-end">
                                    <h3>Organic & Healthy<br></br>
                                        Vegetables</h3>
                                    <span className="d-block"><span style={{fontSize:"18px",fontWeight:"bold"}}>25%</span> OFF</span>
                                    <button className="mt-2">
                                        <a href="#">Shop Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Deal;