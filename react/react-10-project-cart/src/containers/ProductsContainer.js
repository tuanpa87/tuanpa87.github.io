import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products'

//cac container lay du lieu tu store chung
//truyen props vao component tuong ung de su dung redux store

class ProductsContainer extends Component {
    render() {
        var {products} = this.props
        return (
            <Products products = {products} />
        );
    }
}

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProp, null)(ProductsContainer);
