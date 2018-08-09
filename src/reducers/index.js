import {combineReducers} from 'redux';
import products from './products';
import itemEdit from './itemEdit';
const myReducers = combineReducers({
    products,
    itemEdit
});
export default myReducers;