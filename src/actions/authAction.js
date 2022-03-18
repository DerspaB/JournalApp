import {types} from '../types/actionTypes'


export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {

            dispatch( login (251201, 'Jorge Parrado'))
            
        }, 3500);
    }
}

export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName  
    }
})