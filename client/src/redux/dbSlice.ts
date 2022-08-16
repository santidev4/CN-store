import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store";
import axios from "axios";

interface CardProduct {
    title: string
    price: number
    description: string
    image: string
}

interface CardProductState {
    products: CardProduct[]
}

const initialState: CardProductState = {
    products: []
}

export const dbSlice = createSlice({
    name: 'dbSlice',
    initialState,
    reducers: {
        getProducts: (state, action:PayloadAction<CardProduct>) => {
        }
    }
})

export const { getProducts } = dbSlice.actions

export default dbSlice.reducer