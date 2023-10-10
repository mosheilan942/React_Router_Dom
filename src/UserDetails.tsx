import React, {useState, useEffect} from 'react'
import { useUser } from "./App";
import { useOutletContext, useNavigate } from 'react-router-dom';
import type { User } from "./type";
import { useLocation } from 'react-router-dom'

type OutletContext = {
    myState:User;
    setMyState: React.Dispatch<React.SetStateAction<string>>;
    otherStuff:string;
}



function UserDetails() {
  const location = useLocation()
  const data = useUser();
  console.log(data);
  const index = Number(location.pathname.slice(-1));
  
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  console.log(location);
  

  useEffect(() => {
      const getData = async () => {
          try {
              const {users} = data;
              if (users) setUser(users[index]);
          } catch (error) {
              console.error(error);
          }
      }
      getData()
  }, [data])
    
  return (
    <> 
    <div>UserDetails</div>
    <p>Hello, {user?.name}!</p>
    <p>Hello, {user?.address.city}!</p>
    <p>Hello, {user?.phone}!</p>
    </>
  )
}

export default UserDetails