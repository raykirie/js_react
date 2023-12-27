import { Link } from "react-router-dom"
import Button from "../UI/Button/Button"

function EmptyCart(){
    return(
        <div className="empty_cart">
            <h2>Shopping cart</h2>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to={'/allproducts'}>
                <div className="empty_cart_btn">
                <Button
                theme='green'
                title='Continue Shopping'
                />
            </div>
            </Link>
        </div>
    )
}

export default EmptyCart