import React, { useState, useEffect } from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];

  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price;
  });

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right"
    });
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {cartItems.map((item, ind) => (
            <div className="cartItemBlock" key={item.id}>
              <div className="cartItemLeftBlock">
                <div className="cartItemLeftBlockImage">
                  <img className="cartItemLeftBlockImg" src={item.imageUrl} alt={item.name} />
                </div>
                <div className="cartItemLeftBlockDetails">
                  <div className="cartItemProductName">{item.name}</div>
                  <div className="inStockCart">In stock</div>
                  <div className="elgFreeShp">Eligible for FREE Shipping</div>
                  <div className="amazonFullFilledImage">
                    <img
                      className="fullfillImg"
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                      alt="Amazon Fullfilled"
                    />
                  </div>
                  <div className="removeFromCart" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove From Basket
                  </div>
                </div>
              </div>

              <div className="cartItemRightBlock">Rs {item.price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          Subtotal ({cartItems.length} items): <span className="subTotalTitleSpan">Rs {totalPrice}</span>
        </div>
        <div className="giftAddto">
          <input type="checkbox" />
          <div>This Order Contains a Gift</div>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Cart;


 
