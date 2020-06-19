import React from "react";
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import "./layout1.scss"



function Layout1() {
    return (
        <div className="wrapper">
            {/* nav of html element */}
            <nav className="main-nav">

                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            {/*end nav of html element */}
            {/* Start of Top  Containainer */}
            <section className="top-container">
                <header className="showcase">
                    <h1>Your Web Presence</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum exercitationem, praesentium tempora excepturi magnam.</p>
                    <a href="#" className="btn">Read More</a>
                </header>
                <div className="top-box top-box-a">
                    <h4>Membership</h4>
                    <p className="price">$199/mo</p>
                    <a href className="btn">Buy Now</a>
                </div>
                <div className="top-box top-box-b">
                    <h4>Pro Membership</h4>
                    <p className="price">$199/mo</p>
                    <a href className="btn">Buy Now</a>
                </div>
            </section>
            {/*End of Top  Containainer */}

            {/*Start of Box section */}
            <section className="boxes">
                <div className="box">
                    <i class="fas fa-chart-pie fa-4x"></i>
                    <h3>Analytics</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, nulla.</p>
                </div>
                <div className="box">
                    <i class="fas fa-globe fa-4x"></i>
                    <h3>Marketing</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, nulla.</p>
                </div>
                <div className="box">
                    <i class="fas fa-cog fa-4x"></i>
                    <h3>Development</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, nulla.</p>
                </div>
                <div className="box">
                    <i class="fas fa-users fa-4x"></i>
                    <h3>Support</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, nulla.</p>
                </div>
            </section>
            {/*End of Box section */}

            {/* Info Section */}
            <section className="info">
                <img src={img2} alt="" />
                <div>
                    <h2>Your Business on the web</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam numquam perferendis atque eos delectus velit autem doloribus! Esse temporibus corrupti aperiam excepturi, delectus fuga quia amet accusantium alias atque!</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </section>
            {/* End of Info Section */}
            {/*  <!-- Portfolio --> */}
            <section className="portfolio">
                <img src="https://source.unsplash.com/random/200x200" alt="" />
                <img src="https://source.unsplash.com/random/201x200" alt="" />
                <img src="https://source.unsplash.com/random/202x200" alt="" />
                <img src="https://source.unsplash.com/random/203x200" alt="" />
                <img src="https://source.unsplash.com/random/204x200" alt="" />
                <img src="https://source.unsplash.com/random/205x200" alt="" />
                <img src="https://source.unsplash.com/random/206x200" alt="" />
                <img src="https://source.unsplash.com/random/207x200" alt="" />
                <img src="https://source.unsplash.com/random/208x200" alt="" />
            </section>
            <footer><p>gridbiz &copy; 2018</p></footer>

        </div >
    );
}

export default Layout1;
