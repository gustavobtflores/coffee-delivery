import styled from "styled-components";

export const CartCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
`;
