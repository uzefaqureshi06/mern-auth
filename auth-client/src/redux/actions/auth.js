import * as api from "../api";
import { AUTH, FETCH_USERS } from "../constants/actionTypes";

export const signUp = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signup(userData);
        console.log(data);
        dispatch({ type: AUTH, payload: data });
    } catch (error) {
        console.log(error);
    }
};
