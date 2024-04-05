import AddedUsers from '@/components/AddedUsers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { Avatar, Box,Input, Button, Container, Flex, HStack, Heading, Stack, StackDivider, Text, VStack, FormLabel, FormControl, Center, AvatarBadge, useColorModeValue, IconButton, TableContainer, Table, TableCaption, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'


function Dashboard() {
    const router = useRouter()

    const [selected,setSelected] = useState(["true","false","false","false","false"])

    const Selection = (number) => {
        selected.map((data,index)=>{
            selected[index] = false
        })
        selected[number]= "true"
        router.replace("/dashboard");
    }

  return (
    <>
    <Navbar/>
    
    <Flex  minH={'89vh'}>
    <Stack spacing={8} direction='row'>
    <Box px={5} shadow='md' >
        <Text fontSize={"20px"} w={"full"} cursor={"pointer"} _hover={{
            bgColor:"#AFF3FE"
        }} onClick={()=>Selection(0)} fontWeight={"semibold"} m={5} p={5} color={selected[0]== "true" ? "blue" : "black"} >Dashboard</Text>
        <Text fontSize={"20px"} w={"full"}cursor={"pointer"} _hover={{
            bgColor:"#AFF3FE"
        }} fontWeight={"semibold"} onClick={()=>Selection(1)} m={5} p={5} color={selected[1]== "true" ? "blue" : "black"} >Users</Text>
        <Text fontSize={"20px"} w={"full"}cursor={"pointer"} _hover={{
           bgColor:"#AFF3FE" 
        }} fontWeight={"semibold"} onClick={()=>Selection(2)} m={5} p={5} color={selected[2]== "true" ? "blue" : "black"} >Product</Text>
        <Text fontSize={"20px"} w={"full"}cursor={"pointer"} _hover={{
            bgColor:"#AFF3FE"
        }} fontWeight={"semibold"} onClick={()=>Selection(3)} m={5} p={5} color={selected[3] == "true"? "blue" : "black"} >Provider</Text>
        <Text fontSize={"20px"}w={"full"} cursor={"pointer"} _hover={{
            bgColor:"#AFF3FE"
        }} fontWeight={"semibold"} onClick={()=>Selection(4)} m={5} p={5} color={selected[4]== "true" ? "blue" : "black"} >Profils</Text>
        <Text fontSize={"20px"} w={"full"}cursor={"pointer"} _hover={{
            bgColor:"#AFF3FE"
        }} fontWeight={"semibold"} onClick={()=>router.push("/")} m={5} p={5}  color={"red"}>Disconnect</Text>
    </Box>
    {/* <Box p={2} shadow='md' borderWidth='1px'>

    </Box> */}
    <Box display={selected[0]== "true" ? "block": "none"} >
      <Heading>Welcome,</Heading>
      <Stack direction={['column', 'row']} spacing='24px'>
  <Box  shadow={"md"} m={10} p={10}>
    <Heading> users</Heading>
    <Text fontWeight={600} fontSize={"15px"}> 0</Text>
  </Box>
  <Box shadow={"md"} m={10} p={10}>
   <Heading> products</Heading>
   <Text fontWeight={600} fontSize={"15px"}> 0</Text>
  </Box>
  <Box  shadow={"md"} m={10} p={10}>
    <Heading> providers</Heading>
    <Text fontWeight={600} fontSize={"15px"}> 0</Text>
  </Box>
  <Box   shadow={"md"} m={10} p={10}>
    <Heading>Buyed</Heading>
    <Text fontWeight={600} fontSize={"15px"}> 0</Text>
  </Box>
  <Box   shadow={"md"} m={10} p={10}>
    <Heading>Selled</Heading>
    <Text fontWeight={600} fontSize={"15px"}> 0</Text>
  </Box>
</Stack>
<Stack  direction={['column', 'row']}>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Last users added</TableCaption>
    <Thead>
      <Tr>
      <Th>Name</Th>
        <Th>Product taked</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Total</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>

<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Last provider added</TableCaption>
    <Thead>
      <Tr>
        <Th>name</Th>
        <Th>Product type</Th>
        <Th isNumeric>Price</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>

<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Product resume</TableCaption>
    <Thead>
      <Tr>
      <Th>name</Th>
        <Th>Product type</Th>
        <Th isNumeric>Price</Th>
        <Th isNumeric>Quantity</Th>
        <Th isNumeric>Selled</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
        <Td isNumeric>30.48</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
        <Td isNumeric>0.91444</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
</Stack>

    </Box>


    <Box display={selected[1]== "true" ? "block": "none"} >
      <Heading>Users section,</Heading>
      <Stack>
       <AddedUsers/>
      </Stack>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
    </Box>



    <Box display={selected[2]== "true" ? "block": "none"} >
      <Heading>Product section,</Heading>
    </Box>



    <Box display={selected[3]== "true" ? "block": "none"} >
      <Heading>Provider section,</Heading>
    </Box>



    <Box display={selected[4]== "true" ? "block": "none"} >
   
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white.50', 'white.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder="UserName"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
      
    </Box>
  
    </Stack>
    </Flex>
    
   <Footer/>
   </>
  )
}

export default Dashboard