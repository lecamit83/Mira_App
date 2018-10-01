import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";
import companyReducer from './companyReducer';
import productCompany from "./productSaleReducer";

const appStore = combineReducers({
    textSearch : searchReducer,
    products : productReducer,
    login : loginReducer,
    companys : companyReducer,
    productCompany : productCompany,
});
export default appStore;