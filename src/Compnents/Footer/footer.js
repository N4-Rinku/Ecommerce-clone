import React from "react";
import "./footer.css";
import amazonlogo from "../../images/amazonlogo.png";

const footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div classNsme="footerCont1">
          <div className="contentFooterTitle">Get to Know Us</div>
          <div className = "contentFooterSubTitlediv">
            <div className = "contentFooterSubTitleCont">About Us</div>
            <div className = "contentFooterSubTitleCont">Careers</div>
            <div className = "contentFooterSubTitleCont">Press Releases</div>
            <div className = "contentFooterSubTitleCont">Amazon Science</div>
          </div>
        </div>

        <div classNsme="footerCont1">
          <div className="contentFooterTitle">Connect   With Us</div>
          <div className = "contentFooterSubTitlediv">
            <div className = "contentFooterSubTitleCont">Instagram</div>
            <div className = "contentFooterSubTitleCont">Twitter</div>
            <div className = "contentFooterSubTitleCont">Facebook</div>
            
          </div>
        </div>


        <div classNsme="footerCont1">
          <div className="contentFooterTitle">Make Money With Us</div>
          <div className = "contentFooterSubTitlediv">
            <div className = "contentFooterSubTitleCont">Sell on Amazon</div>
            <div className = "contentFooterSubTitleCont">Sell under Amazon Accelerate</div>
            <div className = "contentFooterSubTitleCont">Protect and Build Your Brand</div>
            <div className = "contentFooterSubTitleCont">Amazon Global Selling</div>
            <div className = "contentFooterSubTitleCont">Supply to Amazon</div>
            <div className = "contentFooterSubTitleCont">Amazon Pay on Merchants
            </div>
            <div className = "contentFooterSubTitleCont">Become an Affiliate</div>
            <div className = "contentFooterSubTitleCont">Fulfilment by Amazon</div>
            <div className = "contentFooterSubTitleCont">Advertise Your Products</div>
          </div>
        </div>
        <div classNsme="footerCont1">
          <div className="contentFooterTitle">Let Us Help You</div>
          <div className = "contentFooterSubTitlediv">
            <div className = "contentFooterSubTitleCont">Your Account</div>
            <div className = "contentFooterSubTitleCont">Returns Centre</div>
            <div className = "contentFooterSubTitleCont">Recalls and Product Safety Alerts</div>
            <div className = "contentFooterSubTitleCont">100% Purchase Protection</div>
            <div className = "contentFooterSubTitleCont">Amazon App Download</div>
            <div className = "contentFooterSubTitleCont">Help</div>
          </div>
        </div>
        
      </div>

      <div className="amazonImg">
        <img className="amazonImgFooter" src={amazonlogo} />
      </div>
    </div>
  );
};

export default footer;
