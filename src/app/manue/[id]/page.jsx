import React from 'react'
export const getSingalData = async (id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return data;
}

export default async function singalePost({params}) {
    const p = params;
    const data = await getSingalData(p.id)
  return (
    <div>
        <p>before fetch{p.id}</p>
        <p>after fetch name: {data.name}</p>
        <p>after fetch TITl: {data.email}</p>
        
    </div>
  )
}
