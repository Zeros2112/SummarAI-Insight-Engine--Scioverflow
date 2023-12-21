// Import necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the created articleApi from the 'article' module
import { articleApi } from './article';

// Create the Redux store using configureStore
export const store = configureStore({
    // Define the reducers for the store
    reducer: {
        // Use the reducerPath from articleApi as the key for the articleApi.reducer
        [articleApi.reducerPath]: articleApi.reducer,
    },
    
    // Configure middleware for the store
    middleware: (getDefaultMiddleware) => 
        // Concatenate additional middleware with the default middleware
        getDefaultMiddleware().concat(articleApi.middleware)
});
