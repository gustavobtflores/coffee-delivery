import axios from "axios";
import { MapPinLine } from "phosphor-react";
import { FormEvent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseInput, CepInput } from "../../../../components/Inputs";
import {
  AddressCard,
  AddressCardTitle,
  AddressFormContainer,
  FormWrapper,
} from "./styles";

export function AddressForm() {
  const [cepValue, setCepValue] = useState("");
  const [cepError, setCepError] = useState(false);
  const streetInput = useRef<HTMLInputElement>(null);
  const districtInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);
  const numberInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function handleGetCepInfo() {
    if (cepValue.length !== 8) {
      streetInput.current!.value = "";
      districtInput.current!.value = "";
      cityInput.current!.value = "";
      stateInput.current!.value = "";
      return;
    }

    const cepData = await axios
      .get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then((res) => {
        return res.data;
      });

    if (cepData.erro) {
      return;
    }

    streetInput.current!.value = cepData.logradouro;
    districtInput.current!.value = cepData.bairro;
    cityInput.current!.value = cepData.localidade;
    stateInput.current!.value = cepData.uf;

    streetInput.current!.disabled = true;
    districtInput.current!.disabled = true;
    cityInput.current!.disabled = true;
    stateInput.current!.disabled = true;
  }

  function handlePurchaseConfirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/success", {
      state: {
        street: streetInput.current!.value,
        number: numberInput.current!.value,
        stateName: stateInput.current!.value,
        city: cityInput.current!.value,
        district: districtInput.current!.value,
      },
    });
  }

  return (
    <AddressFormContainer>
      <AddressCard>
        <AddressCardTitle>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressCardTitle>
        <FormWrapper id="addressData" onSubmit={handlePurchaseConfirm}>
          <CepInput
            type="text"
            placeholder="CEP"
            mask="00000-000"
            value={cepValue}
            unmask={true}
            onAccept={(unmaskedValue) => {
              setCepValue(unmaskedValue as string);
            }}
            onBlur={handleGetCepInfo}
            required
          />
          <BaseInput
            type="text"
            placeholder="Rua"
            fullWidth
            ref={streetInput}
          />
          <div>
            <BaseInput
              type="text"
              placeholder="Número"
              required
              ref={numberInput}
            />
            <BaseInput type="text" placeholder="Complemento" fullWidth />
          </div>
          <div>
            <BaseInput type="text" placeholder="Bairro" ref={districtInput} />
            <BaseInput
              type="text"
              placeholder="Cidade"
              fullWidth
              ref={cityInput}
            />
            <BaseInput
              type="text"
              placeholder="UF"
              width="60px"
              ref={stateInput}
            />
          </div>
        </FormWrapper>
      </AddressCard>
    </AddressFormContainer>
  );
}
