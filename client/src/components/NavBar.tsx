import { Badge, Box, Button, Flex } from "@chakra-ui/react"
import Cart from "../pages/Cart"

function NavBar() {
  return (
    <Flex as='header' 
    // position='fixed' 
    w='100%' 
    px="6"
    py="7"
    align="center"
    justify="space-between"
    bg='gray.100'
    >
      <Box>
        Cuervo Negro
      </Box>
      <Cart />
      
    </Flex>
  )
}

export default NavBar