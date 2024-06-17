import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaRoad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Road Explorer
          </Heading>
          <Text fontSize="lg">
            Discover the most amazing roads around the world.
          </Text>
        </Box>
        <Box boxSize="sm">
          <Image src="/images/road.jpg" alt="Scenic Road" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaRoad />}>
          Start Your Journey
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;