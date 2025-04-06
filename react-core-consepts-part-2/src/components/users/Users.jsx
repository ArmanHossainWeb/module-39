import React, { use } from 'react';
import User from '../user/User';

const Users = ({fetchUsers}) => {
    const users = use(fetchUsers)
    return (
        <div className='card'>
            <h3>users: {users.length} </h3>
            {
                users.map(user => <User key={user.id} user = {user}></User> )
            }
        </div>
    );
};

export default Users;