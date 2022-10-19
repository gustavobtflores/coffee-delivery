import axios from "axios";
import { MapPinLine } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { BaseInput, CepInput } from "../../../../components/Inputs";
import {
  AddressCard,
  AddressCardTitle,
  AddressFormContainer,
  FormWrapper,
} from "./styles";

export function AddressForm() {
  const [cepValue, setCepValue] = useState("");
  const streetInput = useRef<HTMLInputElement>(null);
  const districtInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);

  async function getCepInfo() {
    const cepData = await axios
      .get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then((res) => {
        return res.data;
      });

    if (cepData.erro) return;

    streetInput.current!.value = cepData.logradouro;
    districtInput.current!.value = cepData.bairro;
    cityInput.current!.value = cepData.localidade;
    stateInput.current!.value = cepData.uf;
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
        <FormWrapper>
          <CepInput
            type="text"
            placeholder="CEP"
            mask="00000-000"
            value={cepValue}
            unmask={true}
            onAccept={(unmaskedValue) => {
              setCepValue(unmaskedValue as string);
            }}
            onBlur={getCepInfo}
          />
          <BaseInput
            type="text"
            placeholder="Rua"
            fullWidth
            ref={streetInput}
          />
          <div>
            <BaseInput type="text" placeholder="Número" />
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
