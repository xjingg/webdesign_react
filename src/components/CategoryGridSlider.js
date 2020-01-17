import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class CategoryGridSlider extends Component{
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
            {img: 'category1.jpg', categoryTitle: 'London', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'category2.jpg', categoryTitle: 'New York', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'category3.jpg', categoryTitle: 'Beverly Hills', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
            {img: 'category4.jpg', scategoryTitle: 'Miami', categoryExcerpt: 'Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor', categoryUrl: 'category-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="icon">
                        <i className={val.iconName} />
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.categoryTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">Our Services <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default CategoryGridSlider;