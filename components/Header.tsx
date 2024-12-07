import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="flex p-2 items-center justify-between bg-secondary ">
        <Image src={'/logo.svg'} width={160} height={100} alt={'logo'}/>
        <UserButton/>
    </div>
  )
}

export default Header