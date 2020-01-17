import React, { Component } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import Pages from './components/Pages';
import Features from './components/Features';
import Suggestions from './components/Suggestions';

class Demo extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleScroll() {
        if(this.mount){
            this.setState({scroll: window.scrollY});
        }
    }

    
    scrollToTop (){
        scroll.scrollToTop();
    }
  
    componentDidMount() {
        this.mount = true;
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentDidUpdate() {
        this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `${this.state.height}px` :
        document.body.style.paddingTop = 0;

        this.state.scroll > this.state.top ? 
        document.getElementById("scroll-top").classList.add("show") :
        document.getElementById("scroll-top").classList.remove("show") ;
    }

    
    componentWillUnmount(){
        this.mount = false;
    }
    
    render(){

        let demos = [
            {demoImg: 'home-1.jpg', demoLink: 'home-one', demoTitle: 'Home One'},
            {demoImg: 'home-2.jpg', demoLink: 'home-two', demoTitle: 'Home Two'},
            {demoImg: 'home-3.jpg', demoLink: 'home-three', demoTitle: 'Home Three'},
            {demoImg: 'about.jpg', demoLink: 'about-us', demoTitle: 'About Page'},
            {demoImg: 'category-1.jpg', demoLink: 'categories', demoTitle: 'Category Page'},
            {demoImg: 'category-details-1.jpg', demoLink: 'category-details-left-sidebar', demoTitle: 'Category Details (Left Sidebar)'},
            {demoImg: 'category-details-2.jpg', demoLink: 'category-details-right-sidebar', demoTitle: 'Category Details (Right Sidebar)'},
            {demoImg: 'project-1.jpg', demoLink: 'products', demoTitle: 'Product Page'},
            {demoImg: 'project-details-1.jpg', demoLink: 'product-details', demoTitle: 'Product Details'},
            {demoImg: 'blog-1.jpg', demoLink: 'blog-left-sidebar', demoTitle: 'Blog 2 Column (Left Sidebar)'},
            {demoImg: 'blog-2.jpg', demoLink: 'blog-right-sidebar', demoTitle: 'Blog 2 Column (Right Sidebar)'},
            {demoImg: 'blog-details-1.jpg', demoLink: 'blog-details-left-sidebar', demoTitle: 'Blog Details (Left Sidebar)'},
            {demoImg: 'blog-details-2.jpg', demoLink: 'blog-details-right-sidebar', demoTitle: 'Blog Details (Right Sidebar)'},
            {demoImg: 'contact.jpg', demoLink: 'contact-us', demoTitle: 'Contact'}
        ];

        let features = [
            {featureIconName: 'icon-genius', featureTitle: 'Latest Products', featureDescription: 'aaaaaaaaa'},
            {featureIconName: 'icon-mobile', featureTitle: 'New Edition', featureDescription: ' bbbbbbbbbbbb.'},
            {featureIconName: 'icon-profile-male', featureTitle: 'Smells Great', featureDescription: ' ccccccccccc.'},
            {featureIconName: 'icon-beaker', featureTitle: 'Spring Edition', featureDescription: 'dddddddddd.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Summer Edition', featureDescription: 'eeeeeee.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Fall Edition', featureDescription: 'fffffff.'},
            {featureIconName: 'icon-search', featureTitle: 'Free Gifts', featureDescription: 'gggggg.'},
            {featureIconName: 'icon-upload', featureTitle: 'New Features', featureDescription: 'hhhhhhhhh.'},
            {featureIconName: 'icon-megaphone', featureTitle: 'Limited Edition', featureDescription: 'jjjjjjj.'}
        ];

        let suggestionsHTML = [
            {imgUrl: '', suggestionLink:'', suggestionTitle: 'Simply - '},
            
        ];

        let suggestionsWP = [
            {imgUrl: '', suggestionLink:'', suggestionTitle: 'Lalala'},
           
        ];
        
        return(
            <div>
                <div className="landing-page-wrapper">
                    {/* Start Header Section */}
                    <nav className={`header-section section sticker ${this.state.scroll > this.state.top ? "stick" : ""}`}>
                        <div className="container">
                        <div className="row justify-content-between align-items-center">
                            {/* Logo */}
                            <div className="logo col-6 text-left">
                            <a href="/"><img src="assets/img/landing/logo-light.png" className="img-fluid" alt="" /><img src="assets/img/landing/logo.png" alt="" className="sticky-logo img-fluid" /></a>
                            </div>
                            {/* Logo */}
                            <div className="col-6 text-right">
                            <a className="buy-btn" href=" ">Contact Us</a>
                            </div>
                        </div>
                        </div>
                    </nav>
                    {/* Header Section End */}
                    {/* Start Hero Section */}
                    <div className="hero-section section overlay landing-hero-bg">
                        <div className="container">
                        <div className="row">
                            <div className="hero-content text-center col-12">
                            <h1><strong>XX</strong>New Edition</h1>
                            <p>Scented candles are iconic here</p>
                            <Link className="buy-btn" to ="demo" smooth={true} duration={500}>View Demo</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Hero Section End */}

                    {/* Pages Section Start */}
                    <Pages demos = {demos} />
                    {/* Pages Section End */}

                    {/* Features Section Start */}
                    <Features features = {features} />
                    {/* Features Section End */}

                    {/* Suggestions HTML Section Start */}
                    <Suggestions background="" category = "intro" suggestions = {suggestionsHTML} />
                    {/* Suggestions HTML Section End */}

                    {/* Suggestions WP Start */}
                    <Suggestions background="bg-gray" category = "history" suggestions = {suggestionsWP} />
                    {/* Suggestions WP Section End */}

                    {/* Footer Section Start */}
                    <div className="footer-section section pt-65 pb-50 overlay bg-img" data-bg="assets/img/landing/hero-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Make your shopping experience enjoyful</h1>
                                    <div className="buy-btn float-right" href="">Contact Us</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Section End */}
                    {/*====================  scroll top ====================*/}
                    <button className="scroll-top" id="scroll-top" onClick={this.scrollToTop}>
                        <i className="ion-android-arrow-up" />
                    </button>
                    {/*====================  End of scroll top  ====================*/}
                </div>

            </div>
        )
    }
}

export default Demo;