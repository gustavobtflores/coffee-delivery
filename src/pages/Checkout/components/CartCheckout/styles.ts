import styled from "styled-components";

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  margin-top: 16px;
  padding: 40px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  padding: 24px 0;

  &:first-of-type {
    padding-top: 0;
  }

  img {
    width: 64px;
    height: 64px;
    margin-right: 20px;
  }

  strong {
    align-self: flex-start;
    margin-left: auto;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
  }
`;

export const CoffeeName = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};
  padding: 8px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const CartTotals = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 12px;

  .total {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme["base-subtitle"]};
    display: flex;
    justify-content: space-between;
  }

  .total-items,
  .shipping {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${(props) => props.theme["base-subtitle"]};

    .price {
      font-size: 16px;
    }
  }
`;

export const CoffeeItemControls = styled.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.yellow};
  padding: 12px 8px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border-radius: 6px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`;
