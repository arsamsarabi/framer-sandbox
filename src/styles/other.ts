export const other = {
  fontFamily: {
    headings:
      '"Lora", "Trebuchet MS", Trebuchet, "Liberation Sans", sans-serif',
    body: '"Open Sans", Verdana, Geneva, sans-serif',
    display:
      '"Righteous", "Lora", "Trebuchet MS", Trebuchet, "Liberation Sans", sans-serif',
  },
} as const;

export type ThemeOther = typeof other;
