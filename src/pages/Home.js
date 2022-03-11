import React from 'react';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';


const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;