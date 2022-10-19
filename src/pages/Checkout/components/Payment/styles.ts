import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PaymentTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme.purple};

  > div {
    span {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface PaymentOptionProps {
  selected?: boolean;
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  font-size: 12px;
  background-color: ${(props) =>
    props.selected ? props.theme["purple-light"] : props.theme["base-button"]};
  border: 1px solid
    ${(props) => (props.selected ? props.theme["purple-dark"] : "transparent")};

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
