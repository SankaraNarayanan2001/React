import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {

const [users, setUsers] = useState([]); 


useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data); // Store user data in state
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <div className="App">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
                {users.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
  );
}

export default UserList;
