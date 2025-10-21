import React from "react";
import "./homeBanner.css";
import bannerimage from "../../../images/bannerimage.jpg";
import photo from "../../../images/photo.jpg";
import homeBannerItemProduct from "../../../homeProduct.json";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img className="homeBannerimg" src={bannerimage} />
      <div className="grayBackgroundHomeBanner"> </div>
      <div className="homeBannerItemDiv">
        {homeBannerItemProduct.product.map((item, ind) => {
          return (
            <div className="homeBannerItemDivCard">
              <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
              <div className="imgHomeBannerItemDivCard">
                {item.imgs.map((it, ind) => {
                  return (
                    <div className="imgBannerHomeDiv">
                      <img className="imgBannerHomeDivImg" src={it} />
                      <div className="imgBannerImgName">
                        boat Stone 1800 Bluet
                      </div>
                    </div>
                  );
                  })
                }
              </div>
              <div className="seeMoreHomeBanner">SEE More</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeBanner;
