import Header from './components/Header'
import Footer from './components/Footer'

const PageTemplate = ({ children }) =>
   <>
      <Header />
      {children}
      <Footer />

      <div className="btn-back-to-top bg0-hov" id="myBtn">
         <span className="symbol-btn-back-to-top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
         </span>
      </div>

      <div id="dropDownSelectPageTemplate2"></div>
   </>

export default PageTemplate