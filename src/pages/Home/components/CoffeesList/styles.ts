import styled from 'styled-components';

export const Container = styled.div`
  max-width: calc(1120px + 2rem * 2);
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    margin-bottom: 3rem;
    font-size: 32px;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
  }
`;

export const CoffeesListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px 32px;
  justify-items: center;
  padding-bottom: 40px;
`;
