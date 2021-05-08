import Pageable from 'pageable';
import React, { useEffect } from 'react';
import About from './about';
import Banner from './banner';
import Contact from './contact';
import './home.scss';
import Resume from './resume';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Works } from './works/works';

const Home = () => {
    let pages;
    
    useEffect(() => {
        initPagetable(pages);
    });


    return (
        <div className="home">
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Works />
            <Contact></Contact>
        </div>
    );
}

const initPagetable = (pages) => {
    // pages = new Pageable("#container", {
    //     pips: true,
    //     animation: 700,
    //     delay: 300,
    //     throttle: 50,
    //     swipeThreshold: 150,
    //     orientation: "vertical",
    //     freeScroll: true,
    // });

    setTimeout(() => {
        AOS.init();
    }, 1000);
}
export default Home;