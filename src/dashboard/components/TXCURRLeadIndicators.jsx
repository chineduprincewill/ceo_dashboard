import React from 'react'

const TXCURRLeadIndicators = () => {
  return (
    <div className='w-full md:w-[32%] md:flex md:justify-between py-4'>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <span className='text-lg'>192</span>
            <span className='text-xs'>PMTCT</span>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <span className='text-lg'>214</span>
            <span className='text-xs'>TX_NEW</span>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <span className='text-lg'>55</span>
            <span className='text-xs'>IIT</span>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <span className='text-lg'>226</span>
            <span className='text-xs'>Returned</span>
        </div>
    </div>
  )
}

export default TXCURRLeadIndicators