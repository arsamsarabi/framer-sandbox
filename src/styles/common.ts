import { MantineTheme } from "@mantine/core";
import { css } from "./styled";

export const commonPadding = (theme: MantineTheme) => {
  const { fn, spacing } = theme;

  return css`
    padding: ${spacing.md};

    ${fn.largerThan("md")} {
      padding: ${spacing.md} ${spacing.xl};
    }
  `;
};
