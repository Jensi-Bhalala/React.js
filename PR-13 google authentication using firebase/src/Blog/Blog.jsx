import React from "react";
import './blog.css'

const Blog = () => {
    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="popular">
                            <h2 className="text-center" style={{ color: "#2b2b2d", fontSize: "32px", fontWeight: "700" }}>Latest News</h2>
                            <p className="text-center" style={{ fontSize: "17px", color: "#7a7a7a" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore lacus vel facilisis.</p>
                        </div>
                        <div className="main-card d-flex align-items-center justify-content-center mt-3">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-content">
                                        <span>By Admin |    <a href="#">Snacks</a></span>
                                        <h5 style={{fontSize:"17px",fontWeight:"700",margin:"5px 0px 8px"}}>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="card-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg" alt="" />
                                        <div className="img-btn">
                                            <h4>10</h4>
                                            <h5>oct</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-content">
                                        <span>By Admin |    <a href="#">Snacks</a></span>
                                        <h5 style={{fontSize:"17px",fontWeight:"700",margin:"5px 0px 8px"}}>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="card-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg" alt="" />
                                        <div className="img-btn">
                                            <h4>9</h4>
                                            <h5>sep</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-content">
                                        <span>By Admin |    <a href="#">Snacks</a></span>
                                        <h5 style={{fontSize:"17px",fontWeight:"700",margin:"5px 0px 8px"}}>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                    <div className="card-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg" alt="" />
                                        <div className="img-btn">
                                            <h4>12</h4>
                                            <h5>oct</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog;