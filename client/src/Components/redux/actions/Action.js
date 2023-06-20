import { FAIL_GET_PRODUCT, SUCCESS_GET_PRODUCT } from "../actionType";

export const getProductsAction = ()=>async(dispatch)=>{

    try {
        const data = await fetch('/getproducts',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const res = await data.json();
        dispatch({type:SUCCESS_GET_PRODUCT,payload:res});

    } catch (error) {
        dispatch({type:FAIL_GET_PRODUCT,payload:error.reponse});
    }
}