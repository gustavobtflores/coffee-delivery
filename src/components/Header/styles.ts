import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: calc(1120px + 2rem * 2);
  margin: 0 auto;
`;

export const DeliveryLocation = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 8px;
  line-height: 1.3;
  background-color: ${(props) => props.theme['purple-light']};
  font-size: 14px;
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const ActionsMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Cart = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  position: relative;
`;

export const CartAmount = styled.span`
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
  font-weight: 700;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -8px;
  right: -8px;
`;
