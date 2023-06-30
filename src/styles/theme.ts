import type { MantineThemeOverride, Tuple } from "@mantine/core";
import { colors } from "./colors";
import { other } from "./other";

export const theme: MantineThemeOverride = {
  loader: "bars",
  colorScheme: "light",
  white: colors.rose[0],
  black: colors.rose[9],
  defaultRadius: "sm",
  transitionTimingFunction: "ease-in-out",
  colors: colors as Record<keyof typeof colors, Tuple<string, 10>>,
  primaryShade: {
    light: 4,
    dark: 6,
  },
  fontFamily: other.fontFamily.body,
  primaryColor: "rose",
  headings: {
    fontFamily: other.fontFamily.headings,
    fontWeight: 700,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "90em",
  },
  other,
};
