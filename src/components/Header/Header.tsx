import { useMantineTheme, MediaQuery, Burger, Flex } from '@mantine/core';
import { useNavbarContext } from '@/context';
import { StyledHeader, StyledTitle } from './Header.styles';

export const Header = () => {
  const { colors } = useMantineTheme();
  const { opened, toggle } = useNavbarContext();

  return (
    <StyledHeader height={{ base: 50, md: 70 }}>
      <Flex align="center" sx={{ height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={toggle}
            size="md"
            color={opened ? colors.rose[5] : colors.sky[7]}
            mr="xl"
          />
        </MediaQuery>
        <StyledTitle order={1}>Framer Motion Sandbox</StyledTitle>
      </Flex>
    </StyledHeader>
  )
}
