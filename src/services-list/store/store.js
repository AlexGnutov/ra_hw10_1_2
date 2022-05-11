import {configureStore} from "@reduxjs/toolkit";
import servicesReducer from "../slice/services-slice";

export const store = configureStore({
    reducer: {
        services: servicesReducer,
    },
});
