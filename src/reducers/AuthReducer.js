import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CREATE_USER,
    USER_CHANGED,
    LOGIN_USER
} from '../actions/example/actionTypes';
const INITIAL_STATE = {
    email:'',
    password:'',
    username:''
};
export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case USER_CHANGED:
            return { ...state, username: action.payload };
        case CREATE_USER:
            return {...state }; 
        case LOGIN_USER:
            return {...state };
        default:
            return state;
    }
};