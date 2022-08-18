import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type product = {
    title: string
    description: string
    price: number
    image: string
    user: string
    id: string
}

const REACT_APP_API = process.env.REACT_APP_API || 'http://localhost:3001'

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: builder => ({
        getProductsData: builder.query<product[], void>({
            query: () => '/products'
        })
    })
})

export const { useGetProductsDataQuery} = productsAPI