import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import { usePayment } from "../../../../hooks/usePayment";
import {
  PaymentContainer,
  PaymentOption,
  PaymentOptions,
  PaymentTitle,
} from "./styles";

export function Payment() {
  const { paymentMethod, changePaymentMethod } = usePayment();

  function handleSelectedPayment(type: string) {
    changePaymentMethod(type);
  }

  return (
    <PaymentContainer>
      <PaymentTitle>
        <CurrencyDollar size={24} weight="fill" />
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentTitle>
      <PaymentOptions>
        <PaymentOption
          selected={paymentMethod === "credit-card"}
          onClick={() => handleSelectedPayment("credit-card")}
        >
          <CreditCard size={20} />
          Cartão de crédito
        </PaymentOption>
        <PaymentOption
          selected={paymentMethod === "debit-card"}
          onClick={() => handleSelectedPayment("debit-card")}
        >
          <Bank size={20} />
          Cartão de débito
        </PaymentOption>
        <PaymentOption
          selected={paymentMethod === "money"}
          onClick={() => handleSelectedPayment("money")}
        >
          <Money size={20} />
          Dinheiro
        </PaymentOption>
      </PaymentOptions>
    </PaymentContainer>
  );
}
