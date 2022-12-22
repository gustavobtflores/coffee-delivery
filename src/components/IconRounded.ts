import styled from "styled-components";

const ICON_BACKGROUNDS = {
  "dark-yellow": "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

interface IconRoundedProps {
  background: keyof typeof ICON_BACKGROUNDS;
}

export const IconRounded = styled.span<IconRoundedProps>`
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.theme[ICON_BACKGROUNDS[props.background]]};
  display: block;
  padding: 8px;
  border-radius: 1000px;
`;
