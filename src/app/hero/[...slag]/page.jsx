import React from 'react'

export default async function HeroSlag({params}) {
    const p = await params
    console.log(p);
  return (
    <div>HeroSlag</div>
  )
}
