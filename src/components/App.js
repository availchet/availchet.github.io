import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import XEyes from "./XEyes";
import Error from "./Error";
import Error404 from "./Error404";

export default function App() {
    return (
        <Router basename="/">
            <Header />
            {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/xeyes">
                    <XEyes />
                </Route>
                <Route exact path="/error">
                    <Error />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/timeline">
                    <Timeline />
                </Route>
                <Route  exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route>
                    <Error404 />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
