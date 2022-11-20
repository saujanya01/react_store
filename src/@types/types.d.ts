import { ReactNode } from "react"

export interface Action {
    type: string,
    payload: Payload
}

export interface Payload {
    error: boolean,
    errorMessage: string,
    data: {
        incrementBy: number
    }
}

export interface AppState {
    loading: boolean,
    currentValue: number,
    error: boolean,
    errorMessage: string,
}

export interface ActionType {
    LOADING: string,
    INCREMENT: string,
    ERROR: string
}

export interface Props {
    children: ReactNode
}