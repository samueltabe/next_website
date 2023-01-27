import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninja">Ninja List</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default navbar
