import { MapPin, ShoppingCartSimple } from "phosphor-react";
import {
  ActionsMenu,
  Cart,
  CartAmount,
  Container,
  DeliveryLocation,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <ActionsMenu>
        <DeliveryLocation>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </DeliveryLocation>
        <Cart to="checkout">
          <ShoppingCartSimple weight="fill" size={22} />
          {cart.length > 0 ? <CartAmount>{cart.length}</CartAmount> : null}
        </Cart>
      </ActionsMenu>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
    </Container>
  );
}
