import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function FeaturedProducts() {

   const [featured, setFeatured] = useState([]);

   useEffect(() => {
      fetch('https://api.starfighter.dev/moogle/products?featured=true&limit=5')
         .then(results => results.json())
         .then(data => {
            setFeatured(data.results);

         });
   }, []);

   const sliderSettings = {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 6000,
      arrows: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   };

   return (
      <>
         <section className="newproduct bgwhite p-t-45 p-b-105">
            <div className="container">
               <div className="sec-title p-b-60">
                  <h3 className="m-text5 t-center">
                     Featured Products
                  </h3>
               </div>

               <div className="container">
                  <Slider {...sliderSettings}>
                     {featured.map((product, index) => (
                        <div key={product.id} className="item-slick2 p-l-15 p-r-15">
                           <div className="block2">
                              <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                                 <img src="images/item-02.jpg" alt="IMG-PRODUCT" />
                                 <div className="block2-overlay trans-0-4">
                                    <a href="index.html#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                       <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                       <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                    </a>
                                    <div className="block2-btn-addcart w-size1 trans-0-4">

                                       <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                          Add to Cart
                                       </button>
                                    </div>
                                 </div>
                              </div>
                              <div className="block2-txt p-t-20">
                                 <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                                    {product.name}
                                 </a>
                                 <span className="block2-price m-text6 p-r-5">
                                    £{product.price / 100}
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </section>


      </>
   )
}

function FeaturedProduct() {
   return (
      <>
      </>
   );

}

export default FeaturedProducts
