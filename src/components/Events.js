import React from 'react';
import image15 from '../15.jpeg';
import image16 from '../16.jpeg';
import image17 from '../17.jpeg';
import image18 from '../18.jpeg';
import image19 from '../19.jpeg';
import image20 from '../20.jpeg';
import image21 from '../21.png';



export default function Events() {
    return (
        <div className="events">
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="accomodation-left">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image15} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image16} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image17} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image18} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image19} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image20} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image21} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="accomodation-right">
                <div className="accomodatio-right-up">
                    <h3 style={{
                overflow:"hidden",
            }}>CONFERENCING & EVENTS</h3>
                </div>
                <div className="accomodation-right-down">
                    The Golkonda Hotel’s unique and inspired conferencinag facilities cater to corporate meetings and seminars with a variety of venues, as well as magnificent outdoor spaces. Set the standard for unforgettable events with The Golkonda Hotel. <br />
                    <div className="book">
                        <button>
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
