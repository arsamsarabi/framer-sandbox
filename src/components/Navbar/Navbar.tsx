import { Text } from '@mantine/core';
import { useNavbarContext } from '../../context';
import { StyledNavbar } from './Navbar.styles';

export const Navbar = () => {
  const { opened } = useNavbarContext();

  return (
    <StyledNavbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Text>Application navbar</Text>
    </StyledNavbar>
  )
}

