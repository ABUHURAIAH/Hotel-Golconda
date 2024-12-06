import React from 'react'
// no image 10
import image11 from '../11.jpeg';
import image12 from '../12.jpeg';
import image13 from '../13.jpeg';
import image14 from '../14.jpeg';

export default function Food() {
  return (
    <div className="food">
    <div className="food-right">
        <div className="accomodatio-right-up">
            <h3 style={{
                overflow:"hidden",
            }}>FOOD & BEVARAGES</h3>
        </div>
        <div className="accomodation-right-down">
            The hotel houses multiple dining venues, each with its own unique experience. Be it Hyderabad’s award-winning Nizami fine dining restaurant – Jewel of Nizam, classic cocktails at the contemporary Zanzibar, or a quick bite at Melange, the all-day coffee shop, be sure to dine with us during your stay here. <br/>
            <div className="book">
                <button>
                    BOOK NOW
                </button>
            </div>
        </div>
    </div>
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="accomodation-left">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={image11} className="d-block w-100"/>
                  </div>
                  <div className="carousel-item">
                    <img src={image12} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={image13} className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src={image14} className="d-block w-100" alt="..."/>
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
</div>
  )
}
