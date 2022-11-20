import React, { useReducer } from 'react'
import { Props } from './@types/types';
import { DispatchContext, NumberContext } from './store/Context'
import { AppReducer, initialState } from './store/Reducer'

const Store: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <>
            <NumberContext.Provider value={state}>
                <DispatchContext.Provider value={dispatch}>
                    {children}
                </DispatchContext.Provider>
            </NumberContext.Provider>
        </>
    ) 
}

export default Store;