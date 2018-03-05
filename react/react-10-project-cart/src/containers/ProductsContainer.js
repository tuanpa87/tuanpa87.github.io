import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products'
import Product from './../components/Product'
import PropTypes from 'prop-types';

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
            //console.log(results)
        }
        return results
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
