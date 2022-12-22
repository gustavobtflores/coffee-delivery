import styled from "styled-components";
import introBg from "./assets/background.png";

export const Container = styled.section`
  background-image: url(${introBg});
  background-repeat: repeat-x;
`;

export const IntroWrapper = styled.div`
  max-width: calc(1120px + 2rem * 2);
  margin: 0 auto;
  padding: 5.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 3.5rem;
`;

export const TextContent = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    margin-top: 1rem;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 20px;
  margin-top: 60px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${(props) => props.theme["base-text"]};
  }
`;
