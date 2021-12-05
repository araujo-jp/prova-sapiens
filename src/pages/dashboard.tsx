import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, HStack, Spinner, Text, Link } from '@chakra-ui/react'
import { RiAddLine, RiDeleteBack2Line, RiLoaderLine, RiPencilLine } from 'react-icons/ri';
import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';
import { Pagination } from '../components/Pagination'
import { useCars } from '../services/hooks/useCars';
import { queryClient } from '../services/queryClient';
import { deleteCarbyId } from '../services/hooks/useDeleteCar';


const Dashboard: NextPage = () => {
  const { data, isLoading, error, isFetching, refetch } = useCars()

  async function handleDeleteCar(id: string) {
    const status = await deleteCarbyId(id)

    if (status === 200) {
      alert('Deletado com sucesso ;)')
      refetch()
    } else {
      alert('Erro ;(')
    }
  }

  return (
    <>
      <Flex direction="column" height="100vh">

        <Header />

        <Flex width="100%" maxWidth={1480} marginY="6" marginX="auto" paddingX="6">

          {/* <Sidebar /> */}

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">

            <Flex mb="8" justify="space-between" align="center">

              <Heading size="lg" fontWeight="normal" color="orange">
                Carros cadastrados

                {!isLoading && isFetching && <Spinner size="sm" color="orange.500" ml="5" />}
              </Heading>
              <HStack>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="blue"
                  onClick={() => refetch()}
                  leftIcon={<Icon as={RiLoaderLine} fontSize="20" />}
                >
                  Atualizar dados
                </Button>

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

              </HStack>

            </Flex>

            {
              isLoading ? (
                <Flex justify="center">
                  <Spinner />
                </Flex>
              ) : error ? (
                <Flex justify="center">
                  <Text>Falha ao obter os dados dos carros</Text>
                </Flex>
              ) : (
                <>
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
                      {data?.map(car => {
                        return (
                          <Tr key={car.id}>
                            <Link color="orange.500">
                              <Td>{car.model_name}</Td>
                            </ Link>

                            <Td>{car.license_plate}</Td>
                            <Td>{car.brand}</Td>
                            <Td>R$ {car.sale_price}</Td>
                            <Td>
                              <HStack spacing="2">
                                <Button as="button" onClick={() => handleDeleteCar(car.id)} size="sm" fontSize="sm" colorScheme="red" leftIcon={<Icon as={RiDeleteBack2Line} />}>
                                  Apagar
                                </Button>

                                <Button as="a" size="sm" fontSize="sm" colorScheme="blue" leftIcon={<Icon as={RiPencilLine} />}>
                                  Editar
                                </Button>
                              </HStack>
                            </Td>
                          </Tr>
                        )
                      })}
                    </Tbody>

                    {/* <Pagination /> */}

                  </Table>
                </>
              )
            }

          </Box>

        </Flex>

      </Flex>
    </>
  )
}

export default Dashboard;