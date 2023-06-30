import { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

type Props = PropsWithChildren<unknown>

export const ThemeProvider = ({ children }: Props) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={theme}
  >
    {children}
  </MantineProvider>
)

