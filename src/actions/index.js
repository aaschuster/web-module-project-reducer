export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEM = "ADD_MEM";
export const READ_MEM = "READ_MEM";
export const CLEAR_MEM = "CLEAR_MEM"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const addMem = () => {
    return ({type: ADD_MEM});
}

export const readMem = () => {
    return({type: READ_MEM})
}

export const clearMem = () => {
    return({type: CLEAR_MEM})
}