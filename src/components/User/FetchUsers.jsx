// FetchUsers.js
import axios from 'axios';
import { setUsers } from './userReducer'; // Adjust the path as necessary

export const fetchUsers = () => async dispatch => {
    const response = await axios.get('https://randomuser.me/api/?results=20');
    dispatch(setUsers(response.data.results));
};
