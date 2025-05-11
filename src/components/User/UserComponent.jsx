import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './FetchUsers';
import { filterUsers }from './userReducer';
import styles from './user.module.css';

const UserComponent = () => {
    const dispatch = useDispatch();
    const { filteredUsers, filterGender, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleFilterChange = (gender) => {
        dispatch(filterUsers(gender));
    };

   
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.users}>
            <h2>User Details</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum aspernatur atque consequatur assumenda fuga libero a! Iusto ullam aliquam sunt quos minima facere ex quibusdam voluptatum eligendi autem, quisquam adipisci aliquid cumque a assumenda aut dolorem, porro ipsa explicabo! Ab in ullam provident distinctio accusamus dolorum nam aspernatur quia rem iure, corporis sit consectetur sequi blanditiis nemo explicabo, quas maxime molestias sunt. Rerum repellat excepturi illo eius minus commodi, atque laudantium quis necessitatibus suscipit omnis aut delectus. Excepturi totam a adipisci sequi quis, numquam ullam voluptatibus quibusdam repudiandae quae at ratione odit quasi omnis tempore ea maiores corporis assumenda.</p>
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
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td><img src={user.picture.thumbnail} alt={user.name.first} /></td>
                            <td>{user.name.first} {user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserComponent;