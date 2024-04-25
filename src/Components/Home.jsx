import React from "react";
import {Box, Container, VStack,Text,Button, HStack} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


function Home() {
const  navigate = useNavigate();

  return (
    <Box m={8} >
      <Container h={"90vh"} width="350px" bg={"gray.50"} border="2px" 
       borderColor="gray.200">
        <HStack>
        <Text textAlign={"left"} marginTop={420}>
        <Text fontSize={25} fontWeight={"bold"}>
          Welcome to PopX
        </Text>

        <Text textColor={"gray.500"}>
            Lorem ipsum dolor sit amet  <br />
            consectetur adipisicing elit.
        </Text>
        </Text>
        </HStack>
       
       <VStack  marginTop={6}>
       <Button w="full" bg={"purple.600"} textColor={"white"} 
      onClick={() => navigate("/signup")} 
       >
        Create Account
        </Button>
       <Button w="full"  bg={"purple.200"}
        onClick={() => navigate("/login")} 
        >
        Already Registered? Login</Button>
       </VStack>

      </Container>
    </Box>
  )
}

export default Home;
