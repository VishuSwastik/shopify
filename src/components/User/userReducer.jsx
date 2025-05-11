// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './FetchUsers'; // Adjust the path as necessary

const initialState = {
    users: [],
    filteredUsers: [],
    filterGender: 'All',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
            state.filteredUsers = action.payload;
        },
        filterUsers(state, action) {
            const gender = action.payload;
            state.filterGender = gender;
            state.filteredUsers = gender === 'All' 
                ? state.users 
                : state.users.filter(user => user.gender === gender);
        },
        deleteUser (state, action) {
            state.filteredUsers = state.filteredUsers.filter(user => user.id !== action.payload);
        },
        updateUser (state, action) {
            const updatedUser  = action.payload;
            state.filteredUsers = state.filteredUsers.map(user => 
                user.id === updatedUser .id ? updatedUser  : user
            );
        },
    },
});

// Export actions
export const { setUsers, filterUsers, deleteUser , updateUser  } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
