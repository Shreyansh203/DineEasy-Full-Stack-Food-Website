import React from 'react';
import './Caraousal.css';

function Caraousal() {
    return (
        <div>
            <div>
                <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <form className="d-flex align-items-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '0.25rem 0 0 0.25rem' }} />
                                <button className="btn btn-success" type="submit" style={{ borderRadius: '0 0.25rem 0.25rem 0' }}>Search</button>
                            </form>

                        </div>

                        <div className="carousel-item active">
                            <img
                                src="https://source.unsplash.com/random/800x400/?burger"
                                className="d-block w-100"
                                alt="..."
                                style={{ filter: "brightness(50%)" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://source.unsplash.com/random/800x400/?pizza"
                                className="d-block w-100"
                                alt="..."
                                style={{ filter: "brightness(50%)" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://source.unsplash.com/random/800x400/?pasta"
                                className="d-block w-100"
                                alt="..."
                                style={{ filter: "brightness(50%)" }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Caraousal;
