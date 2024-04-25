import React from 'react';
import{Box, Container, VStack, HStack, Button, Text, FormControl,
   FormLabel, Input} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


function Login() {
  const  navigate = useNavigate();


  return (
    <Box m={8} >
    <Container h={"90vh"} width="350px" bg={"gray.50"} border="2px" 
       borderColor="gray.200">
        <HStack > 
      <Text>
      <Text fontSize={25} fontWeight={"bold"} marginTop={4}>
       Signin to your <br></br>
       PopX account
      </Text>

      <Text textColor={"gray.500"}>
          Lorem ipsum dolor sit amet  <br />
          consectetur adipisicing elit.
      </Text>
      </Text>
        </HStack>

       <VStack marginTop={8}>
         <FormControl position="relative">
          <VStack w="full">
          <FormLabel
          position="absolute"
          top="-10px"
          left="8px" 
          bg="gray.50"
          px={2} 
          zIndex="2"
          textColor="purple.500">
          Email Address
          </FormLabel>
          <Input placeholder='Enter email address'/>
          </VStack>
          </FormControl>
          
          
          <FormControl position="relative" marginTop={4}>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                textColor="purple.500">
                Password
              </FormLabel>
              <Input placeholder='Enter password' />

            </VStack>
          </FormControl>
              <Button w="full" textColor="white" bg="gray.300" marginTop={4} 
               onClick={() => navigate("/profile")} 
              >
                Login
                </Button>
            </VStack>
    </Container>
  </Box>
  )
}

export default Login;
