import { Stack } from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiLogoutCircleLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>        
      </NavSection>
      <NavSection title="CONFIGURAÇÃO">
        <NavLink href="/" shouldMatchExactHref icon={RiLogoutCircleLine}>
          Sair
        </NavLink>
      </NavSection>
    </Stack>
  );
}