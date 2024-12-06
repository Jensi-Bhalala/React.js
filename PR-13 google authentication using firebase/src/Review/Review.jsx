import React from "react"
import './review.css'

const Review = () => {
    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="popular">
                            <h2 className="text-center" style={{ color: "#2b2b2d", fontSize: "32px", fontWeight: "700" }}>Great Words From People</h2>
                            <p className="text-center" style={{ fontSize: "17px", color: "#7a7a7a" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore lacus vel facilisis.</p>
                        </div>
                        <div className="people d-flex align-itens-center justfy-content-center" style={{marginTop:"60px"}}>
                            <div className="col-4">
                                <div className="word">
                                    <div className="review-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="" />
                                    </div>
                                    <span>Co Founder</span>
                                    <h4>Stephen Smith</h4>
                                    <p>"eiusmpsu dolor sit amet, conse cte tur<br></br> ng elit, sed do eiusmod tem lacus vel<br></br> facilisis."</p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="word">
                                    <div className="review-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="" />
                                    </div>
                                    <span>Co Founder</span>
                                    <h4>Stephen Smith</h4>
                                    <p>"eiusmpsu dolor sit amet, conse cte tur<br></br> ng elit, sed do eiusmod tem lacus vel<br></br> facilisis."</p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="word">
                                    <div className="review-img">
                                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="" />
                                    </div>
                                    <span>Co Founder</span>
                                    <h4>Stephen Smith</h4>
                                    <p>"eiusmpsu dolor sit amet, conse cte tur<br></br> ng elit, sed do eiusmod tem lacus vel<br></br> facilisis."</p>
                                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review;