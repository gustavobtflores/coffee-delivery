import { useState, useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/Formatter";
import { AmountSelector } from "../AmountSelector";
import { CartCheckoutContainer, CartItem, CartItems } from "./styles";

export function CartCheckout() {
  const { cart, removeCoffee } = useCart();
  const [total, setTotal] = useState(0);
  console.log(cart);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {});
    setTotal(total);
  }, [cart]);

  const handleAmountChange = (quantity: number, coffeeId: number) => {
    console.log(quantity, coffeeId);
  };

  return (
    <CartCheckoutContainer>
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <span>{item.name}</span>
              <AmountSelector
                coffeeId={item.id}
                amount={item.amount}
                onAmountChange={handleAmountChange}
              />
            </div>
            <strong>R$ {formatCurrency(item.price)}</strong>
          </CartItem>
        ))}
      </CartItems>
    </CartCheckoutContainer>
  );
}
