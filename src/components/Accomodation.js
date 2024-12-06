import React from 'react';
import image6 from '../1.jpeg';
import image7 from '../2.jpeg';
import image8 from '../3.jpeg';
import image9 from '../4.jpeg';

export default function Accomodation() {
  return (
    <div className="accomodation">
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="accomodation-left">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={image6} className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={image7} className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={image8} className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src={image9} className="d-block w-100" />
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
            }} >ACCOMMODATION</h3>
        </div>
        <div className="accomodation-right-down">
            The legacy of hospitality is 
            celebrated through our hotel 
            rooms that offer a sense of 
            peace through their thoughtful
             design and décor,
              complemented by spacious
               layouts, fully equipped
                bathrooms, and comfortable
                 bedding. <br/>
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
