import React from 'react';
import './offer.css';

const Offer = () => {
    return (
        <>
            <section style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="main-box">
                                <div className="col-12">
                                    <div className="box">
                                        <h5 style={{color:"#64b496"}}>Cake & Milk</h5>
                                        <span>(65 items)</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <h5>Fresh Meat</h5>
                                        <span>(30 items)</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <h5>Vegetables</h5>
                                        <span>(25 items)</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <h5>Apple & Mango</h5>
                                        <span>(45 items)</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <h5>Strawberry</h5>
                                        <span>(68 items)</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <h6>View More</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="main-img">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/3.jpg" className='d-block w-100 object-fit-cover' height={"625px"} alt="" />
                                <div className="img-content">
                                    <span style={{display:"block", textAlign:"center"}}>Cake</span>
                                    <button>
                                        <a href="#">Shop Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="main-img">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/4.jpg" className='d-block w-100 object-fit-cover' height={"625px"} alt="" />
                                <div className="img-content">
                                    <span style={{display:"block", textAlign:"center"}}>Milk</span>
                                    <button>
                                        <a href="#">Shop Now</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Offer;