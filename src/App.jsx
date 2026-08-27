import React, { useState } from "react";
import './App.css'
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  // Add user
  const handleAddUser = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Please enter name and email");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setUsers([...users, newUser]);

    setName("");
    setEmail("");
  };

  // Delete user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Search users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>User Management</h2>

      {/* Search */}
      <input
        type="search"
        placeholder="Search User...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* Add User */}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Enter Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add User</button>
      </form>

      <br />

      {/* User List */}
      <div>
        {filteredUsers.length === 0 ? (
          <p>No users found</p>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>

              <button onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>

              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;