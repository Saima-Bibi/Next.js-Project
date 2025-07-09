import React from 'react'
import getData from '../../../../services/getdata'

const UserId= async({params})=> {
  const data = getData()
    const users = await data
      const { id } = await params
    console.log(id)
    const userInfo = users[id-1]
  return (
    <div>
      <h2>User Id: {userInfo.id}</h2>
      <h2>User name: {userInfo.name}</h2>
      <h2>User email: {userInfo.email}</h2>
    </div>

  )
}

export default UserId
//static site generation
export async function generateStaticParams(){
  const data = getData()
    const users = await data

  return users.map((user)=>({
      id:user.id.toString()
    }))
}
