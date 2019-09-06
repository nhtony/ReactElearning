import * as types from '../contants/ReviewCircle.contant';

let initialState = {
    rate: 0
}

const ReviewReducerStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PROPORTION:
            state.rate = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}
export default ReviewReducerStore;