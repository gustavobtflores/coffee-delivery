import { Minus, Plus } from "phosphor-react";
import styled from "styled-components";

interface AmountSelectorProps {
  amount: number;
  onAmountChange: (quantity: number, coffeeId: number) => void;
  coffeeId: number;
}

export function AmountSelector({
  amount,
  onAmountChange,
  coffeeId,
}: AmountSelectorProps) {
  return (
    <AmountSelectorContainer>
      <button
        onClick={() => {
          if (amount > 1) {
            onAmountChange(amount - 1, coffeeId);
          }
        }}
      >
        <Minus size={14} weight={"bold"} />
      </button>
      {amount}
      <button onClick={() => onAmountChange(amount + 1, coffeeId)}>
        <Plus size={14} weight="bold" />
      </button>
    </AmountSelectorContainer>
  );
}

const AmountSelectorContainer = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  gap: 8px;
  padding: 8px;
  color: ${(props) => props.theme["base-title"]};

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 4px;

    &:hover {
      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  svg {
    transition: color 0.2s ease;
    color: ${(props) => props.theme.purple};
  }
`;
