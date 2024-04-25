import React from 'react';
import{Box, Container, VStack, HStack, Button, Text, FormControl, FormLabel, Input, 
  Radio} from "@chakra-ui/react";
  import { useNavigate } from 'react-router-dom';

function Login() {
  const  navigate = useNavigate();

  return (
    <Box p={5}>
    <Container h={"90vh"} width="350px" bg={"gray.50"} border="2px" 
       borderColor="gray.200">
        <HStack > 
      <Text>
      <Text fontSize={25} fontWeight={"bold"} marginTop={4}>
      Create to your <br></br>
       PopX account
      </Text>
      </Text>
        </HStack>

       <VStack marginTop={5}>
         <FormControl position="relative" isRequired>
          <VStack w="full">
          <FormLabel
          position="absolute"
          top="-10px"
          left="8px" 
          bg="gray.50"
          px={2} 
          zIndex="2"
          textColor="purple.600">
           Full Name
          </FormLabel>
          <Input placeholder='Marry Doe'/>
          </VStack>
          </FormControl>
          
          
          <FormControl position="relative" marginTop={4} isRequired>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                textColor="purple.600">
                Phone number
              </FormLabel>
              <Input placeholder='Marry Doe' />
            </VStack>
          </FormControl>

          <FormControl position="relative" marginTop={4} isRequired>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                textColor="purple.600">
                Email address
              </FormLabel>
              <Input placeholder='Marry Doe' />
            </VStack>
          </FormControl>

          <FormControl position="relative" marginTop={4} isRequired>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                textColor="purple.600">
                Password
              </FormLabel>
              <Input placeholder='Marry Doe' />
            </VStack>
          </FormControl>

          <FormControl position="relative" marginTop={4} isRequired>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                textColor="purple.600">
                Company name
              </FormLabel>
              <Input placeholder='Marry Doe'/>
            </VStack>
          </FormControl>

          <FormControl position="relative" marginTop={4} isRequired>
            <VStack w="full">
              <FormLabel
                position="absolute"
                top="-10px"
                left="8px"
                bg="gray.50"
                px={2}
                zIndex="2"
                >
                Are you an Agency?
              </FormLabel>
            </VStack>
              <HStack marginTop={5} marginLeft={5}>
                <Radio >Yes</Radio>
                <Radio>No</Radio>
              </HStack>
          </FormControl>

         
          </VStack>

              <Button w="full" textColor="white" bg="purple.500" marginTop="120px"
               onClick={() => navigate("/profile")} >
               Create Account
              </Button>

    
    </Container>
  </Box>
  )
}

export default Login;
