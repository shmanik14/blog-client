import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';
import './Sliders.css';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="container mx-auto grid grid-cols-3 gap-4 slider">
            <div class="md:col-span-2 slider-blog">
                <Slider {...settings}>
                <div className="sin-slider-blog">
                    <div className="slider-blog-img">                   
                        <img src={slider1} alt="Blog Avatar"/>
                    </div>
                    <div className="slider-blog-content">
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est.</h2>
                        <p className="author"><span><FontAwesomeIcon icon={faUser} /></span> Jane Smith</p>
                        <ul className="slider-date">
                            <li><span><FontAwesomeIcon icon={faCalendarAlt} /></span> May 15, 2021</li>
                            <li><span><FontAwesomeIcon icon={faClock} /></span> 2 min</li>
                        </ul>
                    </div>
                </div>
                <div className="sin-slider-blog">
                    <div className="slider-blog-img">                   
                        <img src={slider2} alt="Blog Avatar"/>
                    </div>
                    <div className="slider-blog-content">
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est.</h2>
                        <p className="author"><span><FontAwesomeIcon icon={faUser} /></span> Jane Smith</p>
                        <ul className="slider-date">
                            <li><span><FontAwesomeIcon icon={faCalendarAlt} /></span> May 15, 2021</li>
                            <li><span><FontAwesomeIcon icon={faClock} /></span> 2 min</li>
                        </ul>
                    </div>
                </div>
                <div className="sin-slider-blog">
                    <div className="slider-blog-img">                   
                        <img src={slider3} alt="Blog Avatar"/>
                    </div>
                    <div className="slider-blog-content">
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est.</h2>
                        <p className="author"><span><FontAwesomeIcon icon={faUser} /></span> Jane Smith</p>
                        <ul className="slider-date">
                            <li><span><FontAwesomeIcon icon={faCalendarAlt} /></span> May 15, 2021</li>
                            <li><span><FontAwesomeIcon icon={faClock} /></span> 2 min</li>
                        </ul>
                    </div>
                </div>
                </Slider>
            </div>
            <div className="trending-post">
                <h3 className="trending-title">Trending Posts</h3>
                <ul>
                    <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                    <li><a href="#">Minima ducimus labore modi quos.</a></li>
                    <li><a href="#">Corrupti consectetur ab ex dignissimos.</a></li>
                    <li><a href="#">Dolores deserunt quas architecto recusandae.</a></li>
                    <li><a href="#">At consectetur distinctio necessitatibus tempore!</a></li>
                    <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                    <li><a href="#">Perferendis voluptatum assumenda aspernatur recusandae!</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sliders;