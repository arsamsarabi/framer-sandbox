import { useDisclosure } from '@mantine/hooks';
import { createContext, PropsWithChildren } from 'react';

export type NavbarContextType = {
  opened: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

type NavbarProviderProps = PropsWithChildren<unknown>;


export const NavbarContext = createContext<NavbarContextType>({
  opened: false,
  open: () => console.log("open"),
  close: () => console.log("close"),
  toggle: () => console.log("toggle")
});

export const NavbarContextProvider = ({ children }: NavbarProviderProps) => {
  const [opened, { open, close, toggle }] = useDisclosure(false);

  return (
    <NavbarContext.Provider value={{
      opened,
      open,
      close,
      toggle,
    }}>{children}</NavbarContext.Provider>
  );
}
