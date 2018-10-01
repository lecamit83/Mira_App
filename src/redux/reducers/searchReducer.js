const searchReducer = ( state = "", action ) => {
    switch (action.type) {
        case "SEARCH":{
            return  action.textSearch
        }
    }
    return state;
}

export default searchReducer;