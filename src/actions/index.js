import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

export const requestApiData = () => {
  return {
    type: Types.REQUEST_API_DATA_PRODUCTS
  };
};

export const actFetchProduct = product => {
  return {
    type: Types.FETCH_PRODUCT,
    product
  };
};
export const actCallApiToFetchProduct = id => {
  return dispatch => {
    return callApi(`products/${id}`, "GET", null).then(res => {
      dispatch(actFetchProduct(res.data));
    });
  };
};
export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  };
};
export const actCallApiToFetchProducts = () => {
  return dispatch => {
    return callApi("products", "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actCallApiToDeleteProduct = id => {
  return dispatch => {
    return callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteProduct(id));
    });
  };
};
export const actDeleteProduct = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  };
};
export const actCallApiToAddProduct = product => {
  return dispatch => {
    return callApi("products", "POST", product).then(res => {
      dispatch(actAddProduct(res.data));
    });
  };
};
export const actAddProduct = product => {
  return {
    type: Types.ADD_PRODUCT,
    product
  };
};
export const actCallApiToUpdateProduct = (product, id) => {
  return dispatch => {
    return callApi(`products/${id}`, "PUT", product).then(res => {
      dispatch(actUpdateProduct(product, id));
    });
  };
};
export const actUpdateProduct = (product, id) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
    id
  };
};
