import React from "react";
import './Product.css';

const Product = () => {
    return (
        <>
            <section style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="popular">
                            <h2 className="text-center" style={{ color: "#2b2b2d", fontSize: "32px", fontWeight: "700" }}>Popular Products</h2>
                            <p className="text-center" style={{ fontSize: "17px", color: "#7a7a7a" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore lacus vel facilisis.</p>
                        </div>
                        <div className="product mt-4 d-flex">
                            <div className="col-3">
                                <div className="side-list">
                                    <div className="category">
                                        <div className="col-12 sub-category d-flex align-items-center justify-content-between">
                                            <span style={{ color: "#64b496" }}>All</span>
                                            <i className="fa-solid fa-arrow-right" style={{ color: "#64b496" }}></i>
                                        </div>
                                        <div className="col-12 sub-category d-flex align-items-center justify-content-between">
                                            <span>Snacks</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="col-12 sub-category d-flex align-items-center justify-content-between">
                                            <span>Vegetable</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="col-12 sub-category d-flex align-items-center justify-content-between">
                                            <span>Fruit</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="col-12 sub-category d-flex align-items-center justify-content-between">
                                            <span>Bakery</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                        <div className="col-12 position-relative">
                                            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg" alt="" style={{ height: "515px", width: "320px", borderRadius: "5px", margin: "5px",objectFit:"cover" }} />
                                            <div className="juicy">
                                                <h3 style={{ color: "#fff", fontSize: "32px" }}>Juicy</h3>
                                                <h2 style={{ color: "#f7e8aa", fontWeight: "bolder", fontSize: "38px" }}>FRUITS</h2>
                                                <p style={{ color: "#fff", fontSize: "20px" }}>100% Natural</p>
                                                <button>
                                                    <a href="#">Shop Now</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 ps-2">
                                <div className="pro-list">
                                    <div className="categories d-flex flex-wrap">
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
                                                    </div>
                                                </div>
                                                <div className="product-content text-center">
                                                    <span className="d-block">Vegetables</span>
                                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> <span>(4.5)</span>
                                                    <p>Fresh organic villa farm lomon 500gm pack</p>
                                                    <h3 className="d-inline-block me-3">$120.25</h3>
                                                    <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$123.35</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
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
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
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
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
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
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/11.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
                                                    </div>
                                                </div>
                                                <div className="product-content text-center">
                                                    <span className="d-block">Snacks</span>
                                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span>(5.0)</span>
                                                    <p>Sweet crunchy nut mix 250gm pack</p>
                                                    <h3 className="d-inline-block me-3">$120.25</h3>
                                                    <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$123.25</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3"> 
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/3.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
                                                    </div>
                                                </div>
                                                <div className="product-content text-center">
                                                    <span className="d-block">Fruits</span>
                                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i> <span>(3.2)</span>
                                                    <p>Organic fresh venila farm watermelon 5kg</p>
                                                    <h3 className="d-inline-block me-3">$50.30</h3>
                                                    <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$72.60</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/10.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
                                                    </div>
                                                </div>
                                                <div className="product-content text-center">
                                                    <span className="d-block">Snacks</span>
                                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span>(5.0)</span>
                                                    <p>Sweet crunchy nut mix 250gm pack</p>
                                                    <h3 className="d-inline-block me-3">$120.25</h3>
                                                    <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$123.15</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="product-card">
                                                <div className="product-img">
                                                    <img src="	https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/17.jpg" alt="" />
                                                    <div className="lock">
                                                        <i class="fa-regular fa-heart" style={{color:"#64b496"}}></i>
                                                    </div>
                                                </div>
                                                <div className="product-content text-center">
                                                    <span className="d-block">Vegetables</span>
                                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> <span>(5.0)</span>
                                                    <p>Delicious white baked fresh bread and toast</p>
                                                    <h3 className="d-inline-block me-3">$20</h3>
                                                    <span style={{ textDecoration: "line-through", fontSize: "15px", color: "#7a7a7a" }}>$22.10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;