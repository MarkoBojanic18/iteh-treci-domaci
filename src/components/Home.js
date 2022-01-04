import React from "react";
import './HomeStyle.css'
import Navbar from "./Navbar";
import Hero from './Hero'
import Pricing from "./Pricing";
import Favor from "./Favor";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Favor />
            <Testimonials />
        </div>
    )
}

export default Home