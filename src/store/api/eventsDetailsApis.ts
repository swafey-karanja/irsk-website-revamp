import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface WPBaseItem {
  title: { rendered: string };
  content: { rendered: string };
  yoast_head_json?: {
    og_image?: { url: string }[];
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
  acf?: {
    gallery?: { url: string; alt?: string }[];
    videos?: {
      id: string;
      title: string;
      duration: string;
      thumbnail: string;
    }[];
    documents?: {
      name: string;
      url: string;
      type: string;
    }[];
    other_events?: {
      image: string;
      title: string;
      description: string;
      slug: string;
    }[];
  };
}

export const eventDetailsApi = createApi({
  reducerPath: "eventDetailsApi",
  keepUnusedDataFor: 300,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://irskenya.or.ke/wp-json/wp/v2/",
  }),
  endpoints: (builder) => ({
    getConferenceDetailsData: builder.query<WPBaseItem, string>({
      query: (slug) => `conference?slug=${slug}&_embed`,
      transformResponse: (response: WPBaseItem[]) => response[0], // ✅ Get first match
    }),
    getForumDetailsData: builder.query<WPBaseItem, string>({
      query: (slug) => `forum?slug=${slug}&_embed`,
      transformResponse: (response: WPBaseItem[]) => response[0], // ✅ Get first match
    }),
    getWebinarDetailsData: builder.query<WPBaseItem, string>({
      query: (slug) => `webinar?slug=${slug}&_embed`,
      transformResponse: (response: WPBaseItem[]) => response[0], // ✅ Get first match
    }),
    getAwardDetailsData: builder.query<WPBaseItem, string>({
      query: (slug) => `award?slug=${slug}&_embed`,
      transformResponse: (response: WPBaseItem[]) => response[0], // ✅ Get first match
    }),
    getOtherEventDetailsData: builder.query<WPBaseItem, string>({
      query: (slug) => `other-event?slug=${slug}&_embed`,
      transformResponse: (response: WPBaseItem[]) => response[0], // ✅ Get first match
    }),
  }),
});

export const {
  useGetAwardDetailsDataQuery,
  useGetConferenceDetailsDataQuery,
  useGetForumDetailsDataQuery,
  useGetOtherEventDetailsDataQuery,
  useGetWebinarDetailsDataQuery,
} = eventDetailsApi;
