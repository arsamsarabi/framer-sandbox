import { AppShell, Text, useMantineTheme } from '@mantine/core';

import { Header, Navbar } from './components';

export const App = () => {
  const { colors, colorScheme } = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? colors.dark[8] : colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbar />}
      header={<Header />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  )
}
