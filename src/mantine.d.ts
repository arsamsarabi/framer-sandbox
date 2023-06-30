import { Tuple, DefaultMantineColor } from "@mantine/core";
import { ThemeColors, ThemeOther } from "./styles";

declare module "@mantine/core" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Interfaces are necessary for declaration overrides.
  export interface MantineThemeOther extends ThemeOther {}

  export interface MantineThemeColorsOverride {
    colors: Record<ThemeColors | DefaultMantineColor, Tuple<string, 10>>;
  }

  export interface MantineTheme {
    other: ThemeOther;
  }
}
