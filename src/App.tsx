import React, {useState, useEffect} from 'react'
import Users from './Users'
import type { User } from "./type";
import { useParams, Outlet, useOutletContext } from 'react-router-dom'


type ContextType = { users: User[] | null };

function App() {
  const [users, setUsers] = useState<User[] | null>(null);



  useEffect(() => {
    const getData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const date:User[] = await res.json()
            setUsers(date)
        } catch (error) {
            console.error(error);
        }
    }
    getData()
}, [])


  return (
    <>
   <h1>My Users App</h1>
   <Outlet context={{users} satisfies ContextType} />
    </>
  )
}

export function useUser() {
  return useOutletContext<ContextType>();
}

export default App