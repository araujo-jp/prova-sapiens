import { Flex, Stack, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'

import { Logo } from '../components/logo'
import { Input } from '../components/form';

const Home: NextPage = () => {
  return (
    <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">

      <Stack width="100%" maxWidth={600} align="center" spacing="2">

        <Logo width="auto" fontSize="6xl" />

        <Flex as="form" width="100%" maxWidth={400} bg="gray.800" padding="8" borderRadius={8} flexDir="column">

          <Stack spacing="5">

            <Input label="E-mail" name="email" type="email" tabIndex={1} />

            <Input label="Senha" name="password" type="password" tabIndex={2} />

          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="orange"
            size="lg"
          >
            Entrar
          </Button>

        </Flex>

      </Stack>

    </Flex>

  )
}

export default Home
