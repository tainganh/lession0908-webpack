import { call, put,  takeLatest } from "redux-saga/effects";
import {REQUEST_API_DATA_PRODUCTS} from './../constants/ActionTypes';
import  {fetchData}  from "./../utils/apiCaller";
import {actFetchProducts} from './../actions/index';

function* getApiData(action) {
    try {
      // do api call
      const data = yield call(fetchData);
      yield put(actFetchProducts(data));
    } catch (e) {
      console.log(e);
    }
  }
  /*
    Alternatively you may use takeLatest.
  
    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
  export default function* mySaga() {
    yield takeLatest(REQUEST_API_DATA_PRODUCTS, getApiData);
  }