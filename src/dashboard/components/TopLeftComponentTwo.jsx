import React from 'react'
import { BsCapsulePill } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa6'
import { LuMicroscope } from 'react-icons/lu'

const TopLeftComponentTwo = ({ loc }) => {
    return (
        <div className='w-full md:w-[48%]'>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-2.5 rounded-md'>
                <BsCapsulePill size={80} className='text-gray-300 dark:text-gray-600' />
                <div className='grid text-end animate-pulse'>
                    <span className='text-4xl text-green-600'>179,784</span>
                    <span className='font-extralight'>TX_CURR</span>
                    <span className='font-extralight text-xs'>69,932</span>
                    <span className='font-extralight text-xs'>TREATMENT GAP</span>
                </div>
            </div>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-2.5 rounded-md'>
                <FaAward size={80} className='text-gray-300 dark:text-gray-600' />  
                <div className='grid text-end animate-pulse'>
                    <span className='text-4xl text-green-600'>58</span>
                    <span className='font-extralight'>TX_HTS_POS</span>
                    <span className='font-extralight text-xs'>11,932</span>
                    <span className='font-extralight text-xs'>CASE FINDING GAP</span>
                </div> 
            </div>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-2.5 rounded-md'>
                <LuMicroscope size={80} className='text-gray-300 dark:text-gray-600' />
                <div className='grid text-end animate-pulse'>
                    <span className='text-4xl text-green-600'>84,415</span>
                    <span className='font-extralight'>TX_HTS_TST</span>
                    <span className='font-extralight text-xs'>169,932</span>
                    <span className='font-extralight text-xs'>TESTING GAP</span>
                </div>
            </div>
        </div>
    )
}

export default TopLeftComponentTwo