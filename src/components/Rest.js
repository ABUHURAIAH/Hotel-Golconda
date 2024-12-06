import React from 'react';
import image from '../flower-red.png';
import sms from '../sms.gif';


export default function Rest() {
  return (
    <div>
        <div className="sms-logo">
            <img src={sms} width="150px" onClick={()=>{
                    document.getElementById("ai-chat").style.display="block";
            }} />
        </div>
       <div className="notice"  id="btn" >
          <h2 style={{
            display:"inline",
          }}>IMPORTANT NOTICE</h2> 
          <div className="close" onClick={()=>{
                    document.getElementById("btn").style.display="none";
          }}>
            Close
          </div>
          <h6>The Golkonda Hotel does not seek any financial information or monetary transactions outside its officiated applications. You are advised to beware of fraudsters misusing the property’s identity. Guests are requested to contact us only through www.thegolkondahotel.com, info@thegolkondahotel.com, +91-40-66110101 for any reservations / queries.</h6>
        </div>
        <div className="phone-hambox" id="hambox">
          <a href="#">ACCOMODATION</a>
          <a href="#">FOOD & BEVERAGE</a>
          <a href="#">CONFERENCING & EVENTS</a>
          <a href="#">GALLERY</a>
        </div>
        <div className="ai-chat" id="ai-chat">
          <div className="ai-chat-up">
            <div>
              <img src={image} width="60px" style={{
                backgroundColor:"white",
              }} alt=""/>
            </div>
            <div>
              <p>
                AI Chatbot <br/>
                Virtual Assistant
              </p>
            </div>
            <div>
              <i className="fa fa-phone" id="phn" ></i>
              <i className="fa fa-minus" id="mins" ></i>
           </div>
           <div onClick={()=>{
                document.getElementById("ai-chat").style.display="none";
           }}> 
            <span id="cros" >
              &times;
            </span>
          </div>
          </div>
          <div className="ai-chat-down">
            <input type="text"/>
            <i className="fa fa-angle-right" ></i>
          </div>
        </div>
    </div>
  )
}
