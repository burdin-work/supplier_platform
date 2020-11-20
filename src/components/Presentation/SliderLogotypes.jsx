import React from 'react';
import Slider from 'react-slick';
import logo1 from '../../assets/images/logotypes/GoCheken.png';
import logo2 from '../../assets/images/logotypes/Jolliebean.svg';
import logo3 from '../../assets/images/logotypes/Bens.svg';
import logo4 from '../../assets/images/logotypes/SimplyWrapps.png';
import logo5 from '../../assets/images/logotypes/Italian.png';

const SliderLogotypes = () => {
    const customeSlider = React.createRef();

    // eslint-disable-next-line no-unused-vars
    const sliderSettings = {
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            }],
    };

    return (
        <div className="logotypesContainer">
            <div className="logotypesMask">
                <Slider
                    {...sliderSettings}
                    ref={customeSlider}
                    className="logotypes"
                >
                    <div className="logotypes__logoWrap">
                        <img
                            src={logo1}
                            alt="GoCheken"
                            className="logo_GoCheken"
                        />
                    </div>
                    <div className="logotypes__logoWrap">
                        <img
                            src={logo2}
                            alt="Jolliebean"
                            className="logo_Jolliebean"
                        />
                    </div>
                    <div className="logotypes__logoWrap">
                        <img
                            src={logo3}
                            alt="Bens"
                            className="logo_Bens"
                        />
                    </div>
                    <div className="logotypes__logoWrap">
                        <img
                            src={logo4}
                            alt="SimplyWrapps"
                            className="logo_SimplyWrapps"
                        />
                    </div>
                    <div className="logotypes__logoWrap">
                        <img
                            src={logo5}
                            alt="Italian"
                            className="logo_Italian"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SliderLogotypes;
