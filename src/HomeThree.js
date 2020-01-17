import React, {Component} from 'react';
import NavBar from './components/NavBar';
import HeroSliderThree from './components/HeroSliderThree';
import FeatureIconText from './components/FeatureIconText';
import AboutText from './components/AboutText';
import CategoryTabTwo from './components/CategoryTabTwo';
import TestimonialSlider from './components/TestimonialSlider';
import ProjectImageGallery from './components/ProjectImageGallery'
import BlogGridTwo from './components/BlogGridTwo';
import BrandLogoSlider from './components/BrandLogoSlider';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

class HomeThree extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderThree/>
                
                {/* Feature icon text */}
                <FeatureIconText/>
                
                {/* About text */}
                <AboutText/>
                
                {/* category Tab */}
                <CategoryTabTwo/>
                
                {/* Testimonial Slider */}
                <TestimonialSlider/>

                {/* Project image gallery */}
                <ProjectImageGallery />
                
                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />
                
                {/* Blog grid */}
                <BlogGridTwo  background = "" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default HomeThree;