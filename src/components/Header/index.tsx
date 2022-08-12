import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import { ActionsMenu, Cart, Container, DeliveryLocation } from './styles';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <ActionsMenu>
        <DeliveryLocation>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </DeliveryLocation>
        <Cart>
          <ShoppingCartSimple weight="fill" size={22} />
        </Cart>
      </ActionsMenu>
      <img src={logoImg} alt="" />
    </Container>
  );
}
