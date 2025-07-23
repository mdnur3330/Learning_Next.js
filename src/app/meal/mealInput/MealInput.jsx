"use client"
import { usePathname, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

export default function page() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathName = usePathname()
    useEffect(()=>{
        const searchQuire = {search}
        const urlQuireParam = new URLSearchParams(searchQuire)
        const url = `${pathName}?${urlQuireParam}`;
        router.push(url)
    },[search])
  return (
    <div><div className='text-center'>
            <input className='outline-white m-5 bg-amber-100 text-black'
            value={search} onChange={(e)=> setSearch(e.target.value)} type="text" />
        </div></div>
  )
}
