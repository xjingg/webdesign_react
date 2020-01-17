import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderTwo from './components/HeroSliderTwo';
import VideoCta from './components/VideoCta';
import ProjectSliderTwo from './components/ProjectSliderTwo';
import CategoryTab from './components/CategoryTab';
import TestimonialSlider from './components/TestimonialSlider';
import TeamJob from './components/TeamJob';
import BlogGrid from './components/BlogGrid';
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeTwo extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderTwo/>
                
                {/* Video CTA */}
                <VideoCta/>
                
                {/* Project Slider */}
                <ProjectSliderTwo/>
                
                {/* CategoryTab */}
                <CategoryTab/>
                
                {/* Testimonial Slider */}
                <TestimonialSlider/>
                
                {/* Team job */}
                <TeamJob/>

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />
                
                {/* Blog grid */}
                <BlogGrid  background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeTwo;