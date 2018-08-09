import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actCallApiToFetchProducts, actCallApiToDeleteProduct } from './../../actions/index';
class ProductListPage extends Component {

    //middleware trong redux la se nam giua reducers va dispatch actions
    //vi tri hoat dong cua no la truoc khi reducers nhan duoc actions va sau khi action da duoc dispatch
    //Async action : API request
    //redux-thunk dung de tri hoan viec dispatch boi vi fetch du lieu tu server ve se lau ( fetch xong moi dispatch)
    componentDidMount() {
        this.props.fetchProducts();
        // apiCaller('products', 'GET', null).then(res => {
        //     // this.setState({
        //     //     products: res.data
        //     // })
        //     this.props.fetchProducts(res.data);
        // });
    }
    onDelete = (id) => {
        //  var { products } = this.state;
        // apiCaller(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) { //ok
        //         var index = this.findIndex(products, id);
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             });
        //         }
        //     }
        // });
        this.props.onDeleteProduct(id);
    }

    render() {
        // var { products } = this.state;
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">
                    Them San Pham
                  </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProducts: () => {
            dispatch(actCallApiToFetchProducts())
        },
        onDeleteProduct: (id) => {
            dispatch(actCallApiToDeleteProduct(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
