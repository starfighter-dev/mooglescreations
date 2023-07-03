function Footer() {
  return (

    <footer className="bg6 p-t-45 p-b-43 p-l-45 p-r-45">
      <div className="flex-w p-b-90">
        <div className="w-size6 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">
            GET IN TOUCH
          </h4>
          <div>
            <p className="s-text7 w-size27">
              Contact us on Social Media using the links below!
            </p>
            <div className="flex-m p-t-30">
              <a href="https://www.facebook.com/profile.php?id=100090845754728" target="_blank" className="fs-18 color1 p-r-20 fa fa-facebook"></a>
              <a href="https://www.instagram.com/mooglescreations/" target="_blank" className="fs-18 color1 p-r-20 fa fa-instagram"></a>
              <a href="https://www.youtube.com/@Mo0gleable" target="_blank" className="fs-18 color1 p-r-20 fa fa-youtube-play"></a>
              <a href="https://www.buymeacoffee.com/moogles" target="_blank" className="fs-18 color1 p-r-20 fa fa-coffee"></a>
            </div>
          </div>
        </div>
        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Categories
          </h4>
          <ul>
            <li className="p-b-9">
              <a href="/shop/wallets" className="s-text7">
                Wallets
              </a>
            </li>
            <li className="p-b-9">
              <a href="/shop/handbags" className="s-text7">
                Handbags
              </a>
            </li>
            <li className="p-b-9">
              <a href="/shop/backpacks" className="s-text7">
                Backpacks
              </a>
            </li>
            <li className="p-b-9">
              <a href="/shop/morsels" className="s-text7">
                Morsels
              </a>
            </li>
            <li className="p-b-9">
              <a href="/shop/discounted" className="s-text7">
                Discounted Items
              </a>
            </li>
          </ul>
        </div>
        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Links
          </h4>
          <ul>
            <li className="p-b-9">
              <a href="index.html#" className="s-text7">
                Search
              </a>
            </li>
            <li className="p-b-9">
              <a href="/about" className="s-text7">
                About Us
              </a>
            </li>
            <li className="p-b-9">
              <a href="index.html#" className="s-text7">
                Contact Us
              </a>
            </li>
            <li className="p-b-9">
              <a href="/policies" className="s-text7">
                Policies
              </a>
            </li>
          </ul>
        </div>
        <div className="w-size7 p-t-30 p-l-15 p-r-15 respon4">
          <h4 className="s-text12 p-b-30">
            Help
          </h4>
          <ul>
            <li className="p-b-9">
              <a href="index.html#" className="s-text7">
                Track Order
              </a>
            </li>
            <li className="p-b-9">
              <a href="index.html#" className="s-text7">
                Shipping
              </a>
            </li>
            <li className="p-b-9">
              <a href="index.html#" className="s-text7">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="w-size8 p-t-30 p-l-15 p-r-15 respon3">
          <h4 className="s-text12 p-b-30">
            Newsletter
          </h4>
          <form>
            <div className="effect1 w-size9">
              <input className="s-text7 bg6 w-full p-b-5" type="text" name="email" placeholder="email@example.com"/>
                <span className="effect1-line"></span>
            </div>
            <div className="w-size2 p-t-20">

              <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="t-center p-l-15 p-r-15">
        <a href="index.html#">
          <img className="h-size2" src="images/icons/paypal.png" alt="IMG-PAYPAL"/>
        </a>
        <a href="index.html#">
          <img className="h-size2" src="images/icons/visa.png" alt="IMG-VISA"/>
        </a>
        <a href="index.html#">
          <img className="h-size2" src="images/icons/mastercard.png" alt="IMG-MASTERCARD"/>
        </a>
        <a href="index.html#">
          <img className="h-size2" src="images/icons/express.png" alt="IMG-EXPRESS"/>
        </a>
        <a href="index.html#">
          <img className="h-size2" src="images/icons/discover.png" alt="IMG-DISCOVER"/>
        </a>
        <div className="t-center s-text8 p-t-20">
          Copyright © 2017 Colorlib. All rights reserved.
        </div>
      </div>
    </footer>



  )
}

export default Footer