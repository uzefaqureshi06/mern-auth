import * as actionType from '../constants/actionTypes';

const auth = (state = [], action) => {
    switch (action.type) {
        case actionType.FETCH_USERS:
            console.log(action.payload.users)
            return action.payload.users;
        default:
            return state;
    }
};

export default auth;