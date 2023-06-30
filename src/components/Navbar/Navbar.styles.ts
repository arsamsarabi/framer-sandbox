import { Navbar, type NavbarProps } from "@mantine/core";

import { styled, css, commonPadding } from "@/styles";

export const StyledNavbar = styled(Navbar)<NavbarProps>(({ theme }) => {
  return css`
    ${commonPadding(theme)}
  `;
});
