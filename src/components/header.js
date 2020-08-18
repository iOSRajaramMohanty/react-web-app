import React, { Component } from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Header --> */}
                <header>
                    <div class="logo-wrap">
                        <button class="btn menu-button" id="menu-button">
                            <img src="./assets/assets/icons/menu.svg" alt="menu"/>
                        </button>
                        <a href="#" class="logo">
                            <img src="assets/assets/logo_white.svg" alt="logo"/>
                        </a>
                    </div>

                    

                    <nav class="desktop-menu">
                        <ul>
                            <li>
                                <div class="ui inline dropdown light-arrow icon-select">
                                    <div class="text">
                                        <img class="ui avatar image" src="assets/assets/icons/flag.png"/>
                                    </div>
                                    <i class="dropdown icon"></i>
                                    <div class="menu">
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png"/>
                                        </div>
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png"/>
                                        </div>
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="ui selection dropdown no-select-bg light-arrow">
                                    <input type="hidden" name="gender"/>
                                    <i class="dropdown icon"></i>
                                    <div class="default text">SGD</div>
                                    <div class="menu">
                                        <div class="item" data-value="1">SGD</div>
                                        <div class="item" data-value="0">OPT</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/download.svg" alt="download"/></i>
                                    <span>Download App</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/help.svg" alt="help"/></i>
                                    <span>Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/clock.svg" alt="recently"/></i>
                                    <span>Recently Viewed</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="cart-total">1</span>
                                    <i><img src="assets/assets/icons/cart.svg" alt="cart"/></i>
                                    <span>Cart</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Yuen Siang</span>
                                    <span class="avatar"><img src="./assets/assets/placeholders/avatar.png" alt="avatar"/></span>
                                </a>
                            </li>
                        </ul>
                    </nav>


                    <nav class="mobile-menu">
                        <ul>
                            {/* <!-- <li>
                                <div class="ui inline dropdown light-arrow icon-select">
                                    <div class="text">
                                        <img class="ui avatar image" src="assets/assets/icons/flag.png">
                                    </div>
                                    <i class="dropdown icon"></i>
                                    <div class="menu">
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png">
                                        </div>
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png">
                                        </div>
                                        <div class="item">
                                            <img class="ui avatar image" src="assets/assets/icons/flag.png">
                                        </div>
                                    </div>
                                </div>
                            </li> --> */}
                            {/* <!-- <li>
                                <div class="ui selection dropdown no-select-bg light-arrow">
                                    <input type="hidden" name="gender">
                                    <i class="dropdown icon"></i>
                                    <div class="default text">SGD</div>
                                    <div class="menu">
                                        <div class="item" data-value="1">SGD</div>
                                        <div class="item" data-value="0">OPT</div>
                                    </div>
                                </div>
                            </li> --> */}
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/download_dark.svg" alt="download"/></i>
                                    <span>Download App</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/help_dark.svg" alt="help"/></i>
                                    <span>Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i><img src="assets/assets/icons/clock_dark.svg" alt="recently"/></i>
                                    <span>Recently Viewed</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <!-- Header End --> */}
            </div>
        )
    }
}
export default Header