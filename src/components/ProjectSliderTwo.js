import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1
                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'service1.jpg', categoryTitle: 'London', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'service2.jpg', categoryTitle: 'New York', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'service3.jpg', categoryTitle: 'Beverly Hills', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'service4.jpg', categoryTitle: 'Miami', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="category-grid-item category-grid-item--style2">
                    <div className="category-grid-item__image">
                        <div className="category-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.categoryUrl}`}>
                            <img src={`assets/img/category/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                    </div>
                    <div className="category-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.categoryUrl}`}>{val.categoryTitle}</a>
                        </h3>
                        <p className="subtitle">{val.categoryExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.categoryUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  project grid slider area ====================*/}
                <div className="category-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title-area text-center">
                            <h2 className="section-title mb-0">Latest Projects <span className="title-icon" /></h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="category-grid-slider-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="category-slider">
                            <div className="category-slider__container category-slider__container--style2">
                                <Swiper {...params}>
                                    {DataList}
                                </Swiper>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/*====================  End of project grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;