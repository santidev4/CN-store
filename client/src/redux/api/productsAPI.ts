import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type product = {
    title: string
    description: string
    price: number
    image: string
    user: string
    id: string
}


export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cryptic-wildwood-31727.herokuapp.com' }),
    endpoints: builder => ({
        getProductsData: builder.query<product[], void>({
            query: () => '/products'
        })
    })
})

export const { useGetProductsDataQuery} = productsAPI