<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from "./navigation";
import Landing from './pages/Landing';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

const App = () => {
    return (
    <Router>
         <Navigation />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Categorys CategoryList={categorys}/>
        </Routes>
    </Router>
    )
};

export default App;