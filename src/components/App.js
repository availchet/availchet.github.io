import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

export default function App() {
    return (
        <Router basename={'/~kandharc/portfolio'}>
            <div>
                <Header />

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/timeline">
                        <Timeline />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Redirect from="*" to="/" />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}
