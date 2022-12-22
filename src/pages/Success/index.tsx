import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { IconRounded } from "../../components/IconRounded";
import { Info, InfoBox, SuccessContainer, SuccessWrapper } from "./styles";
import illustration from "../../assets/illustration-success.png";
import { useLocation } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";

interface Address {
  street: String;
  number: String;
  district: String;
  city: String;
  stateName: String;
}

const paymentMethods: { [key: string]: string } = {
  "credit-card": "Cartão de crédito",
  "debit-card": "Cartão de débito",
  money: "Dinheiro",
};

export function Success() {
  const { state }: any = useLocation();
  const { street, number, district, city, stateName } = state;
  const { paymentMethod } = usePayment();

  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido Confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </header>
      <SuccessWrapper>
        <InfoBox>
          <Info>
            <IconRounded background="purple">
              <MapPin size={16} weight="fill" />
            </IconRounded>
            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {street}, {number}
                </strong>
              </span>
              <span>
                {district} - {city}, {stateName}
              </span>
            </div>
          </Info>
          <Info>
            <IconRounded background="yellow">
              <Timer weight="fill" />
            </IconRounded>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </Info>
          <Info>
            <IconRounded background="dark-yellow">
              <CurrencyDollar />
            </IconRounded>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethods[paymentMethod]}</strong>
            </div>
          </Info>
        </InfoBox>
        <img src={illustration} alt="" />
      </SuccessWrapper>
    </SuccessContainer>
  );
}
