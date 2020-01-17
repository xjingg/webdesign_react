import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
class Categories extends Component{
    render(){

        let data = [
            {pageLink: 'category-details-left-sidebar', img: 'category1.jpg', iconClass: 'flaticon-002-welding', categoryTitle: 'Land Minning', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'category-details-left-sidebar', img: 'category2.jpg', iconClass: 'flaticon-004-walkie-talkie', categoryTitle: 'Work Management', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'category-details-left-sidebar', img: 'category3.jpg', iconClass: 'flaticon-015-cart', categoryTitle: 'Material Engineering', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'category-details-left-sidebar', img: 'category-3.jpg', iconClass: 'flaticon-010-tank-1', categoryTitle: 'Power and Energy', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'category-details-left-sidebar', img: 'category-2.jpg', iconClass: 'flaticon-004-walkie-talkie', categoryTitle: 'Land Minning', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'},
            {pageLink: 'category-details-left-sidebar', img: 'category-1.jpg', iconClass: 'flaticon-002-welding', categoryTitle: 'Work Management', categorySubtitle: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor'}
        ];

        let Datalist = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12 section-space--bottom--30" key={i}>
                    <div className="category-grid-item">
                    <div className="category-grid-item__image">
                        <div className="category-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                            <img src={`assets/img/category/${val.img}`} className="img-fluid" alt="Category Grid" />
                        </a>
                        </div>
                        <div className="icon">
                        <i className={val.iconClass} />
                        </div>
                    </div>
                    <div className="category-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>{val.categoryTitle}</a>
                        </h3>
                        <p className="subtitle">{val.categorySubtitle}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });

        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>

                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>Category</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>Category</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                {/*====================  category page content ====================*/}
                <div className="page-wrapper section-space--inner--120">
                {/*Category section start*/}
                <div className="category-section">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="category-item-wrapper">
                            <div className="row">
                                {Datalist}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*Category section end*/}
                </div>

                {/*====================  End of category page content  ====================*/}

                {/* Brand logo */}
                <BrandLogoSlider background = "grey-bg" />

                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}

export default Categories;