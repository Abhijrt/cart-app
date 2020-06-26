import React from 'react';

const CartItem = (props) =>{
        // render () {
        // console.log('this.props', this.props);
        const { price, title, qty } = props.product;
        const {
          product,
          onIncreaseQuantity,
          onDecreaseQuantity,
          onDeleteProduct
        } = props;
        return (
            <div className="cart-item" >
                <div className="left-block">
                    <img src="" style={styles.image} src={product.img} />
                </div>
                <div className="right-block" >
                    <div style={{fontSize:25}}>{title}</div>
                    <div>Rs {price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-item-actions" >
                    <img 
                        className="action-icons" 
                        alt="increase" 
                        src="https://as2.ftcdn.net/jpg/03/22/32/37/500_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg"
                        onClick = {() => onIncreaseQuantity(product)}
                    
                    />
                    <img 
                        className="action-icons" 
                        alt="decrease" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        className="action-icons" 
                        alt="delete" 
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
                
                </div>
                
            </div>
        )
    // }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4
    }
}

export default CartItem;