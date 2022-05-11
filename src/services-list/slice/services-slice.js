import {createSlice} from "@reduxjs/toolkit";
import {v4} from "uuid";

const initialState = {
    items: [
        {id: '1', title: 'Clear the desk', price: '300'},
        {id: '2', title: 'Clear the desk once again', price: '600'},
        {id: '3', title: 'Clear the desk third time', price: '900'}
    ],
    edited: null,
    filterWord: null,
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addService: (state, action) => {
            state.items.push({
                ...action.payload,
                id: v4(),
            })
        },
        deleteService: (state, action) => {
            const idx = state.items.findIndex(item => item.id === action.payload);
            if (idx >= 0) {
                state.items.splice(idx, 1);
                state.edited = null;
            }
        },
        editService: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                state.edited = {...item};
            }
        },
        updateService: (state, action) => {
            console.log(action.payload);
            let idx = state.items.findIndex(item => item.id === action.payload.id);
            if (idx >= 0) {
                state.items[idx] = {
                    ...state.items[idx],
                    title: action.payload.title,
                    price: action.payload.price,
                };
            }
            state.edited = null;
        },
        clearEdited: (state) => {
            state.edited = null;
        },
        addFilter: (state, action) => {
            state.filterWord = action.payload;
            if (state.filterWord && state.edited) {
                state.edited = null;
            }
        },
    }
});

export const {
    addService,
    deleteService,
    updateService,
    editService,
    clearEdited,
    addFilter,
} = servicesSlice.actions;

export default servicesSlice.reducer;
