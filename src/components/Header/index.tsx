import Logo from "../../assets/imgs/logo.png";
import CartIcon from "../../assets/imgs/shopping_cart_icon.svg";
import "./style.css";
export function Header() {
  return (
    <header className="header">
        <div className="wrapper_img">
            <img className="wrapper_img__logo" src={Logo} alt="logo Deliverize" />
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
        <div className="items_content">
          <i className="items_content_icon fa-regular fa-circle-user" />
          <span className="items_content__span">Entrar</span>
        </div>

        <div className="items_content">
          <img className="items_content_icon" src={CartIcon} />
          <span className="items_content__span">Carrinho</span>
          <span className="items_content__cart_qtd">1</span>
        </div>
      </div>
    </header>
  );
}
