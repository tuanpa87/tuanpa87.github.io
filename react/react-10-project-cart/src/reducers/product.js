var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung Galaxy',
        image: '',
        description: 'Sản phẩm của Samsung',
        price: 400,
        inventory: 5
    },
    {
        id: 3,
        name: 'Sony XZ10',
        image: '',
        description: 'Sản phẩm của Sony',
        price: 600,
        inventory: 60
    },
]

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product
