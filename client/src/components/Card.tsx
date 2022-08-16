import{ Box, Image, Badge, Button } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addProduct } from '../redux/storeSlice'

// title, price, description, image

// TODO funcion que agregue al carrito, tiene que ser con el id
// TODO disable boton de agregar si un producto esta en el carrito

type ProductProps = {
    title: string
    price: number
    description: string
    image: string
    id: string
}

function Card ({title, price, description, image, id}: ProductProps) {
    const dispatch = useAppDispatch()
    const productsID = useAppSelector(state => state.storeSlice.Sell).map(e => e.id)


    const handleAddProduct = () => {
        dispatch(addProduct({
            title,
            price,
            image,
            id,
            quantity: 1
        }))
    }

    return (
        <Box maxW='xs' borderWidth='1px' m='5' borderRadius='lg' overflow='hidden' shadow={2}>
            <Image 
              src={image}
              boxSize='20rem'
              objectFit='contain'
              />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >
                        {title}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                    >
                            {description}        
                </Box>

                <Box>
                    ${price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                    </Box>
                </Box>

                <Button disabled={productsID.includes(id)} colorScheme='blue' mt='4' onClick={handleAddProduct} >
                    Agregar
                </Button>

            </Box>
        </Box>
    )
}

export default Card