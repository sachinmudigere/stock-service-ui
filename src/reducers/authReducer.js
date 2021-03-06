import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';

const INITIAL_STATE = {
    isAuth: false,
    token: '',
    errors: []
}

export const authReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {isAuth: true, errors:[]});

        case LOGIN_FAILURE:
            return Object.assign({}, state, {isAuth: false, errors: action.errors});
        default:
            return state;
    }

}