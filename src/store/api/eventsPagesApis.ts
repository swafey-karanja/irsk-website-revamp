import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface WPItem {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json: {
    og_image?: { url: string }[];
  };
}

export interface Webinar {
  id: number;
  slug: string;
  title: { rendered: string };
  yoast_head_json?: {
    og_image?: { url: string }[];
  };
  excerpt?: { rendered: string };
}

export const eventPagesApi = createApi({
  reducerPath: "eventPagesApi",
  keepUnusedDataFor: 300,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://irskenya.or.ke/wp-json/wp/v2/",
  }),
  endpoints: (builder) => ({
    getConferencesData: builder.query<WPItem[], void>({
      query: () => "conference?per_page=10&orderby=date&order=desc",
    }),
    getForumsData: builder.query<WPItem[], void>({
      query: () => "forum?per_page=10&orderby=date&order=desc",
    }),
    getWebinarsData: builder.query<Webinar[], void>({
      query: () => "webinar?per_page=10&orderby=date&order=desc",
    }),
    getAwardsData: builder.query<WPItem[], void>({
      query: () => "endpoint2",
    }),
    getOtherEventsData: builder.query<WPItem[], void>({
      query: () => "endpoint2",
    }),
    // add more endpoints here
  }),
});

export const {
  useGetAwardsDataQuery,
  useGetConferencesDataQuery,
  useGetForumsDataQuery,
  useGetOtherEventsDataQuery,
  useGetWebinarsDataQuery,
} = eventPagesApi;
