import { useContext } from 'react'
import './CartItems.css'
import remove_icon from "../Assets/cart_cross_icon.png"

import { ShopContext } from '../../Context/ShopContext'



export const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

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
                        <div  className='cartitems-format'>
                        <img src={e.image} className='carticon-product-icon' alt="" />
                         <p>{e.name}</p>
                         <p></p>
                         <button className='cartitems-quantity'></button>
                         <p></p>
                         <img src={remove_icon}  onClick={()=>{removeFromCart()}} className='' alt="" />
                        </div>
                        <hr />
                       
                    </div>
                }
            })}
        </div>
    );
};






