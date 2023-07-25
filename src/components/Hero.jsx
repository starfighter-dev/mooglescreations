import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Hero() {

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  }

  return (
    <section className="slide1">
      <div className="wrap-slick1">
      <div className="slick1">
          <Slider {...sliderSettings}>
            <>
            <div className="item-slick1 item1-slick1" style={{ backgroundImage: 'url(images/bag.jpg)' }}>
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span className="caption1-slide1 m-text1 t-center m-b-15">
                  New Arrivals July 2023
                </span>
                <h2 className="caption2-slide1 xl-text1 t-center m-b-37">
                  Amazing bags!
                </h2>
                <div className="wrap-btn-slide1 w-size1 ">
                  <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            </>
            <>
            <div className="item-slick1 item2-slick1" style={{ backgroundImage: 'url(images/lineup.jpg)' }}>
              <div className="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
                <span className="caption1-slide1 m-text1 t-center m-b-15">
                  Items on Sale
                </span>
                <h2 className="caption2-slide1 xl-text1 t-center m-b-37">
                  Nab a Bargain!
                </h2>
                <div className="wrap-btn-slide1 w-size1 ">
                  <a href="product.html" className="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            </>
          </Slider>
          </div>
      </div>
    </section>


  )
}

export default Hero