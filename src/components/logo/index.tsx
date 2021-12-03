import { Text, TextProps } from '@chakra-ui/react';

type LogoProps = TextProps

export function Logo({ ...rest }: LogoProps) {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color="orange.500"
      {...rest}
    >
      Sapiens
      <Text as="span" ml="1" color="gray.50">
        .
      </Text>
    </Text>
  );
}