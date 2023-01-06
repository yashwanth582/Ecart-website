import React from "react";

class CartItem extends React.Component {
    constructor(){
        super()
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity = () => {
        // this.state.qty +=1
        // console.log('this.state', this.state)
        // setState form 1, setState() is a function that taken from React.component class that we have inherited
    //  this.setState({
    //     qty: this.state.qty + 1
    //  })
    // this is set state form 2
    // this form is used when previous is required
    this.setState((prevState) => {
        return {
            qty: prevState.qty + 1
        }
    })
    }

    decreaseQuantity = () => {
        
    // this is set state form 2
    // this form is used when previous is required
    const { qty } = this.state;
    if(qty ===0){
        return;
    }
    this.setState((prevState) => {
        return {
            qty: prevState.qty - 1
        }
    })
    }
    render (){
        const {price, title, qty} = this.state;
         return (
            <div className="cart-item">
                <div className="left-block">
                <img style={styles.image}/>
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
                        onClick={this.increaseQuantity}
                     />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" 
                        onClick={this.decreaseQuantity}
                    />
                    <img
                         alt="delete" 
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                    />
                </div>
                </div>
            </div>
        )
    }
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
