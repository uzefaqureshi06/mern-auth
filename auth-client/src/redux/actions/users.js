import * as api from "../api";
import { FETCH_USERS } from "../constants/actionTypes";

export const getUsers = (searchTerm) => async (dispatch) => {
    try {
        const { data } = await api.getUsers(searchTerm);
        console.log(data);
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        console.log(error);
    }
}