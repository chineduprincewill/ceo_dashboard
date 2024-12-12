import React from 'react'
import { TfiTimer } from 'react-icons/tfi'

const TopLeftComponentOne = ({ loc }) => {

    

    return (
        <div className='w-full md:w-[32%] space-y-4'>
            <div className='w-full grid text-center px-2 py-2'>
                <div className='flex justify-center'>
                    <img src='/assets/apinlogo.png' alt='logo' width="180px" />
                </div>
                <div className='grid px-3 py-2 space-y-4'>
                    <span className='uppercase font-extralight'>Situation Room</span>
                    <span className='capitalize text-4xl font-semibold'>{loc}</span>
                </div>
            </div>
            
        </div>
    )
}

export default TopLeftComponentOne