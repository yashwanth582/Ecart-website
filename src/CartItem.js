import React from "react";

const CartItem = (props)=>  {
     
        
     
        const {price, title, qty} = props.product;
        const {product, 
               onIncreaseQuantity, 
               onDecreaseQuantity,
               onDeleteProduct
            } =    props;
         return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image} src={product.img}/>
                </div>
                <div className="right-block">
                <div style={{ fontSize: 35 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
                        onClick={()=> onIncreaseQuantity(product)}
                     />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" 
                        onClick={()=> onDecreaseQuantity(product)}
                    />
                    <img
                         alt="delete" 
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                         onClick={()=> onDeleteProduct(product.id)}
                         />
                </div>
                </div>
            </div>
        )
    }

const styles = {
    image: {
       height: 110,
       width: 110,
       borderRaduis: 4,
       background: '#ccc'
    }
}

export default CartItem;
