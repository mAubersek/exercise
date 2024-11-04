import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UsersList = ({ selectedUser, setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/users?limit=20&select=firstName,lastName,age,gender,email,phone`,
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    function updateViewData() {
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...selectedUser } : user,
        ),
      );
    }

    if (selectedUser) {
      updateViewData();
    }
  }, [selectedUser]);

  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isSelected={selectedUser && selectedUser.id === user.id}
          onClick={() => setSelectedUser(user)}
        />
      ))}
    </>
  );
};

export default UsersList;
