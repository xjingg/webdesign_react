import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

class CategoryGallery extends Component{
    render(){
                
        /* category image gallery slider params*/

        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.ht-swiper-button-next',
                prevEl: '.ht-swiper-button-prev'
            },
            renderPrevButton: () => (
            <div className="ht-swiper-button-prev ht-swiper-button-nav"><i className="ion-ios-arrow-left" /></div>
            ),
            renderNextButton: () => (
            <div className="ht-swiper-button-next ht-swiper-button-nav"><i className="ion-ios-arrow-forward" /></div>
            )
        };

        /* category image gallery data */

        let imageGalleryData = [
            {img: 'category-details-1.jpg'},
            {img: 'category-details-2.jpg'},
            {img: 'category-details-3.jpg'},
            {img: 'category-details-4.jpg'},
            {img: 'category-details-5.jpg'},
            {img: 'category-details-6.jpg'}
        ];

        
        /* category image gallery component */

        let ImageGalleryDataList = imageGalleryData.map((val, i) => {
            return(
                <div className="swiper-slide category-gallery__single-slide" key={i}>
                    <div className="item">
                        <img src={`assets/img/category/${val.img}`} className="img-fluid" alt="gallery data" />
                    </div>
                </div>
            )
        });


        return(
            <div>
                <div className="category-gallery">
                    <Swiper {...params}>
                        {ImageGalleryDataList}
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default CategoryGallery;