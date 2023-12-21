// Import necessary functions from the Redux Toolkit for API creation and querying
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Get the RapidAPI key from the environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Create an API using Redux Toolkit's createApi function
export const articleApi = createApi({
    // Specify the slice name for the reducer
    reducerPath: 'articleApi',
    
    // Configure the base query settings, including the RapidAPI endpoint and headers
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            // Set the RapidAPI key and host in the headers
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },
    }),

    // Define endpoints for API operations
    endpoints: (builder) => ({
        // Define an endpoint for getting article summaries
        getSummary: builder.query({
            // Specify the query string with URL encoding for the article URL, length, and language
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3&lang=${params.language}`, 
        }),
    }),
});

// Destructure the generated hooks from the created API for use in React components
export const { useLazyGetSummaryQuery } = articleApi;
