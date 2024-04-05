import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Flex px={20} pb={2} borderBottom={"1px solid gray"} justifyContent={"space-between"} >
    <Heading>F-Gest</Heading>
    <InputGroup width={"500px"} px={10} borderRadius={"25px"} border={"1px solid black"}>
        <Input _hover={{border:"none"}} _active={{border:"none"}} border={"none"} type='text' placeholder='search a consumer'/>
        <InputRightElement as={SearchIcon} size={5} width={10} height={10}/>
    </InputGroup>
    <Avatar/>
    </Flex>
  )
}

export default Navbar