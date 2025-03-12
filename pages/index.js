import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [titre, setTitle] = useState([""]);
  const [quantity, setQuantity] = useState([""]);
  const [files,setFiles] = useState()

  const AddFiels = () => {
    setTitle([...titre, ""]);
    setQuantity([...quantity, ""]);
  };
  const removeField = (id) => {
    const updatedtitre = titre.filter((_, index) => index !== id);
    const updatedquantity = quantity.filter((_, index) => index !== id);

    setQuantity(updatedquantity);
    setTitle(updatedtitre);
  };

  const updatedField = (groupId, id, value) => {
    if (groupId == 0) {
      titre[id] = value;
    } else {
      quantity[id] = value;
    }
    setTitle(titre)
    setQuantity(quantity)



    const updatedInputGroups = titre.map((group, index) => {
      if (index === id) {
        titre[id] = value;
      }
      return group;
  });
  setTitle(updatedInputGroups);
  };


  const sendImages = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("test","good")
    formData.append("good","test")
    formData.append("type","image")
    formData.append('imageFile', files);
    axios.post("api/hello",formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

  const sendText = () =>{
    axios.post("api/hello",{
      titre:titre,
      quantite:quantity,
      dated: new Date().toISOString(),
      type:"Text"
    }).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

  return (
    <Flex>
      <Box
        bgImg={"./sideImage.jpg"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        width={"100%"}
        minH={"100vh"}
        display={{ base: "none", lg: "block" }}
      ></Box>
      <Box bgColor={"#f7e49f"} width={"100%"} minH={"100vh"} paddingX={20}>
        <Heading textAlign={"center"} my={20} textTransform={"capitalize"}>
          Bienvenue sur le gestionnaire de compte
        </Heading>
        {/* <Box
          mt={20}
          mb={10}
          alignContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text fontSize={"lg"} fontWeight={600} textTransform={"capitalize"}>
            Envoyer une photo
          </Text>
          <Input
            alignContent={"center"}
            alignItems={"center"}
            border={"1px solid black"}
            bgColor={"white"}
            width={"50%"}
            height={"50px"}
            
            type="file"
            onChange={(e)=>setFiles(e.target.files[0])}
            accept="image/*"
          />
        </Box>
        <Center mb={20}>
          <Button onClick={sendImages} colorScheme="blue">Envoyer</Button>
        </Center> */}
        <Box
          mb={20}
          alignContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text fontSize={"lg"} fontWeight={600} textTransform={"capitalize"}>
            Saisir les informations directement
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            my={5}
            justifyContent={"space-around"}
          >
            <Box>
              <Text>Produit</Text>
              <Input
                type="text"
                placeholder="Nom du produit"
                bgColor={"white"}
                border={"1px solid black"}
                height={"50px"}
                value={titre[0]}
                onChange={(e) => updatedField(0, 0, e.target.value)}
                width={{base:"100%",lg:"90%"}}
              />
            </Box>
            <Box>
              <Text>quantité</Text>
              <Input
                type="text"
                placeholder="quantité"
                bgColor={"white"}
                height={"50px"}
                value={quantity[0]}
                onChange={(e) => updatedField(1, 0, e.target.value)}
                width={{base:"100%",lg:"90%"}}
                border={"1px solid black"}
              />
            </Box>
            <IoIosAddCircle onClick={AddFiels} fontSize={{base:64,lg:34}} />
          </Box>

          <Box
            display={"grid"}
            // gridTemplateColumns={{ base: "none", lg: "1fr" }}
            justifyContent={"justify-around"}
            columnGap={20}
            rowGap={10}
          >
            {titre.map((data, index) => {
              if (index != 0) {
                return (
                  <>
                    <Flex alignItems={"center"} justifyContent={"space-around"}>
                      <Box>
                        <Text>Produit</Text>
                        <Input
                          type="text"
                          placeholder="Nom du produit"
                          bgColor={"white"}
                          border={"1px solid black"}
                          height={"50px"}
                          value={titre[index]}
                          onChange={(e) =>
                            updatedField(0, index, e.target.value)
                          }
                          width={{base:"100%",lg:"90%"}}
                        />
                      </Box>
                      <Box>
                        <Text>quantité</Text>
                        <Input
                          type="text"
                          placeholder="quantité"
                          bgColor={"white"}
                          height={"50px"}
                          value={quantity[index]}
                          onChange={(e) =>
                            updatedField(1, index, e.target.value)
                          }
                          width={{base:"100%",lg:"90%"}}
                          border={"1px solid black"}
                        />
                      </Box>
                      <MdDeleteForever
                        onClick={() => removeField(index)}
                        fontSize={{base:64,lg:34}}
                      />
                    </Flex>
                  </>
                );
              }
            })}
          </Box>
          <Center mt={20}>
            <Button colorScheme="green" onClick={()=>sendText()}>Envoyer</Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
}
