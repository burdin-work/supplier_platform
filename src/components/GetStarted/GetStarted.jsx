import React from 'react';

const GetStarted = () => {
    return (
        <div className="getStarted">
            <div className="getStarted__bg" />
            <div className="getStartedContainer">
                <div className="bgMask15" />
                <div className="getStarted_title">
                    <span>let’s do this</span>
                    <h1>
                        Fill up the form and we’ll get in touch within
                        {' '}
                        <br />
                        a few hours
                    </h1>
                </div>

                <div className="getStarted_form" id="getStarted_form">
                    <div className="formContainer">

                        <div className="formWrap">
                            <div className="exposition">
                                <span>Let’s get to know each other</span>
                            </div>

                            <form>
                                <h4>Hi, we are Tinvio! And you?</h4>
                                <input type="text" className="name" placeholder="Name" />
                                <input
                                    type="text"
                                    className="businessName"
                                    placeholder="Business Name"
                                />

                                <div className="phone">
                                    <input type="text" className="phone_code" placeholder="+65" />
                                    <input type="text" className="phone_number" />
                                </div>

                                <div className="submitWrap">
                                    <button type="submit" className="getStarted_submit">
                                        Get Started
                                    </button>

                                    <div className="helpWrap">
                                        <span className="help">
                                            No spam, promise
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="getStarted_meetUs">
                    <div className="meetUsContainer">

                        <div className="countries">
                            <div className="exposition">
                                <span>Or meet us in</span>
                            </div>
                            <ul>
                                <li>Singapore</li>
                                <li>Indonesia</li>
                                <li>Australia</li>
                                <li>Taiwan</li>
                                <li>Hong Kong</li>
                                <li>Thailand</li>
                                <li>India</li>
                                <li>Vietnam</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
