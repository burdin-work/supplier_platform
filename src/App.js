import React from 'react';
import './styles/App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Slider from './components/Slider/Slider';
import Communication from './components/Communication/Communication';
import Experience from './components/Experience/Experience';
import Steps from './components/Steps/Steps';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <main>
                    <div className="mainBg traceryBg" />
                    <Route
                        path="/"
                        render={() => {
                            return (
                                <>
                                    <Presentation />
                                    <Slider />
                                    <Communication />
                                    <Experience />
                                    <Steps />
                                    <GetStarted />
                                </>
                            );
                        }}
                    />
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
