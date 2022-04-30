const intialState = {
    productList: [],
    shoppingCart: {
        productList: [],
    }
}

const SET_PRODUCT_LIST = 'shopping/SET_PRODUCT_LIST'; 
const SET_SHOPPING_CART = 'shopping/SET_SHOPPING_CART';

export const setProductList = (payload) => ({type: SET_PRODUCT_LIST, payload: payload}); //setState
export const setShoppingCart = (payload) => ({type: SET_SHOPPING_CART, payload: payload}); //setState

const reducer = (state = intialState, action) => {
    switch(action.type){
        case SET_PRODUCT_LIST:
            return {...state, productList: action.payload}
        case SET_SHOPPING_CART:
            return {...state, shoppingCart: { productList: action.payload }} 
        default:
            return state;    
    }
}

export default reducer;