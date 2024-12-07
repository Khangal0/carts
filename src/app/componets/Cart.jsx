const Cart = (props) => {

    return(
        <div className="cartBorder">
            <img className="img" src= {props.thumbnail}/>
            <div className="titles">
              <div> Name: {props.title}</div>
              <div> Price: {props.price}</div>
              <div> Rating: {props.rating}</div>
              <div> Stock: {props.minimumOrderQuantity}</div>
            </div>
        </div>
    )
}

export default Cart;