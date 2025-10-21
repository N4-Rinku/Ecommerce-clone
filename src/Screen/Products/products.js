import React from "react";
import "./products.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import productDetail from "./products.json";
import {useSelector,useDispatch } from 'react-redux';
import  {addToCart} from '../../redux/actions/actions';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Products = () => {


  const options = [
    { name: "Cameras & Photography" },
    { name: "Car & Vehicle Electronics" },
    { name: "Computers & Accessories" },
    { name: "GPS & Accessories" },
    { name: "Home Audio " },
    { name: "Home Theater, TV & Video" },
    { name: "Mobiles & Accessories" },
    { name: "Portable Media Players" },
    { name: "Radio Communication Tablets" },
    { name: "Telephones & Accessories Warranties" },
    { name: "eBook Readers & Accessories" },
    { name: "Wearable Technology" },

    { name: "General Purpose Batteries & Battery Chargers" },
    { name: "Headphones, Earbuds & Accessories" },
    { "' name": "Power Accessories" },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart=(item) =>{
    toast.success("Added To Cart",{
      position: "bottom-right"
    })
    dispatch(addToCart(item));

  }

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItmesSubMenu">
          Mobiles & Accessories
        </div>
        <div className="productTopBannerItmesSubMenu">Laptop & Accessories</div>
        <div className="productTopBannerItmesSubMenu">
          {" "}
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItmesSubMenu"> Audio</div>
        <div className="productTopBannerItmesSubMenu">Cameras</div>
        <div className="productTopBannerItmesSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItmesSubMenu">Smart Technology</div>
        <div className="productTopBannerItmesSubMenu">Musical Instruments</div>
        <div className="productTopBannerItmesSubMenu">Office & Stationary</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Accessories
            </div>
            {options.map((item, ind) => {
              return (
                <div
                  className="productsPageMainLeftCategoryContentSub"
                  key={ind}>
                  <div className="productsPageMainLeftCategoryContentind">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="amazonPrime">
            <div ClassName="amazonPrimeTop">Amazon Prime</div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeText">
                <CheckIcon
                  sx={{ fontsize: "25px" }}
                  className="amazonPrimeCheckIcon"
                />
                <div className="amazonPrimeTextTitle">prime</div>
              </div>
            </div>
          </div>
          <div className="amazonPrime">
            <div ClassName="amazonPrimeTops">Delivery Day</div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeText">
                <div className="amazonPrimeTextTitles">Get It by Tomorrow</div>
              </div>
            </div>
          </div>
          <div className="Brands">
            Brands
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> Apple</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles">Samsung</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> boAt</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> OnePlus</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> iQOO</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> Redmi</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles">realme</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> JBL</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> Sony</div>
            </div>
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles"> Noise</div>
            </div>
          </div>
          <div className="deals">
            <div className="discount"> Deals & Discounts</div>
            <div className="discounts">All Discounts</div>
            <div className="todaysDeals">Today's Deals</div>
          </div>
          <div className="availability">
            Availability
            <div className="amazonPrimeBox">
              <CheckBoxOutlineBlankIcon
                sx={{ fontsize: "20px" }}
                className="amazonprimeCheckBox"
              />
              <div className="amazonPrimeTextTitles">Include out of Stock</div>
            </div>
          </div>
        </div>
        <div className="productsPageMainrightCategory">
          <div ClassName="productsPageMainrightCategories">
            <div className="productPageMainrightCategoryTitle">
              {" "}
              <img
                className="imagetop"
                src="https://m.media-amazon.com/images/G/31/img24/hp/ultra/Category_Banner_HP_Laptop_15-fd1197tu_1500x300._CB547845294_.jpg"
              />{" "}
            </div>
            <div className=" productPageMainrightCategorytext">
              <div className="productPageMainrightCategoryTitlesmart">
                Smartchoice Tablets | Curated selection for every use
                <div className="productPageMainrightCategoryTitletablets">
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Everyday-1._CB547134019_.png"
                    />
                  </div>
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Education-2._CB547134019_.png"
                    />
                  </div>
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Entertainment-3._CB547134019_.png"
                    />
                  </div>
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Productivity-4._CB547134019_.png"
                    />
                  </div>
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Creativity-5._CB547134019_.png"
                    />
                  </div>
                  <div className="tablets">
                    <img
                      className="tabletsimg"
                      src="https://m.media-amazon.com/images/G/31/img21/Tblets/BTS/Kisok_Smartchoice_Explore_02._CB547171332_.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="productPageMainrightCategoryLaptop">
              <div className="productPageMainrightCategoryLaptopTitle">
                <div className="image">
                  {" "}
                  <img
                    className="img"
                    src=" https://m.media-amazon.com/images/G/31/img15/Halo/smartchoice/Smarchoice-Halo._CB547221392_.png"
                  />{" "}
                  Shop now
                </div>
                <div className="image">
                  {" "}
                  <img
                    className="img"
                    src="https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_1._CB612633941_.png"
                  />{" "}
                  Laptops
                </div>
                <div className="image">
                  {" "}
                  <img
                    className="img"
                    src=" https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_2._CB612633941_.png"
                  />
                  Smartwatches
                </div>
                <div className="image">
                  {" "}
                  <img
                    className="img"
                    src="https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_3._CB612633941_.png"
                  />
                  Headphones
                </div>
                <div className="image">
                  {" "}
                  <img
                    className="img"
                    src=" https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_6._CB612633941_.png"
                  />
                  Computer <br /> Accessories
                </div>
              </div>
              <div className="pt">
                <div className="images">
                  {" "}
                  <img
                    className="imgs"
                    src="https://m.media-amazon.com/images/G/31/img15/Halo/smartchoice/Gaming_laptop_halo._CB547221358_.png"
                  />
                  Gaming <br />
                  Laptops
                </div>
                <div className="images">
                  {" "}
                  <img
                    className="imgs"
                    src="https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_4._CB612633941_.png"
                  />{" "}
                  Tablets
                </div>
                <div className="images">
                  {" "}
                  <img
                    className="imgs"
                    src=" https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_5._CB612633941_.png"
                  />
                  Cameras
                </div>
                <div className="images">
                  {" "}
                  <img
                    className="imgs"
                    src="https://m.media-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/ATF/Halos/Halos_300x300_10._CB612633941_.png"
                  />{" "}
                  Sound <br /> Speakers
                </div>
              </div>
            </div>
            <div className="newtrending">
              <div className="newTrendingTitle">
                {" "}
                New & trending: Laptops
                <div className="newTrendingTitleText">
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/978x900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/978-x-9002._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/hp/ultra/978x900_1._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/asus/f16/AMZ__978x900_copy._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/Category_Banner_HP_Laptop_14-Gr1023tu__978x900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/hp/ultra/978x900_1._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/Category_Banner_HP_Laptop_14-Gr1023tu__978x900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/asus/f16/AMZ__978x900_copy._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/asus/live/AMZ_978-x-900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/Amazon_JanBAU_CoreUltra2_978x900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img23/BAU-Dec/Laptops_Brand-Banners/Intel_Mainstream2_978x900._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img23/BAU-April/Laptops_Brands/Acer_SwiftGo_Launch_978._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                  <div className="newTrendingTitleText1">
                    {" "}
                    <img
                      className="newTrendingTitleTextImg"
                      src="https://m.media-amazon.com/images/G/31/img24/Laptops_Ayesha/978x900_2._SS900_QL85_.jpg"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="itemsImageProductPage">
              {productDetail.product.map((item,index) => {
                  return (
                    <div className="itemsImageProductPageOne" key ={ item.id}>
                      <div className="imgBlockitemsImageProductPageOne">
                        <img
                          className="productImageProduct"
                          src={ item.imageUrl}
                        />
                      </div>
                      <div className="productNameProduct">
                        <div>
                          {
                            item.name
                          }
                        </div>
                        <div className="productNameProductRating">
                          <StarRateIcon
                            sx={{ fontsize: "16px", color: "#febd69" }}
                          />
                          <StarRateIcon
                            sx={{ fontsize: "16px", color: "#febd69" }}
                          />
                          <StarRateIcon
                            sx={{ fontsize: "16px", color: "#febd69" }}
                          />
                          <StarRateIcon
                            sx={{ fontsize: "16px", color: "#febd69" }}
                          />
                          <StarOutlineIcon
                            sx={{ fontsize: "16px", color: "#febd69" }}
                          />
                        </div>
                        <div className="priceProductDetailPage">
                          <div className="currencyText">₹</div>
                          <div className="rateHomeDetail">
                            <div className="rateHomeDetailsPrice">{item.price} </div>
                            <div className="addtobasketBtn" onClick = {() =>{handleAddToCart(item)}}>Add To Cart</div>
                          </div>
                        </div>
                        <div className="offProductPage">
                          Upto 10% off on select cards
                        </div>
                        <div className="freeDeliveryHomepage">
                          Free Delivery By Amazon
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Products;
