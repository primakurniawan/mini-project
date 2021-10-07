import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";
import newsReducer from "./newsSlice";
import savedReducer from "./savedSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  news: newsReducer,
  saved: savedReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistedStore = persistStore(store);

export { store, persistedStore };
