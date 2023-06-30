import type { PropsWithChildren } from 'react'
import { NavbarContextProvider } from '../../context'

type ContextProviderProps = PropsWithChildren<unknown>

export const ContextProvider = ({ children }: ContextProviderProps) => {
  return <NavbarContextProvider>{children}</NavbarContextProvider>
}
