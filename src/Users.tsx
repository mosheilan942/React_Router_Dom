import React, { useEffect, useState } from 'react'
import type { User } from "./type";
import { useNavigate } from 'react-router-dom';
import { useParams, Outlet, useOutletContext } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useUser } from "./App";

// type ContactsParams = {
//     id: string;
// }

type ContextType = { user: User | null };

function Users() {
    const data = useUser();
    const [users, setUsers] = useState<User[] | null>(null);
    const navigate = useNavigate();

    
    useEffect(() => {
        const getData = async () => {
            try {
                const {users} = data; 
                setUsers(users);
            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, [data])


    return (
        <>
            <h1>Users</h1>
            {users?.map((user, index: number) => {
                return <div key={user.id} onClick={() => navigate(`/users/${index}`,{ state: {name: "moshe"}})}>{user.name}</div>;
            })}
        </>
    );
}
export default Users

