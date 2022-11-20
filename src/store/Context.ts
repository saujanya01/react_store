import React, { createContext, useContext, useReducer } from "react";
import { Action, AppState } from "../@types/types";
import { initialState, AppReducer } from "./Reducer";

export const NumberContext = createContext<AppState>(initialState);
export const DispatchContext = createContext<Function>(()=>0);

export function useNumberState() {
    const context = useContext(NumberContext);

    if (context===undefined) {
        throw new Error("useNumberState must be used inside Provider");
    }

    return context;
}

export function useNumberDispatch() {
    const context = useContext(DispatchContext);

    if (context===undefined) {
        throw new Error("useNumberDispatch must be used inside Provider");
    }

    return context;
}
