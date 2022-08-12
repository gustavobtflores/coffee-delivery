import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
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
`;
