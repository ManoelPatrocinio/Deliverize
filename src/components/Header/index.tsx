import { useState } from "react";
import Logo from "../../assets/imgs/logo.png";
import CartIcon from "../../assets/imgs/shopping_cart_icon.svg";
import { Ingredients } from "../../types/ingrediente";
import { Product } from "../../types/product";
import "./style.css";

interface IHeaderProps {
  popOverStatus: boolean
  product?: Product
}
export function Header({popOverStatus,product}:IHeaderProps) {

  const renderIngredients = (ingredients: Ingredients) => {
    const {  type, itens } = ingredients;

    return (
        type === "number" ? (
          itens.map((item) => (
            <li className="popOver_addedProd__item" key={item.id}>{item.nm_item}</li>
            
          ))
        ) : (
         ""
        )
  
    );
  };

  return (
    <header className="header">
      <div className="header__wrapper_img">
        <img className="full_size" src={Logo} alt="logo Deliverize" />
      </div>

      <div className="container">
        <div className="input_group">
          <label
            className="input_group__label"
            htmlFor="client_delivery_location"
          >
            Entrega:
          </label>
          <input
            className="input_group__input"
            type="text"
            id="client_delivery_location"
            placeholder="Endereço de entrega"
          />
        </div>

        <input
          className="header__input_search"
          type="search"
          id="header_input_search"
          placeholder="Busque por estabelecimento ou produtos"
        />
        <button className="items_content">
          <i className="items_content_icon fa-regular fa-circle-user" />
          <span className="items_content__span">Entrar</span>
        </button>

        <button className="items_content">
          <img className="items_content_icon" src={CartIcon} />
          <span className="items_content__span">Carrinho</span>
          <span className="items_content__cart_qtd">1</span>
        </button>

        {popOverStatus && (
          
          <div className="popOver_addedProd">
            <header className="popOver_addedProd__title">
              <p> Adicionado com Sucesso</p>
            </header>
            <div className="popOver_addedProd__content">
              <p className="popOver_addedProd__prod_name">
                {product?.nm_product}
              </p>
              <span>Ingredientes: </span>
              <ul className="popOver_addedProd__items_list">
                {product?.ingredients.map(renderIngredients)}
               
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
