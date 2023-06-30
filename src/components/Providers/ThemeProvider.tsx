import { MantineProvider } from '@mantine/core';
import { theme } from '../../styles';
import { PropsWithChildren } from 'react';

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

