import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './FetchUsers';

const UserComponent = () => {
    const dispatch = useDispatch();
    const { filteredUsers, filterGender } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleFilterChange = (gender) => {
        dispatch({ type: 'FILTER_USERS', payload: gender });
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_USER', payload: id });
    };

    const handleUpdate = (updatedUser) => {
        dispatch({ type: 'UPDATE_USER', payload: updatedUser });
    };

    return (
        <div>
            <h2>User Details</h2>
            <div>
                <label>
                    <input type="radio" 
                           checked={filterGender === 'All'} 
                           onChange={() => handleFilterChange('All')} /> All
                </label>
                <label>
                    <input type="radio" 
                           checked={filterGender === 'male'} 
                           onChange={() => handleFilterChange('male')} /> Male
                </label>
                <label>
                    <input type="radio" 
                           checked={filterGender === 'female'} 
                           onChange={() => handleFilterChange('female')} /> Female
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td><img src={user.picture.thumbnail} alt={user.name.first} /></td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                                <button onClick={() => handleUpdate(user)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserComponent;