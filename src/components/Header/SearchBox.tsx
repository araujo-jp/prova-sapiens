import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      paddingY="4"
      paddingX="9"
      marginLeft="20"
      alignSelf="center"
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      maxWidth={500}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        paddingX="4"
        marginRight="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.200' }}
      />
      <Icon as={RiSearchLine} fontSize="20" color="gray.200" />
    </Flex>
  );
}