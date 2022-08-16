import { configureStore } from '@reduxjs/toolkit'
import { productsAPI } from './api/productsAPI'
import storeSlice from './storeSlice'

export const store = configureStore({
  reducer: {
    storeSlice,
    [productsAPI.reducerPath] : productsAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch