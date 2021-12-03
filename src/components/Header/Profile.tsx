import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>João Paulo Araújo</Text>
          <Text color="gray.300" fontSize="small">
            araujojp@pm.me
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Paulo Araújo"
        src="https://github.com/araujo-jp.png"
      />
    </Flex>
  )
}