import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button/Button";
import { fetchAllProducts } from "../asyncAction/productsList";
import { Link} from "react-router-dom";
import { addToBasketAction } from "../store/basketReducer";
import { defaultAction, filterByPriceAction, filterBySaleAction, sortByNameAction, sortByPriceAction } from "../store/productListReducer";

function AllProductsPage() {
  const productList = useSelector((store) => store.productList.productList);
  const dispatch = useDispatch();
  

  console.log(productList);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleButtonClick = (event, product) => {
    event.preventDefault();
    event.stopPropagation();

    const { id, title, discont_price, price, image } = product;
    dispatch(
      addToBasketAction({
        id,
        title,
        price,
        discont_price,
        image,
      })
    );
  };

  const handleNavLinkClick = (event, id) => {
    console.log(`NavLink clicked for product with id ${id}`);
  };

  function checkBoxHandler(e) {
    console.log(e.target.checked);
    dispatch(filterBySaleAction(e.target.checked));
  }

  const filteredProductList = productList.filter((elem) => elem.isShowSale && elem.isShowPrice);

  function formHandler(e){
    let form_data = new FormData(e.target.parentElement)
    let data = Object.fromEntries(form_data)
    data.max = (data.max && +data.max >= +data.min) ? +data.max : Infinity
    data.min = (data.min) ? +data.min : 0
    dispatch(filterByPriceAction(data))
  }


  const sortHandler = (value) => {
    switch (value) {
      case 'name':
        dispatch(sortByNameAction());
        break;
      case 'price':
        dispatch(sortByPriceAction());
        break;
      default:
        dispatch(defaultAction());
    }
  };

  return (
    <div className="products_all">
      <p>All products</p>
      <div className="filter_products">
        <form className="form_filter" onChange={formHandler}>
          <input style={{ marginRight: '20px' }}  placeholder="from" name="min"/>
          <input placeholder="to" name="max"/>
        </form>
        <label>
          Sale
          <input onClick={checkBoxHandler} type="checkbox" />
        </label>
        <select className="filter_default" onChange={(e) => sortHandler(e.target.value)}>
          <option value="">Default</option>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      <div className="products-container_all">
        {filteredProductList.map((elem) => (
          <Link
            key={elem.id}
            to={`/products/${elem.id}`}
            onClick={(event) => handleNavLinkClick(event, elem.id)}
          >
            <div key={elem.id} className="products-item_all">
              <div className="image-container">
                <img
                  width={279}
                  height={280}
                  src={"http://localhost:3333/" + elem.image}
                  alt={elem.title}
                />
                {elem.discont_price !== null && (
                        <div className='discount_tag'>
                            {Math.round((1 - elem.discont_price / elem.price) * 100)}%
                        </div>)}

                <div className="overlay">
                  <Button
                    onClick={(event) => handleButtonClick(event, elem)}
                    theme="green"
                    title="Add to card"
                  />
                </div>
                <div className="product-title">
                  <p className="sales-card-title">{elem.title}</p>
                </div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  {elem.discont_price ? (
                    <>
                      <h3
                        style={{
                          color: "var(--txt-black, #282828)",
                          fontSize: "40px",
                          fontWeight: 600,
                          lineHeight: "110%",
                        }}
                      >
                        ${elem.discont_price}
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
                        ${elem.price}
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
                      ${elem.price}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
