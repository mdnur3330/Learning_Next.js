import Link from 'next/link'
import React from 'react'

export default function PageNotFound() {
  return (
    <div>
      <p>PageNotFound 404</p>
      <p><Link href="/">go home</Link></p>
    </div>
    
  )
}
