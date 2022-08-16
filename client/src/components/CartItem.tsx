import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { decrementQuantity, deleteProduct, incrementQuantity } from '../redux/storeSlice'

// TODO tiene que tener img, titulo, cantidad, + y -, y eliminar

interface CartItemProps {
  title: string
  price: number
  image: string
  id: string
  quantity: number
}

function CartItem({title, price, image, quantity, id}: CartItemProps) {
  
  const dispatch = useAppDispatch()
  const [qt, setQt] = useState<number>()

  const handleIncrement = () => {
    dispatch(incrementQuantity(id))
  }
  const handleDecrement = () => {
    dispatch(decrementQuantity(id))
  }

  const handleDelete = () => {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
  })

  return (
    <Box>
      <Flex justify='space-between'>

        <HStack>
            <Image 
                src={image}
                boxSize='8rem'
                />
            <VStack>
              <Box>
                <Heading size='md'>
                  {title}
                </Heading>
              </Box>
              <Box>
                <Text >
                  ${price}
                </Text>
              </Box>
            </VStack>
        </HStack>

        <Flex align='center'>
        <VStack>
          <Box >
            <Button colorScheme='teal' size='sm' mr='2' disabled={quantity <= 1} onClick={handleDecrement} > - </Button>
            <span>{quantity}</span>
            <Button colorScheme='teal' size='sm' ml='2' disabled={quantity >=5} onClick={() => handleIncrement()}> + </Button>
          </Box> 
          <Box>{quantity * price}</Box>
        <Box>
          <Button colorScheme='red' size='sm' onClick={handleDelete} >Eliminar</Button>
        </Box>
        </VStack>
        </Flex>

        
      </Flex>
    </Box>
  )
}

export default CartItem

