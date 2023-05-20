'use client'
import {FC} from 'react'
import { PuffLoader } from "react-spinners";

const Loader:FC = () => {
  return (
    <PuffLoader size={100} color='#f43f5e' />
  )
}


export { Loader }