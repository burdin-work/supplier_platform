import React from 'react';
import step1 from '../../assets/images/steps/step1.png';
import step2 from '../../assets/images/steps/step2.png';
import step3 from '../../assets/images/steps/step3.png';

const Steps = () => {
    return (
        <div className="steps">
            <div className="steps__description">
                <span>Are you ready?</span>
                <h2>3 Simple Steps to Get Started</h2>
            </div>

            <div className="steps__Container">
                <div className="stepsGroup">
                    <div className="step step1">
                        <img src={step1} alt="step" className="step__image" />
                        <h4>Get in Touch With Us</h4>
                        <p>Fill up the form and we’ll reach out to you</p>
                    </div>

                    <div className="step step2">
                        <img src={step2} alt="step" className="step__image" />
                        <h4>Connect to Your Clients</h4>
                        <p>They’ll receive a fully guided tutorial on how to order</p>
                    </div>
                    <div className="step step3">
                        <img src={step3} alt="step" className="step__image" />
                        <h4>Onboarded In a Heartbeat</h4>
                        <p>
                            Activated and live
                            within a day
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
