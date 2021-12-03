import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from '../logo'

import { SearchBox } from './SearchBox'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { RiMenuLine } from 'react-icons/ri'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" width="100%" height="20" maxWidth={1480} marginX="auto" marginTop="4" paddingX="6" align="center">

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        ></IconButton>
      )}

      <Logo width="auto" fontSize="5xl" />

      {isWideVersion && <SearchBox />}

      <Flex align="center" marginLeft="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>

    </Flex>
  )
}
