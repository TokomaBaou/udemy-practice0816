import {useReducer} from "react";

export const UseReducer = () => {
    const [rstate,dispatch] = useReducer(p => ++p,0)
    
    const rCountUp = () => {
        dispatch()
    }
    
    return (
        <>
        <h3 onClick={rCountUp}>{rstate}</h3>
        </>
    )
}