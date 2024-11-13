import React from 'react'

const TXCURRLeadIndicators = () => {
  return (
    <div className='w-full md:w-[32%] md:flex md:justify-between py-4'>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                <span className='text-4xl font-bold'>8</span>
                <span className='text-xs'>PMTCT</span>
            </div>
            <div className='py-2 flex justify-between items-baseline'>
                <span className='text-[10px]'>PMTCT Stream</span>
                <span className='flex p-1 rounded-full shadow-md'>
                    <span className='text-xl font-bold'>5</span>
                    <span className='text-xs'>%</span>
                </span>
            </div>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                <span className='text-4xl font-bold'>58</span>
                <span className='text-xs'>TX_NEW</span>
            </div>
            <div className='py-2 flex justify-between items-baseline'>
                <span className='text-[10px]'>Linkage rate</span>
                <span className='flex p-1 rounded-full shadow-md'>
                    <span className='text-xl font-bold'>100</span>
                    <span className='text-xs'>%</span>
                </span>
            </div>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                <span className='text-4xl font-bold'>67,650</span>
                <span className='text-xs'>IIT</span>
            </div>
            <div className='py-2 flex justify-between items-baseline'>
                <span className='text-[10px]'>Retention rate</span>
                <span className='flex p-1 rounded-full shadow-md'>
                    <span className='text-xl font-bold'>73</span>
                    <span className='text-xs'>%</span>
                </span>
            </div>
        </div>
        <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
            <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                <span className='text-4xl font-bold'>3,516</span>
                <span className='text-xs'>Returned</span>
            </div>
            <div className='py-2 flex justify-between items-baseline'>
                <span className='text-[10px]'>...</span>
                <span className='flex p-1 rounded-full shadow-md'>
                    <span className='text-xl font-bold'>0</span>
                    <span className='text-xs'>%</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TXCURRLeadIndicators