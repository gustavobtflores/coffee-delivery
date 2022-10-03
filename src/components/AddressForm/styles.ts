import styled from "styled-components";

export const AddressFormContainer = styled.div`
  margin: 16px 0 12px 0;
`;

export const AddressCard = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme["base-card"]};
  max-width: 640px;
  border-radius: 6px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 560px;

  > div {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }
`;

export const AddressCardTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: ${(props) => props.theme["yellow-dark"]};
  margin-bottom: 2rem;

  > div {
    color: ${(props) => props.theme["base-subtitle"]};
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;
