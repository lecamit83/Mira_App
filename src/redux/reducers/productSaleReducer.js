import * as TYPE from '../Const';

var defaultState = {
    proCompany : [],
}

const productCompanyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TYPE.FETCH_PRODUCT_COMPANY_SUCCESS:
            return { proCompany : action.data }
        case TYPE.FETCH_PRODUCT_COMPANY_ERROR:
            return { proCompany : [] }
        case TYPE.DELETE_PRODUCT_COMPANY_SUCCESS:        
            return { proCompany : action.data }
        default:    
            return state;
    }
    return state;
}

export default productCompanyReducer;