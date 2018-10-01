import * as TYPE from '../Const';
var defaultState = {
    account: null
}

const loginReducer = ( state = defaultState, action ) => {
    switch (action.type) {
        case TYPE.POST_SIGN_IN:{
            return { ...state, account : action.account };
        }
        case TYPE.POST_SIGN_UP:{
            return {  ...state, account : null };
        }
        case TYPE.POST_SIGN_OUT:{
            return {  ...state, account : null };
        }
    }
    return state;
}

export default loginReducer;