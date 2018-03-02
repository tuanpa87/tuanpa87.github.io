import React, { Component } from 'react';
import Product from './Product';

//xu ly hoan toan bang props
//chi thuc hien cau truc html va css
//ket noi voi container component tuong ung de su dung redux

class Products extends Component {
    render() {
        var {products} = this.props
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                   {this.showProducts(products)}
                </div>
            </section>
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

export default Products;
