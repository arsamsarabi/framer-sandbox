import {
  Header,
  Title,
  type HeaderProps,
  type TitleProps,
} from "@mantine/core";

import { styled, css } from "@/styles";

export const StyledHeader = styled(Header)<HeaderProps>(({ theme }) => {
  const { spacing, fn } = theme;

  return css`
    padding: 0 ${spacing.md};

    ${fn.largerThan("md")} {
      padding: 0 ${spacing.xl};
    }
  `;
});

export const StyledTitle = styled(Title)<TitleProps>(({ theme }) => {
  const { other, fn, fontSizes } = theme;

  return css`
    color: ${fn.primaryColor()};
    font-family: ${other.fontFamily.display};
    font-size: ${fontSizes.md};

    ${fn.largerThan("md")} {
      font-size: ${fontSizes.xl};
    }
  `;
});
