import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

// Definir un tipo para el estado del slice 
interface CartItem {
    title: string
    price: number,
    id: string,
    image: string,
    quantity: number
}

interface stateType {
    Sell: CartItem[]
}

const compra: CartItem[] = [
    {
        title: 'apa',
        price: 400,
        image: 'etrrt',
        id: 'fgd',
        quantity: 2
    }
] 

// Definir estado inicial
const initialState: stateType = {
    Sell: []
}

// TODO agregar la compra al estado para renderizar en el cart

export const storeSlice = createSlice({
    name: 'store',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addProduct: (state, action: PayloadAction<CartItem>) => {
            state.Sell.push(action.payload)
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            state.Sell.forEach(e => {
                if(e.id === action.payload) e.quantity+=1
            })
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            state.Sell.forEach(e => {
                if(e.id === action.payload) e.quantity-=1
            })

        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.Sell =  state.Sell.filter(e => e.id !== action.payload)
        }
    }
})

export const { addProduct, incrementQuantity, decrementQuantity, deleteProduct } = storeSlice.actions

export default storeSlice.reducer
