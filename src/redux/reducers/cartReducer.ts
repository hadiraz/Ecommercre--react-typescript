import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ItemType, RootState } from "../store"
export type Initial = {
    items: ItemType[],
    totalItems: number,
    totalPrice: number,
    // completedOrders: { items: ItemType[], totalItems: number, totalPrice: number }[]
    completedOrders: string
}
export type CompletedOrder = {
    items: ItemType[];
    totalPrice: number;
    totalCount: number;
    time: number;
    orderNo: string;
}
const initialState: Initial = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    completedOrders: "[]"
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        ADD_NEW_PRODUCT: (state, action: PayloadAction<ItemType>) => {
            state.items.push(action.payload);
            itemDetailChecker(state)
        },
        ADD_PRODUCT: (state, action: PayloadAction<ItemType>) => {
            state.items.map((Value, key) => {
                if (Value.id === action.payload.id) {
                    state.items[key].count += 1
                    itemDetailChecker(state)
                };
            })
        },
        DECREASE_ITEM: (state, action: PayloadAction<ItemType>) => {
            state.items.map(value => {
                if (value.id === action.payload.id) {
                    value.count -= 1;
                    itemDetailChecker(state)
                }
            })
        },
        REMOVE_ITEM: (state, action: PayloadAction<ItemType>) => {
            state.items = state.items.filter(value => value.id !== action.payload.id);
            itemDetailChecker(state)
        },
        COMPLETE_ORDER: (state) => {
            let parsedOrders = JSON.parse(state.completedOrders);
            const orderNo = `DG-${Date.now()}`;
            const time = new Date().getTime();
            parsedOrders.push({ items: state.items, totalPrice: state.totalPrice, totalCount: state.totalItems, orderNo, time });
            state.completedOrders = JSON.stringify(parsedOrders)
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }
    }

})
const checkTotalCount = (state: ItemType[]) => {
    let counter = 0;
    state.map(value => {
        counter += value.count;
    })
    return counter
}
const checkTotalCost = (state: ItemType[]) => {
    let totalPrice = 0;
    let newState;
    newState = state.map(value => {
        totalPrice += Number((value.price ? (value.count * value.price).toFixed(2) : (value.count * value.price)));
        console.log(totalPrice)
    });
    return Number(totalPrice.toFixed(2));
}
const itemDetailChecker = (state: Initial) => {
    state.totalItems = checkTotalCount(state.items);
    state.totalPrice = checkTotalCost(state.items);

}
export const { ADD_NEW_PRODUCT, ADD_PRODUCT, REMOVE_ITEM, DECREASE_ITEM, COMPLETE_ORDER } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart
export default cartSlice.reducer
