import axios from 'axios';
import {useState,useEffect} from 'react'
import SingleUser from './SingleUser';


const UserList = () => {

    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {

        const response = await axios.get("https://randomuser.me/api/?results=5");
        setUsers(response.data.results)
        console.log(response.data.results);

    }

    useEffect( () => {
        fetchUsers();
    },[])

  return (
    
    <div className='user-list' >

        <ul>

            {
                users.map( (user,index) => (
                    <li key={index}>
                        <SingleUser user={user}/>
                    </li>
                ))
            }

        </ul>


    </div>


  )
}

export default UserList