import { Trash, XCircle } from "phosphor-react";
import { useState, useEffect, FormEvent } from "react";
import { useCart } from "../../../../hooks/useCart";
import { formatCurrency } from "../../../../utils/Formatter";
import { AmountSelector } from "../../../../components/AmountSelector";
import {
  CartCheckoutContainer,
  CartEmpty,
  CartItem,
  CartItems,
  CartTotals,
  CoffeeItemControls,
  CoffeeName,
  ConfirmButton,
  DeleteButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

export function CartCheckout() {
  const { cart, removeCoffee, changeCoffeeAmount } = useCart();
  const [itemsTotal, setTotal] = useState(0);
  const navigate = useNavigate();
  const shipping = 3.5;
  const total = itemsTotal + shipping;

  useEffect(() => {
    const total = cart.reduce((prev, curr) => {
      return prev + curr.price * curr.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  const handleAmountChange = (amount: number, coffeeId: number) => {
    changeCoffeeAmount(coffeeId, amount);
  };

  return (
    <CartCheckoutContainer>
      {cart.length > 0 ? (
        <>
          <CartItems>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <CoffeeName>{item.name}</CoffeeName>
                  <CoffeeItemControls>
                    <AmountSelector
                      coffeeId={item.id}
                      amount={item.amount}
                      onAmountChange={handleAmountChange}
                    />
                    <DeleteButton
                      onClick={() => {
                        removeCoffee(item.id);
                      }}
                    >
                      <Trash size={16} />
                      Remover
                    </DeleteButton>
                  </CoffeeItemControls>
                </div>
                <strong>
                  {formatCurrency(item.price * item.amount, "BRL")}
                </strong>
              </CartItem>
            ))}
          </CartItems>
          <CartTotals>
            <div className="total-items">
              <span>Total de itens</span>
              <span className="price">{formatCurrency(itemsTotal, "BRL")}</span>
            </div>
            <div className="shipping">
              <span>Entrega</span>
              <span className="price">{formatCurrency(3.5, "BRL")}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{formatCurrency(total, "BRL")}</span>
            </div>
          </CartTotals>
          <ConfirmButton type="submit" form="addressData">
            Confirmar pedido
          </ConfirmButton>
        </>
      ) : (
        <CartEmpty>
          <XCircle size={64} />
          <p>Seu carrinho de compras está vazio</p>
        </CartEmpty>
      )}
    </CartCheckoutContainer>
  );
}
