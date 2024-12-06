import React from 'react';
import image2 from '../flower-red.png';
import image3 from '../001.png';
import image4 from '../002.png';
import image5 from '../003.png';

export default function Hyderabadi() {
    return (
        <div className="hyderabadi">
            <div className="icon1">
                <img src={image2} style={{
                        width:"80px",
                    }} />
            </div>
            <h2>PACHEES SAAL SE DIL SE HYDERABADI</h2>
            <h6>Despite being India’s fastest-growing metro, it's the spirit of its warm reception that has made <br />
                Hyderabad <br />
                the  <a href="" style={{
                        textDecoration:"none",
                    }}> best city to live in</a> for 5 consecutive years.</h6>
            <h6>For three decades we’ve had the honour of serving patrons of this city in true Nizami style. <br />
                Situated at the heart of Hyderabad, we have been a melting pot of comfort and luxury for <br />
                businessmen, leisure travellers and families with first-class facilities and an experience that is <br />
                truly The heart of Hyderabad!</h6> <br />
            <div className="hyderabadi-icons">
                <div className="icon-a">
                    <img src={image3}  style={{
                        width:"30px",
                    }} /> 30 minutes from RGIA
                </div>
                <div className="icon-b">
                    <img src={image4} style={{
                        width:"30px",
                    }} /> 30 minutes from HITECH City
                </div>
                <div className="icon-c">
                    <img src={image5} style={{
                        width:"30px",
                    }} /> 40 minutes from Financial District
                </div>
            </div>
        </div>
    )
}
