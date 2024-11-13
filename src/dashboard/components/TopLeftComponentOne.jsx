import React from 'react'
import { TfiTimer } from 'react-icons/tfi'

const TopLeftComponentOne = ({ loc }) => {
    return (
        <div className='w-full md:w-[48%] space-y-8'>
            <div className='w-full flex space-x-4 items-center shadow-xl px-4 py-8'>
                <img src='/assets/apinlogo.png' alt='logo' width="120px" />
                <div className='grid border-l-2 border-gray-800 dark:border-gray-100 px-3 py-2'>
                    <span className='capitalize text-xl xl:text-2xl font-bold'>{loc}</span>
                    <span className='uppercase text-2xl xl:text-4xl font-extralight'>Situation</span>
                    <span className='uppercase text-2xl xl:text-4xl font-extralight'>Room</span>
                </div>
            </div>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-7 text-end bg-[#005072] dark:bg-gray-300 rounded-md'>
                <TfiTimer size={80} className='text-gray-400'/>
                <div className='grid space-y-2'>
                    <span className='text-8xl animate-pulse text-gray-200 dark:text-[#005072]'>322</span>
                    <span className='uppercase text-gray-200 dark:text-[#005072]'>days to cop end</span>
                </div>
            </div>
        </div>
    )
}

export default TopLeftComponentOne