import React, { Component } from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Footer --> */}
                <footer>
                    <div class="sub-footer">
                        <div class="container">
                            <div class="ui grid stackable">
                                <div class="row">
                                    <div class="three wide column">
                                        <div class="social-links">
                                            <ul class="horizontal">
                                                <li>
                                                    <a href="#">
                                                        <img src="./assets/assets/icons/instagram.svg" alt="instagram"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="./assets/assets/icons/facebook.svg" alt="instagram"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="thirteen wide column">
                                        <div class="subscribe-wrap">
                                            <div class="caption">
                                                <h5>Travel discounts up to 60% off sent straight to your inbox</h5>
                                                <p>By clicking Subscribe, you have agreed to our Terms & Conditions and Privacy
                                                    Policy</p>
                                            </div>
                                            <div class="subscribe">
                                                <div class="ui input">
                                                    <input type="text" placeholder="Enter your email address"/>
                                                </div>
                                                <button class="btn btn-primary">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="container">
                            <div class="ui grid stackable">
                                <div class="six wide column">
                                    <div class="copyright">
                                        © 2014-2020 DateOut. All Rights Reserved.
                                    </div>
                                </div>
                                <div class="ten wide column">
                                    <div class="ui four column grid stackable">
                                        <div class="column">
                                            <h4>ABOUT DATEOUT</h4>
                                            <ul class="links">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Press Releases</a></li>
                                                <li><a href="#">Articles</a></li>
                                                <li><a href="#">Careers</a></li>
                                            </ul>
                                        </div>
                                        <div class="column">
                                            <h4>PARTNERSHIPS</h4>
                                            <ul class="links">
                                                <li><a href="#">Partner Login</a></li>
                                                <li><a href="#">Affiliate Partnership</a></li>
                                                <li><a href="#">Partner With Us</a></li>
                                            </ul>
                                        </div>
                                        <div class="column">
                                            <h4>TERMS OF USE</h4>
                                            <ul class="links">
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Terms And Conditions</a></li>
                                            </ul>
                                        </div>
                                        <div class="column">
                                            <button class="btn btn-line btn-block">Ask DateOut</button>
                                            <a href="#">PAYMENT CHANNEL</a>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </footer>
                {/* <!-- Footer END --> */}
            </div>
        )
    }
}

export default Footer