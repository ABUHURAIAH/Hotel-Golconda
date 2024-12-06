import React from 'react';
import insta from '../insta.png';
import fb from '../fb.png';
import twitter from '../twitter.png';
import footer from '../footer.png'

export default function Footer() {
    return (
        <>
            <div class="footer">
                <div class="footer-up">
                    <div class="col">
                        <h4>LOCATION</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1521713937336!2d78.45114847462733!3d17.404483402313456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97406a8572c3%3A0xa02e681b1a4add23!2sThe%20Golkonda%20Hotel!5e0!3m2!1sen!2sin!4v1728135872477!5m2!1sen!2sin" width="300" style={{
                            border: "0"
                        }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="col">
                        <h4>CONTACT US</h4>
                    <p>
                        The Golkonda Hotel
                        Banjara Hills
                        Hyderabad, Telangana - 500028
                        Email: info@thegolkondahotel.com
                        Call us :040 66110101
                    </p>
                    </div>
                    <div class="col">
                        <h4>ABOUT US</h4>
                        <a href="">Explore Hyderabad</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Services</a>
                        <a href="">Careers</a>
                        <a href="">Hotel 360°</a>
                        <a href="">F&B 360°</a>
                        <a href="">Hotel 360°</a>
                    </div>
                    <div class="col">
                        <h4>Sign up for our newsletter</h4>
                        Email ID:
                        <input type="email" />
                    </div>
                    <div class="col">
                        <img src={fb} style={{
                            width: "60px"
                        }} />
                        <img src={insta} style={{
                            width: "60px"
                        }} />
                        <img src={twitter} style={{
                            width: "60px"
                        }} />
                        {/* <!-- <img src="Images/Footer Icons/youtube.svg" width="60px"/> --> */}
                        <div class="footer-logo">
                            <img src={footer} style={{
                                width: "110px"
                            }} />
                        </div>
                    </div>
                </div>
                <div class="footer-down">
                    <h4>2024 Golkonda Hotel, Inc. All Rights Reserved.</h4>
                </div>
            </div>
        </>
    )
}
