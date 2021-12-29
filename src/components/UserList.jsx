import { useState, useEffect } from 'react'
import { db } from '../utils/init-firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../pages/pagescss/Modslist.css' 

function UserList() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'Users');
 


    
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);

      return <div className="UserList"> 
      {users.map((users) => { 
          return <div className='list'>
            <Card>
              <h1>Name: {users.name}</h1>
              <h1>Age: {users.age}</h1>
              <Button 
                  to="/modsview"         
              >VIEW</Button>
              </Card>
              </div> 
              
        })} 
        </div>       
    
}

export default UserList;
