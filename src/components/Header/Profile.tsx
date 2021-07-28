import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Rafael Gatti</Text>
        <Text color="gray.300" fontSize="small">
          rafaelgatti@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Rafael Gatti" src="https://github.com/rafaelgatti.png" />
    </Flex>
  );
}