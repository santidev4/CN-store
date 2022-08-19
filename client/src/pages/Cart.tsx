import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Badge
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import CartItem from '../components/CartItem'
import { useAppSelector } from '../redux/hooks'

// TODO funcion que envie a whatsapp
// TODO renderizado condicional con el estado global con titulo, cantidad, botones de + y -, y delete
// TODO agregar opcion del envio. Si es con envio tiene que haber un input para la direccion



function Cart() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef() as any
  
  const products = useAppSelector(state => state.storeSlice.Sell)
  const totalPrice = products.reduce((prev: number, curr) => prev + (curr.price * curr.quantity), 0)
  const cellNumber = 5492974111199
  const whatsappURL = 'https://wa.me'
  const textReduce = products.reduce((text, el) => {
    return text+= `${el.quantity} ${el.title} x ${el.price * el.quantity} `
  }, 'Hola quiero pedir: ')

  const handleSend = () => {
    window.open(`${whatsappURL}/${cellNumber}?text=${textReduce} *TOTAL*: ${totalPrice}`)
  }

  return (

      <>

      <Box>
        <Button 
          w='4rem' 
          colorScheme='green' 
          variant='ghost' 
          ref={btnRef} 
          onClick={onOpen}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
        </Button>
        <Badge colorScheme='red'>{ products === undefined ? 0 : products.length }</Badge>
      </Box>

      <Drawer
        size='md'
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Compra</DrawerHeader>

          <DrawerBody>

            {products && products.map(product => (
              <CartItem 
              key={product.id} 
              title={product.title} 
              price={product.price} 
              image={product.image} 
              id={product.id}
              quantity={product.quantity} />
             
            ))}
           
          </DrawerBody>
            <Box>Total: ${totalPrice} </Box>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={handleSend}>Enviar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </>
    )
}

export default Cart