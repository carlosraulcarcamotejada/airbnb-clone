'use client';
import {FC} from 'react'
import Image from "next/image";

const Avatar:FC = ():JSX.Element => {
  return (
    <Image priority src="/images/placeholder.jpeg" alt="avatar" height="30" width="30"  className='rounded-full ' />
  )
}

export  {Avatar}