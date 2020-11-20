import React from 'react';
import confetti from '../../assets/images/icons/confetti.gif';
import desktop from '../../assets/images/desktop.png';
import SliderLogotypes from './SliderLogotypes';

const Presentation = () => {
    return (
        <div className="presentation">
            <div className="presentationBg" />
            <div className="adaptiveWrap">
                <h3>For a smarter supply chain</h3>
                <h1>
                    Take your business to the next level
                    {' '}
                    <br />
                    with Tinvio’s Supplier Platform
                </h1>
                <a href="/" className="presentation__button">Get Started Now</a>

                <div className="helpWrap">
                    <div className="help">
                        Yes, it’s free
                        <img src={confetti} alt="confetti" className="confetti" />
                    </div>
                </div>
            </div>

            <div className="adaptiveIllustrations" />

            <div className="desktopMask">
                <img src={desktop} alt="desktop" className="desktop" />
            </div>

            <div className="partners">

                <h1>
                    Trusted by 1000+
                    {' '}
                    <br />
                    partners across APAC
                </h1>
                <SliderLogotypes />
            </div>

        </div>
    );
};

export default Presentation;
