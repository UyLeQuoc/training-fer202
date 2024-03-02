import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:9999/user/" + id)
    .then(res => {
        console.log(res?.data)
        setUser(res?.data)
    }).catch(err => {
        console.log(err)
    })
  }, [])


  return (
    <div>
        <h1>UserDetails có id là: {id}</h1>
        <h1>Tên là: {user?.name}</h1>
    </div>
  )
}

export default UserDetails