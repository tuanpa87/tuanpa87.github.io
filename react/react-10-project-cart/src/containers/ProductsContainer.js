import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products'
import Product from './../components/Product'

//cac container la trung gian lay du lieu tu store chung
//truyen props vao component tuong ung de su dung redux store

class ProductsContainer extends Component {
    render() {
        var {products} = this.props
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        var results = null;

        if (products.length > 0) {
            results = products.map((product, index) => {
                return <Product key = {index} product = {product} />
            })
        }
        return results
    }
}

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProp, null)(ProductsContainer);
