import { ReactComponent as XxX } from "../image/x_basket.svg";
import { useDispatch, useSelector } from "react-redux";
import { decrAction, incrAction } from "../store/clikerReducer";
import { removeFromBasketAction } from "../store/basketReducer";


function Basket() {
  const { items } = useSelector((store) => store.basket);
  const count = useSelector(store => store.clicker) 
  const dispatch = useDispatch()




  return (
    <div className="shopping_cart">
      <h2>Shopping cart</h2>
      <div>
        {items.map((item) => (
          <div className="shopping_cart_item" key={item.id}>
            <img width={190} height={170} src={"http://localhost:3333/"+item.image} />
            <div className="shopping_cart_info">
              <div className="shopping_cart_up">
            <p className="shopping_cart_title">{item.title}</p>
            <div onClick={() => dispatch(removeFromBasketAction(item))} className="shopping_cart_photo">
              <XxX/>
            </div>
            </div>
            <div className="shopping_cart_num">
            <div className="shopping_cart_btn">
            <button  onClick={() => dispatch(decrAction(1))}>-</button>
            <p className="shopping_cart_count">{count}</p>
            <button onClick={() => dispatch(incrAction(1))}>+</button>
            </div>
            <div className="shopping_cart_price" style={{ display: "flex", alignItems: "baseline" }}>
                {item.discont_price ? (
                  <>
                    <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                      ${item.discont_price}
                    </h3>
                    <h3 style={{ color: 'var(--txt-grey, #8B8B8B)', fontSize: '20px', fontWeight: 500, lineHeight: '130%', textDecorationLine: 'line-through', marginLeft: '10px' }}>
                      ${item.price}
                    </h3>
                  </>
                ) : (
                  <h3 style={{ color: 'var(--txt-black, #282828)', fontSize: '40px', fontWeight: 600, lineHeight: '110%' }}>
                    ${item.price}
                  </h3>
                )}
              </div> 
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
