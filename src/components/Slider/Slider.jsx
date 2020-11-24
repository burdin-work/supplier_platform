import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import slide1 from '../../assets/images/slider/Orders.png';
import slide2 from '../../assets/images/slider/Operational Costs.png';
import slide3 from '../../assets/images/slider/Analytics.png';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.sliderDescription,
            nav2: this.sliderScreen,
        });
    }

    previous() {
        this.sliderDescription.slickPrev();
    }

    next() {
        this.sliderDescription.slickNext();
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 400,
        };

        const { nav1, nav2 } = this.state;

        return (
            <div className="slidersContainer">
                <div className="slidersWrap">

                    <Slider
                        {...settings}
                        asNavFor={nav2}
                        ref={(slider) => (this.sliderDescription = slider)}
                        className="sliderDescription"
                        appendDots={(dots) => (
                            <div>
                                <div className="sliderNavWrap">
                                    <div className="navContainer">
                                        <div className="toggleNavWrap">
                                            <button
                                                type="button"
                                                className="slick-prev"
                                                onClick={this.previous.bind(this)}
                                            >
                                                prev
                                            </button>
                                            <ul>{dots}</ul>
                                            <button
                                                type="button"
                                                className="slick-next"
                                                onClick={this.next.bind(this)}
                                            >
                                                next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    >
                        <div className="descriptionContainer">
                            <div className="descriptionWrap">
                                <h3>
                                    All your orders in
                                    <br />
                                    one place
                                </h3>
                                <p>
                                    Say no more to chunky emails
                                    {' '}
                                    <br />
                                    and messy WhatsApp
                                    {' '}
                                    <br />
                                    messages. Receive
                                    and
                                    manage your orders in one platform
                                </p>
                            </div>
                        </div>
                        <div className="descriptionContainer">
                            <div className="descriptionWrap">
                                <h3>
                                    Detailed description
                                    <br />
                                    of all sales
                                </h3>
                                <p>
                                    You will be able to see a detailed description of all sales and
                                    cash
                                    transactions.
                                </p>
                            </div>
                        </div>
                        <div className="descriptionContainer">
                            <div className="descriptionWrap">
                                <h3>
                                    The most detailed business
                                    analysis
                                </h3>
                                <p>
                                    Here is everything you need to make the most detailed business
                                    analysis.
                                </p>
                            </div>
                        </div>
                    </Slider>

                    <div className="sliderScreenMask">
                        <Slider
                            {...settings}
                            asNavFor={nav1}
                            ref={(slider) => (this.sliderScreen = slider)}
                            arrows={false}
                            dots={false}
                            className="sliderScreen"
                        >
                            <div className="slideWrap">
                                <div className="slideMask">
                                    <img className="slide1" src={slide1} alt="Orders" />
                                </div>
                            </div>
                            <div className="slideWrap">
                                <div className="slideMask">
                                    <img className="slide2" src={slide2} alt="Operational Costs" />
                                </div>
                            </div>

                            <div className="slideWrap">
                                <div className="slideMask">
                                    <img className="slide3" src={slide3} alt="Analytics" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="bgMask65" />
                </div>
            </div>
        );
    }
}
