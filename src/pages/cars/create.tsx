import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react';
import { Input } from '../../components/form';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateCar() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          {/* <Heading size="lg" fontWeight="normal">Cadastrar carro</Heading> */}

          <Divider borderColor="gray.700" my="6" />

          <VStack spacing="4">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name_model" label="Nome do modelo" />
              <Input name="license_plate" label="Placa do carro" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="year_manufactory" label="Ano de fabricação" />
              <Input name="year_model" label="Ano do modelo" />
              <Input name="sale_price" label="Preço" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="description" label="Descrição" type="text" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">
                Cancelar
              </Button>
              <Button colorScheme="green">
                Salvar
              </Button>
            </HStack>

          </Flex>

        </Box>

      </Flex>

    </Box>
  )
}