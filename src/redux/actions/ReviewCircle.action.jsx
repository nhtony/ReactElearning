import * as types from '../contants/ReviewCircle.contant';
export const getProportionAction = (rate) => {
    return {
        type: types.GET_PROPORTION,
        payload: rate
    }
}