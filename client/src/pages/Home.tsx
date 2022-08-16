import { Grid, GridItem } from "@chakra-ui/react"
import Card from "../components/Card"
import { productsAPI, useGetProductsDataQuery } from '../redux/api/productsAPI'



function Home() {

  const { data, isLoading } = useGetProductsDataQuery()

  return (
    <>
    <Grid 
      templateColumns='repeat(4, 1fr)' 
      gap={6}
      m='8'
    >
      {data && data.map(p => (
        
          <GridItem w='100%' key={p.id}>
            <Card 
              title={p.title}
              price={p.price}
              description={p.description}
              image={p.image}
              id={p.id}
            />

          </GridItem>
          ))
        }
      </Grid>
    </>
  )
}

export default Home