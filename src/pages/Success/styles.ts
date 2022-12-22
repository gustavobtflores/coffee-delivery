import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: calc(1120px + 2rem * 2);
  margin: 0 auto;
  padding: 0 32px;

  header {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 20px;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px 36px;
  border: 1px transparent solid;
  margin-top: 40px;
  flex: auto;
  max-width: 530px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 16px;
      color: ${(props) => props.theme["base-text"]};
      strong {
        font-weight: 700;
      }
    }
  }
`;

export const SuccessWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
