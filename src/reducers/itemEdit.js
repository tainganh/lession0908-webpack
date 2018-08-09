import * as Types from './../constants/ActionTypes';
var initialState = {};
const product = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            console.log(action.product);
            state = action.product;
            return state;
        default: return [...state]
    }

}
export default product;