import { useContext } from 'react'
import './CartItems.css'
import remove_icon from "../Assets/cart_cross_icon.png"

import { ShopContext } from '../../Context/ShopContext'



export const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div  className='cartitems-format-mains cartitems-format'>
                        <img src={e.image} className='carticon-product-icon' alt="" />
                         <p>{e.name}</p>
                         <p>{e.new_price}</p>
                         <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                         <p>${e.new_price*cartItems[e.id]}</p>
                         <img  src={remove_icon}  onClick={()=>{removeFromCart(e.id)}} className='cartitems-remove-icon' alt="" />
                        </div>
                        <hr />
                       
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                            <div className="cartitem-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr />
                            <div className="cartitem-total-item">
                                <p>Shopping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                           <div className="cartitem-total-item">
                            <h1>Total</h1>
                            <h3>${getTotalCartAmount()}</h3>
                           </div>
                            
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>if you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo code ' name="" id="" />
                        <button>#Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};






