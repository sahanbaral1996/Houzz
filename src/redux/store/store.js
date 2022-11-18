import { configureStore } from "@reduxjs/toolkit";
import { beerReducer } from "../Beer/BeerReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore({ reducer: beerReducer }, applyMiddleware(thunk));

export default store;
