import React from 'react'

const PVLSLeadIndicators = () => {
    return (
        <div className='w-full md:w-[32%] md:flex md:justify-between py-4'>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-4xl font-bold'>178,494</span>
                    <span className='text-xs'>Eligibles</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>Eligibles covered</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>92</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>...</span>
                    <span className='text-xs'>...</span>
                </div>
                <div className='py-2 flex justify-between'>
                    <span className='text-[10px]'>Sample-Result Rate</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>95</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='flex justify-between items-baseline border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>...</span>
                    <span className='text-xs'>...</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>Rejection Rate</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>0</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='flex justify-between items-baseline border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-6xl font-bold'>6.8</span>
                    <span className='text-xs'>.</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>DAYS Testing TAT</span>
                </div>
            </div>
        </div>
    )
}

export default PVLSLeadIndicators