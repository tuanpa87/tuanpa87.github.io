import React, { Component } from 'react';

class Product extends Component {

    showInfoProduct(product) {
        if (product.status) {
            return (
                 <h3>
                    ID: {product.id} <br />
                    name: {product.name} <br />
                    price: {product.price} <br />
                    Status: {product.status ? 'Active' : 'Pending'}
                </h3>
            )
        }
    }

    render() { //hien thi giao dien cho nguoi dung
        var a = 5;
        var b = 7;
        var product = {
            id: 1,
            name: "ABC",
            price: 1000000,
            status: true
        }

        var users = [
            {
                id: 1,
                name: "John"
            },
            {
                id: 2,
                name: "Chris"
            },
            {
                id: 3,
                name: "Jane"
            }
        ]
        return ( //JSX
            <div>
                <h1>Product</h1>

                <div className="ml-30">
                    <h3>
                        a : {a} <br />
                        b : {b} <br />
                        a + b = {a + b}
                    </h3>

                    {/* Methol 1 */}
                    {/* <h3>
                        ID: {product.id} <br/>
                        name: {product.name} <br/>
                        price: {product.price} <br/>
                        Status: {product.status ? 'Active' : 'Pending'}
                    </h3> */}

                    {/* Methol 2 with function */}

                    {this.showInfoProduct(product)}

                </div>
            </div>
        );
    }
}

export default Product;