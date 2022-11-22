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
  const [cepError, setCepError] = useState(false);
  const streetInput = useRef<HTMLInputElement>(null);
  const districtInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const stateInput = useRef<HTMLInputElement>(null);

  async function handleGetCepInfo() {
    if (cepValue.length !== 8 || !cepValue) return;

    const cepData = await axios
      .get(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then((res) => {
        return res.data;
      });

    if (cepData.erro) {
      setCepError(true);
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
            onBlur={handleGetCepInfo}
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
