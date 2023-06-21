import React from 'react'
import { useGetContactsQuery } from '../redux/api/contactApi'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const Contacts = () => {
    const token = Cookies.get("token")
    const {data,isLoading} = useGetContactsQuery(token)
    console.log(data);

    if(isLoading){
        return (
            <div className='flex justify-center items-center h-screen'>
                <h2>Loading...</h2>
            </div>
        )
    }

  return (
    <div>
        <Link to={"/createContact"}>
            <button className='bg-yellow-500 text-white rounded p-3 m-4'>Create</button>
        </Link>
      <table className='table-auto w-[100%]'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.contacts.data.map(contact =>{
                    return (
                        <tr key={contact.id}>
                            <td>{contact?.name}</td>
                            <td>{contact?.phone}</td>
                            <td className='text-center'>{contact?.email === null ? "example@gmail.com" : contact.email}</td>
                            <td>{contact?.address}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Contacts
