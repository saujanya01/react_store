import { actions } from "../constants"
import { Action } from "../@types/types";

function timeout(ms: number) {
    return new Promise(resolve=>setTimeout(resolve, ms));
}

export async function increment(dispatch: Function) {
    try {
        dispatch({type: actions.LOADING});
        let random: number = 0;
        await timeout(3000);
        random = Math.floor(Math.random()*10);
        let action: Action = {
            type: actions.INCREMENT,
            payload: {
                error: false,
                errorMessage: "",
                data: { incrementBy: random }
            }
        }
        dispatch(action);
    } catch(err) {
        const action: Action = {
            type: actions.ERROR,
            payload: {
                error: true,
                errorMessage: "Something went wrong, please try again later",
                data: {incrementBy: 0}
            }
        }

        dispatch(action);
    }
}