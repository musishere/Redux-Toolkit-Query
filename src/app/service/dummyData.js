import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "Products",

  baseQuery: fetchBaseQuery({ baseUrl: "http://dummyjson.com" }),

  endpoints: (builder) => ({
    // get all products
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
