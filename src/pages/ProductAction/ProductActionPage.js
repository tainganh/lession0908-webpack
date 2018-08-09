import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actCallApiToAddProduct, actCallApiToUpdateProduct, actCallApiToFetchProduct } from "./../../actions/index";
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtPrice: "",
            chkbStatus: false
        };
    }
    componentDidMount() {
        console.log('didmount');
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onFetchProductEdit(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('willprops');
        if (nextProps && nextProps.itemEdit) {
            var { itemEdit } = nextProps;
            this.setState({
                id: itemEdit._id,
                txtName: itemEdit.name,
                txtPrice: itemEdit.price,
                chkbStatus: itemEdit.status
            });
        }
    }
    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value //nam tuong ung se lay value tuong ung
        });
    };
    onSave = e => {

        var { txtName, txtPrice, chkbStatus, id } = this.state;
        var { history } = this.props;
        var product = {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        e.preventDefault();
        if (id) {
            //update
            // callApi(`products/${id}`, "PUT", {
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack();
            // });
            this.props.onUpdateProduct(product, id)
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
            // callApi("products", "POST", {
            //     //add
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack();
            // });
        }
    };
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Ten San Pham</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gia San Pham</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trang Thai</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Con hang
            </label>
                    </div>
                    <Link to="/product-list" className="btn btn-primary mr-10">
                        Tro Lai
          </Link>
                    <button type="submit" className="btn btn-primary">
                        Luu Lai
          </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        itemEdit: state.itemEdit
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actCallApiToAddProduct(product))
        },
        onUpdateProduct: (product, id) => {
            dispatch(actCallApiToUpdateProduct(product, id))
        },
        onFetchProductEdit: (id) => {
            dispatch(actCallApiToFetchProduct(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
