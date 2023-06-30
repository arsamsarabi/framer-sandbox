import { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ContextProvider } from './ContextProvider'

type Props = PropsWithChildren<unknown>

export const Providers = ({ children }: Props) => (
  <ContextProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ContextProvider>
)
