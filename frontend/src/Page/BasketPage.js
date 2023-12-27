import { ReactComponent as XxX } from "../image/x_basket.svg";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/INput/Input";
import { changeCountAction, removeItemAction, clearBasketAction } from "../store/basketReducer";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../components/Modal/Modal";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

function Basket() {
  const { items } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const [active, setActive] = useState(() => {
    return localStorage.getItem('modalActive') === 'true' || false;
  });

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('modalActive', active);
    localStorage.setItem('items', JSON.stringify(items));

    let totalItemsCount = 0;
    let totalPriceValue = 0;

    items.forEach(item => {
      totalItemsCount += item.count;
      totalPriceValue += item.discont_price ? item.discont_price * item.count : item.price * item.count;
    });

    setTotalItems(totalItemsCount);
    setTotalPrice(totalPriceValue);
  }, [active, items]);

  const clearBasket = () => {
    dispatch(clearBasketAction()); 
    setActive(false);
  };

  return (
    <div className="shopping_cart_">
      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="head_basket">
            <div className="head_basket_h">
              <h2>Shopping cart</h2>
            </div>
            <div className="head_basket_btn">
              <Link to={'/allproducts'}>
                <Button theme='navigation' title='Back to the store'/>
              </Link>
            </div>
          </div>
          <div className="shopping_cart">
            <div className="shopping_cart_main">
              {items?.map((item) => (
                <div className="shopping_cart_item" key={item.id}>
                  <img width={190} height={170} src={"http://localhost:3333/" + item.image} />
                  <div className="shopping_cart_info">
                    <div className="shopping_cart_up">
                      <p className="shopping_cart_title">{item.title}</p>
                      <div onClick={() => dispatch(removeItemAction({ id: item.id }))} className="shopping_cart_photo">
                        <XxX />
                      </div>
                    </div>
                    <div className="shopping_cart_num">
                      <div className="shopping_cart_btn">
                        <button onClick={() => dispatch(changeCountAction({ id: item.id, count: -1 }))}>-</button>
                        <p className="shopping_cart_count">{item.count}</p>
                        <button onClick={() => dispatch(changeCountAction({ id: item.id, count: +1 }))}>+</button>
                      </div>
                      <div
                        className="shopping_cart_price"
                        style={{ display: "flex", alignItems: "baseline" }}
                      >
                        {item.discont_price ? (
                          <>
                            <h3
                              style={{
                                color: "var(--txt-black, #282828)",
                                fontSize: "40px",
                                fontWeight: 600,
                                lineHeight: "110%",
                              }}
                            >
                              ${item.discont_price}
                            </h3>
                            <h3
                              style={{
                                color: "var(--txt-grey, #8B8B8B)",
                                fontSize: "20px",
                                fontWeight: 500,
                                lineHeight: "130%",
                                textDecorationLine: "line-through",
                                marginLeft: "10px",
                              }}
                            >
                              ${item.price}
                            </h3>
                          </>
                        ) : (
                          <h3
                            style={{
                              color: "var(--txt-black, #282828)",
                              fontSize: "40px",
                              fontWeight: 600,
                              lineHeight: "110%",
                            }}
                          >
                            ${item.price}
                          </h3>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="shopping_cart_form">
              <h2>Order details</h2>
              <div className="price_info_basket">
                <div className="summary">
                  <p className="order_detalis">{totalItems} items total</p>
                </div>
                <div className="summary_">
                  <p>{totalPrice}$</p>
                </div>
              </div>
              <form>
                <Input placeholder="Name" size={"i_basket"} />
                <Input placeholder="Phone number" size={"i_basket"} />
                <Input placeholder="Email" size={"i_basket"} />
                <div className="order_btn">
                  <Button 
                    theme='basket_green' 
                    title='Order'
                    onClick={() => setActive(true)}
                  />
                  <Modal active={active} setActive={clearBasket} />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
