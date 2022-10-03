import styled from "styled-components";

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;

  span {
    display: inline-block;
    padding: 4px 8px;
    background-color: ${(props) => props.theme["yellow-light"]};
    border-radius: 1000px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 10px;
    line-height: 1.3;
  }
`;

export const CoffeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  text-align: center;
  padding: 20px;
  padding-top: 0;
  width: 100%;

  img {
    margin-bottom: 12px;
    margin-top: -20px;
  }

  > strong {
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 20px;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 8px;
  }

  > p {
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 32px;
  }
`;

export const Price = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-size: 14px;
  line-height: 1.3;
  font-weight: 700;
  align-self: center;

  strong {
    font-weight: 800;
    font-size: 24px;
    font-family: "Baloo 2";
  }
`;

export const SelectionMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: stretch;
`;

export const CartButton = styled.button`
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
