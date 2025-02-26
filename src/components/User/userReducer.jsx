import { FETCH_USERS } from '../User/FetchUsers';

const initialState = {
    users: [],
    filteredUsers: [],
    filterGender: 'All',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload, filteredUsers: action.payload };
        case 'FILTER_USERS':
            const filtered = action.payload === 'All' ? 
                state.users : state.users.filter(user => user.gender === action.payload);
            return { ...state, filteredUsers: filtered, filterGender: action.payload };
        case 'DELETE_USER':
            const remainingUsers = state.filteredUsers.filter(user => user.id !== action.payload);
            return { ...state, filteredUsers: remainingUsers };
        case 'UPDATE_USER':
            const updatedUsers = state.filteredUsers.map(user => 
                user.id === action.payload.id ? action.payload : user
            );
            return { ...state, filteredUsers: updatedUsers };
        default:
            return state;
    }
};

export default userReducer;