import { Header } from "../../components/Header";
import { useFetch } from "../../hooks/useFetch";
import Product_photo from "../../assets/imgs/product_photo.png";
import "./style.css";
import { Loading } from "../../components/loading";
import { useState } from "react";
import { Product } from "../../types/product";
import { Ingredients } from "../../types/ingrediente";




export function Product_Details() {
  // use hook for get product from API
  const { data: product, isFetching } = useFetch<Product[]>("products");
  const [popOverVisibility, setPopOverVisibility] = useState<boolean>(false);
  const [productAdded, setProductAdded] = useState<Product>();

  const handleAddItemOnCart = ( productAdded:Product)=>{
    setPopOverVisibility(!popOverVisibility) //alter popOver visibility
    setProductAdded(productAdded) //send by params product added
  }
  const hendleQuantityIncrement = (item: any) => {
    alert("Sorry, ainda em construção");
  };
  const hendleQuantityDecrement = (item: any) => {
    alert("Sorry, ainda em construção");
  };

  const renderIngredients = (ingredients: Ingredients, index: number) => {
    const { group, max_itens, type, itens } = ingredients;

    return (
      <div key={index}>
        {type === "number" ? (
          <header className="form_add_ingredients__group_header">
            <h4 className="form_add_ingredients__group_header_title">
              Adicionar Ingredientes
            </h4>
            <span className="form_add_ingredients__group_header_subtitle">
              Até {max_itens} ingredientes
            </span>
          </header>
        ) : (
          <header className="form_add_ingredients__group_header">
            <h4 className="form_add_ingredients__group_header_title">
              {group}
            </h4>
            <span className="form_add_ingredients__group_header_subtitle">
              Até {max_itens} items
            </span>
          </header>
        )}

        {type === "number" ? (
          itens.map((item) => (
            <div className="item_group" key={item.id}>
              <div className="item_group__wrapper_item_info">
                <p className="item_group__item_name">{item.nm_item}</p>
                <span className="item_group__item_price">
                  + R$ {item.vl_item}
                </span>
              </div>
              <div className="item_group__wrapper_btn_alter_qtd">
                <button
                  className="item_group__btn_alterQtd"
                  type="button"
                  onClick={() => hendleQuantityDecrement(item)}
                >
                  -
                </button>
                <div className="item_group__inputQtd"></div>
                <button
                  className="item_group__btn_alterQtd"
                  type="button"
                  onClick={() => hendleQuantityIncrement(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="form_add_ingredients__radio_container">
              <label htmlFor="radioYes">
                <span>Sim</span>

                <input type="radio" id="radioYes" name="radio" />
                <div className="form_add_ingredients__custom_radio">
                  <span></span>
                </div>
              </label>
            </div>
            <div className="form_add_ingredients__radio_container">
              <label htmlFor="radioNo">
                <span>Não</span>

                <input type="radio" id="radioNo" name="radio" />
                <div className="form_add_ingredients__custom_radio">
                  <span></span>
                </div>
              </label>
            </div>
          </>
        )}
      </div>
    );
  };
  return (
    <>
      <Header popOverStatus={popOverVisibility} product={productAdded}/>
      {isFetching && <Loading />}
      {product?.map((product) => {
        return (
          <main className="main" key={product.id}>
            <div className="container_product">
              <div className="wrapper_img">
                {/* 
                  Não usada pois não retorna uma url válida para esta imagem 
                <img
                  className="full_size"
                  src={product.url_image}
                  alt="Produto Foto"
                /> */}
                <img
                  className="full_size"
                  src={Product_photo}
                  alt="Produto Foto"
                />
              </div>
              <div className="wrapper_prod_details">
                <h2 className="wrapper_prod_details__title">
                  {product.nm_product}
                </h2>
                <p className=" wrapper_prod_details__description">
                  {product.description}
                </p>
                <p className=" wrapper_prod_details__prices">
                  <span className="wrapper_prod_details__current_price">
                    {product.vl_price}
                  </span>
                  <span className="wrapper_prod_details__old_price">
                    {product.vl_discount}
                  </span>
                </p>
              </div>
            </div>
            <div className="container_ingredients">
              <form className="form_add_ingredients">
                <div className="form_add_ingredients__items_content">
                  {product.ingredients.map(renderIngredients)}
                </div>

                <div className="form_add_ingredients__btns_controls">
                  <div className="item_group__wrapper_btn_alter_qtd">
                    <button
                      className="item_group__btn_alterQtd"
                      type="button"
                      onClick={() => hendleQuantityDecrement(product)}
                    >
                      -
                    </button>
                    <div className="item_group__inputQtd"></div>
                    <button
                      className="item_group__btn_alterQtd"
                      type="button"
                      onClick={() => hendleQuantityIncrement(product)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={()=>handleAddItemOnCart(product)}
                    className="form_add_ingredients_btns_controls__btn_addCart"
                    type="button"
                  >
                    Adicionar
                  </button>
                </div>
              </form>
            </div>
          </main>
        );
      })}
    </>
  );
}
