// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { eventPagesApi } from "./api/eventsPagesApis";
import { eventDetailsApi } from "./api/eventsDetailsApis";

export const store = configureStore({
  reducer: {
    [eventPagesApi.reducerPath]: eventPagesApi.reducer,
    [eventDetailsApi.reducerPath]: eventDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      eventPagesApi.middleware,
      eventDetailsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
