import { AddressForm } from "./components/AddressForm";
import { CartCheckout } from "./components/CartCheckout";
import { Payment } from "./components/Payment";
import { CartContainer, CheckoutContainer, FormContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <Payment />
      </FormContainer>
      <CartContainer>
        <h2>Cafés selecionados</h2>
        <CartCheckout />
      </CartContainer>
    </CheckoutContainer>
  );
}
