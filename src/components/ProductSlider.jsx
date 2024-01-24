import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Figure, Image, Button, Ratio } from 'react-bootstrap';

function ProductSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        autoplay: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className='deal-slider'>
            <div className="sliderItem">
                <div className="sliderInner rounded bg-white border">
                    <Link className='position-relative'>
                        <div className='productTag'>
                            Hot
                        </div>
                        <Ratio aspectRatio={'1x1'}>
                            <Image src='https://ae01.alicdn.com/kf/S9f1f5e06f12d438797c742f992050ce8a.jpg_480x480.jpg_.webp' />
                        </Ratio>
                        <div className="productIcons btn-group-vertical btn-group btn-group-sm">
                            <Button type="button">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </Button>
                            <Button type="button">
                                <i class="fa-regular fa-heart"></i>
                            </Button>
                            <Button type="button">
                                <i class="fa-solid fa-arrows-rotate"></i>
                            </Button>
                        </div>
                    </Link>
                    <div className="productContent p-3">
                        <Link className="categoryTag">
                            Jackets
                        </Link>
                        <h4 className="head-h4 productTitle">
                            Winter New Men's
                        </h4>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i class="fa-solid fa-star" key={star} style={{ color: star <= 4 ? 'gray' : 'gold' }}></i>
                            ))}
                        </div>
                        <div className='productBottom'>
                            <div className="price">
                                $17.97
                            </div>
                            <div>
                                <Button type="button"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>

        
    )
}

export default ProductSlider;