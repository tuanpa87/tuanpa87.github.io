import * as types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product:{
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm của Apple',
            price: 700,
            inventory: 10,
            rating: 4
        },
        quantity: 6
    },
    {
        product:{
            id: 2,
            name: 'Samsung Galaxy',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm của Apple',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 3
    }
]


const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state];

        default: return [...state];
    }
}

export default cart
