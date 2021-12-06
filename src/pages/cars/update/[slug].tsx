import { Box, Flex, Divider, VStack, SimpleGrid, HStack, Button, Heading, Spinner, Text } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Input } from '../../../components/form';
import { Header } from '../../../components/Header';
import { Sidebar } from '../../../components/Sidebar';
import { createCar } from '../../../services/hooks/createCar';
import { useCars } from '../../../services/hooks/useCars';

interface Car {
  id: string;
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: string;
  year_model: string;
  sale_price: string;
}

type CreateCarFormData = {
  model_name: string,
  description: string,
  license_plate: string,
  brand: string,
  year_manufactory: number,
  year_model: number,
  sale_price: number,
};

const createCarFormSchema = yup.object({
  model_name: yup.string().required('Nome do carro obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  license_plate: yup.string().required('Placa do carro obrigatório'),
  brand: yup.string().required('Marca obrigatório'),
  year_model: yup.number().required('Ano do modelo obrigatório').min(1900).max(2099),
  year_manufactory: yup.number().required('Ano de fabricação obrigatório').min(1900).max(2099),
  sale_price: yup.number().required('Valor do automóvel obrigatório'),
})

export default function CreateCar() {
  const router = useRouter()
  const url = router.asPath
  const slug = url.split('/');
  const id = slug[3]
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createCarFormSchema)
  });

  const { data, isLoading, error, isFetching, refetch } = useCars()

  const car = data?.find(car => car.id === id)


  const handleCreateCar: SubmitHandler<CreateCarFormData> = async (values) => {
    const response = await createCar({ ...values })
    if (response) {
      router.push('/dashboard');
    } else {
      alert('Falha na criação do carro')
    }
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p="8" onSubmit={handleSubmit(handleCreateCar)}>
          <Heading size="lg" fontWeight="normal">Atualizar dados</Heading>

          <Divider borderColor="gray.700" my="6" />

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
              <><VStack spacing="4">
                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                  <Input
                    className="model_name"
                    label="Modelo do automóvel"
                    value={car?.model_name}
                    error={formState.errors.model_name}
                    {...register('model_name')} />

                  <Input
                    className="brand"
                    label="Marca do automóvel"
                    value={car?.brand}
                    error={formState.errors.brand}
                    {...register('brand')} />

                  <Input
                    className="license_plate"
                    label="Placa do automóvel"
                    value={car?.license_plate}
                    error={formState.errors.license_plate}
                    {...register('license_plate')} />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                  <Input
                    className="year_manufactory"
                    value={car?.year_manufactory}
                    label="Ano de fabricação"
                    type="number"
                    error={formState.errors.year_manufactory}
                    {...register('year_manufactory')} />

                  <Input
                    className="year_model"
                    value={car?.year_model}
                    label="Ano do modelo"
                    type="number"
                    error={formState.errors.year_model}
                    {...register('year_model')} />

                  <Input
                    className="sale_price"
                    label="Valor de venda automóvel"
                    value={car?.sale_price}
                    error={formState.errors.sale_price}
                    {...register('sale_price')} />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                  <Input
                    className="description"
                    label="Descrição"
                    value={car?.description}
                    type="text"
                    error={formState.errors.description}
                    {...register('description')} />
                </SimpleGrid>
              </VStack><Flex mt="8" justify="flex-end">
                  <HStack spacing="4">

                    <Link href="/dashboard" passHref>
                      <Button colorScheme="whiteAlpha">
                        Cancelar
                      </Button>
                    </Link>

                    <Button type="submit" colorScheme="green" isLoading={formState.isSubmitting}>
                      Salvar
                    </Button>
                  </HStack>
                </Flex></>
            )
          }




        </Box>

      </Flex >

    </Box >
  )
}
