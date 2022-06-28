import {
    GET_WATER_TEMP
} from "../actions/types";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WATER_TEMP:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}