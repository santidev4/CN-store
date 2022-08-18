import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type product = {
    title: string
    description: string
    price: number
    image: string
    user: string
    id: string
}

const baseUrl = process.env.REACT_APP_API || 'http://localhost:3001'

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: builder => ({
        getProductsData: builder.query<product[], void>({
            query: () => '/products'
        })
    })
})

export const { useGetProductsDataQuery} = productsAPI