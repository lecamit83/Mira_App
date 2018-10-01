import * as TYPE from '../Const';

var defaultState = {
    arrCo : [],
}

const companyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TYPE.FETCH_COMPANY_SUCCESS:
            return { arrCo : action.data }
        case TYPE.FETCH_COMPANY_ERROR:
            return { arrCo : [] }
        default:
            return state;
    }
    return state;
}

export default companyReducer;