import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, HStack } from '@chakra-ui/react'
import { RiAddLine, RiDeleteBack2Line, RiPencilLine } from 'react-icons/ri';
import Link from 'next/link';

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';
import { Pagination } from '../components/Pagination'

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" height="100vh">

        <Header />

        <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">

          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">

            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal" color="orange">Carros</Heading>

              <Link href="/cars/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo Carro
                </Button>
              </Link>

            </Flex>

            <Table colorScheme="whiteAlpha">

              <Thead>
                <Tr>
                  <Th>Modelo</Th>
                  <Th>Placa</Th>
                  <Th>Marca</Th>
                  <Th>Valor de venda</Th>
                  <Th w="3"></Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>Sienna</Td>
                  <Td>CDF-8454</Td>
                  <Td>Fiat</Td>
                  <Td>15.000</Td>
                  <Td>
                    <HStack spacing="2">
                      <Button as="a" size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBack2Line} />}>
                        Apagar
                      </Button>

                      <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine} />}>
                        Editar
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              </Tbody>

              <Pagination />

            </Table>

          </Box>

        </Flex>

      </Flex>
    </>
  )
}