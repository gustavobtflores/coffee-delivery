import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: calc(1120px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled(FlexColumn)``;

export const CartContainer = styled(FlexColumn)`
  flex: 1 1 auto;
`;
