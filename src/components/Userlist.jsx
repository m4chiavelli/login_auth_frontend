import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const editUser = async (uuid) => {
    const response = await axios.get(`http://localhost:5000/users/${uuid}`);
    setUsers(response.data);
  };

  const deleteUser = async (uuid) => {
    try {
      await axios.delete(`http://localhost:5000/users/${uuid}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of users</h2>
      <Link to="/users/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`edit/${user.uuid}`}
                  className="button is-small is-info"
                  onClick={() => editUser(user.uuid)}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
