import { actions } from "../constants"
import { Action, AppState } from "../@types/types"

export const initialState: AppState = {
    loading: true,
    currentValue: 0,
    error: false,
    errorMessage: ""
}

export const AppReducer = (initialState: AppState, action: Action): AppState =>{
    switch(action.type) {
        case actions.LOADING:
            return (
                {
                    ...initialState,
                    loading: true,
                }
            )
        case actions.INCREMENT:
            return (
                {
                    ...initialState,
                    currentValue: initialState.currentValue + action.payload.data.incrementBy,
                    loading: false
                }
            )
        case actions.ERROR:
            return (
                {
                    ...initialState,
                    error: true,
                    errorMessage: action.payload.errorMessage,
                    loading: false
                }
            )
        default:
            return(
                {
                    ...initialState,
                    error: true,
                    errorMessage: "Unhandled action type: "+action.type
                }
            )
    }
}