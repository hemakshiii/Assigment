import React from 'react';
import{Box, Container, VStack, HStack, Text} from "@chakra-ui/react";
import { Avatar} from '@chakra-ui/react';
import { MdPhotoCamera } from "react-icons/md";

function Profile() {
  return (
    <Box p={5}>
    <Container h={"8vh"} width="350px" border="1px" 
       borderColor="gray.200" borderBottom={"0px"}>
       <HStack bg={"white"} marginTop={5} marginBottom={3}>
        <Text fontWeight={"medium"}>Account Settings</Text>
       </HStack>
    </Container>

    <Container h={"80vh"} width="350px" border="2px" 
       borderColor="gray.100" bg={"gray.50"} borderTop={"0px"}> 
        <HStack>
        <Avatar size="lg" src='https://bit.ly/dan-abramov' marginTop={7}/>
       
        <Box backgroundColor={"purple.600"}rounded={"3xl"} p={1} marginTop={"60px"}
        marginLeft={"-25px"} zIndex={2}>
        <MdPhotoCamera color='white' fontSize={15}/>
        </Box>
        
  
        <div>
        <Text fontWeight={"bold"}>Marry Doe</Text>
        <Text fontWeight={"lg"} >Marry@gmail.com</Text>
     
        </div>
      
        </HStack>

        <VStack marginTop={5}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia corporis reiciendis alias eius ipsam quaerat dolores, 
           </Text>
          
        </VStack>
       

        </Container>
        
      
      
       
  </Box>
  )
}

export default Profile;

