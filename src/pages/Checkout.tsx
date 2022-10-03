import { AdressForm } from "../components/AddressForm";
import { CartCheckout } from "../components/CartCheckout";
import { Payment } from "../components/Payment";
import { CheckoutContainer, FlexColumn } from "./Checkout.styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FlexColumn>
        <h2>Complete seu pedido</h2>
        <AdressForm />
        <Payment />
      </FlexColumn>
      <FlexColumn>
        <h2>Cafés selecionados</h2>
        <CartCheckout />
      </FlexColumn>
    </CheckoutContainer>
  );
}
