import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Flex, Select, useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {

    const { colorMode, toggleColorMode } = useColorMode()


  return (
    <>
        <Flex justifyContent={"space-between"} mx={10}>
         {colorMode === 'light' ? <MoonIcon mt={5} onClick={toggleColorMode} size={20} /> : <SunIcon  mt={5} onClick={toggleColorMode} size={20}/>}
        <Select w={'fit-content'}>
            <option>EN</option>
            <option>FR</option>
            </Select>  
        </Flex>
    </>
  )
}
