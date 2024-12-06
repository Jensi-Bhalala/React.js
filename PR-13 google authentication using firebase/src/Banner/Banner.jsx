import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <>
            <section>
                <div className='banner'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner position-relative">
                            <div className="carousel-item active">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner.jpg" className="d-block w-100" alt="..." height={"650px"}/>
                                <div className="col-lg-12">
                                    <div className="banner-content">
                                        <h5>
                                            <span>100%</span>
                                            Organic Vegetables
                                        </h5>
                                        <h1>Explore fresh & <br></br>juicy fruits.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br> reiciendis beatae consequuntur.</p>
                                        <button className='mt-3'>
                                            <a href="#">Shop Now</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner-2.jpg" className="d-block w-100" alt="..." height={"650px"}/>
                                <div className="col-lg-12">
                                    <div className="banner-content">
                                        <h5>
                                            <span>100%</span>
                                            Organic Vegetables
                                        </h5>
                                        <h1>Explore fresh & <br></br>juicy fruits.</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet<br></br> reiciendis beatae consequuntur.</p>
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
        </>
    )
}

export default Banner;