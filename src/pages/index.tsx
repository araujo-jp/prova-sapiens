import { Flex, Stack, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useRouter } from 'next/router';

import { Logo } from '../components/logo'
import { Input } from '../components/form';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

const Home: NextPage = () => {
  const router = useRouter();

    const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    console.log(values)
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (formState.errors) {
      router.push('/dashboard');
    }
  };

  return (
    <>
      <Flex width="100vw" height="100vh" align="center" justify="center" direction="column">

        <Stack width="100%" maxWidth={600} align="center" spacing="2">

          <Logo width="auto" fontSize="6xl" />

          <Flex as="form" width="100%" maxWidth={400} bg="gray.800" padding="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

            <Stack spacing="5">

              <Input
                className="email"
                label="E-mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
              <Input
                className="password"
                label="Senha"
                type="password"
                error={formState.errors.password}
                {...register('password')}
              />

            </Stack>

            <Button
              type="submit"
              mt="6"
              colorScheme="orange"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>

          </Flex>

        </Stack>

      </Flex>
    </>
  )
}

export default Home
