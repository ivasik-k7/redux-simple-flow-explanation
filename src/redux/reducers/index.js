import {ACTIONS} from "../actions";

const initialState = {
    firstName: "",
    lastName: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload};
        case ACTIONS.CHANGE_LAST_NAME:
            return {...state, lastName: action.payload};
        default:
            return state;
    }
};

export default reducer;
