import React, { Component } from "react";
import {Link} from 'react-router-dom';
class ProductItem extends Component {

    onDelete = (id) =>{
         if(confirm('Ban chac chan muon xoa chua?')){ //eslint-disable-line
            this.props.onDelete(id);
         }
    }
    render() {
        var {product,index}=this.props;
        var statusname= product.status ? 'con hang' :'het hang';
        var statusClass= product.status ? 'warning' :'success';
        return (
            <tr>
                <td>{index+1}</td>
                
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusname}</span>
                </td>
                <td>
                    <Link to={`product/${product._id}/update`} 
                          className="btn btn-success mr-10"
                          
                    >
                        Sua 
                    </Link>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick={() => this.onDelete(product._id)}
                    >
                        Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
