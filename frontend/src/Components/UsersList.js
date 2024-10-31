import axios from "axios";
import {useEffect, useState} from "react";
import UserCard from "./UserCard";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios.get('https://dummyjson.com/users?limit=20&select=firstName,lastName,age,gender,email,phone')
            .then(r => {
                    setUsers(r.data.users)
                }
            );
    }

    useEffect(() => {
        fetchUsers()
        console.log(users)
    }, [])
    return (
        <>
            {users.map(user => (
                <UserCard key={user.id} user={user}/>
            ))}
        </>)
}

export default UsersList;