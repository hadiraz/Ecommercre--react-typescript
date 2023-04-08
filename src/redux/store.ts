import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import { ProductType } from "../types/product";
import profileReducer from "./reducers/profileReducer";

export type CartItem = {
    count : number
}
export type ItemType = CartItem & ProductType ;

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        profile : profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
