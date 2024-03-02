import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // endpoint: http://localhost:9999/user
    // method: GET
    axios.get("http://localhost:9999/user")
    .then(res => {
        console.log(res?.data)
        setUsers(res?.data)
    }).catch(err => {
        console.log(err)
    })
  }, [])

  const handleDelete = (id) => {
    // endpoint delete: http://localhost:9999/user/:id
    // method: DELETE
    axios.delete("http://localhost:9999/user/"+id)
    .then(res => {
        window.location.reload() //F5 lại trang
    }).catch(err => {
        console.log(err)
    })
  }

  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
            </tr>
            {
                users?.map(user => (
                    <tr>
                        <td>{user?.name}</td>
                        <td>{user?.email}</td>
                        <td>
                            <button onClick={() => handleDelete(user?.id)}>
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default UserList