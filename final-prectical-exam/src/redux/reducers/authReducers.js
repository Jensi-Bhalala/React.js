import { SIGN_IN, SIGN_OUT } from "../actions/authActions";

const initialState = {
    user: null,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
