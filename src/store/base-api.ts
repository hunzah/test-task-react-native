import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {queryParams, ResponseType} from "./types";

const apiKey = "UNDkYpzngDWTlMo961oDZdYYy4ayaePI2Y6PFhb1";
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
    }),
    endpoints: builder => {
        return {
            getPhotos: builder.query<ResponseType, queryParams>({
                query: ({ date, abbreviation }) => `?earth_date=${date}&camera=${abbreviation}&api_key=${apiKey}`,
            }),
        }
    },
})

export const { useGetPhotosQuery } = baseApi