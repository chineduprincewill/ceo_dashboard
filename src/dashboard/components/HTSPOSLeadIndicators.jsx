import React from 'react'

const HTSPOSLeadIndicators = () => {
    return (
        <div className='w-full md:w-[33%] md:flex md:justify-between py-4'>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>192</span>
                    <span className='text-xs'>Index Cases</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>Index Stream</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>13</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>214</span>
                    <span className='text-xs'>PITC</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>PITC Stream</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>0</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>55</span>
                    <span className='text-xs'>KeyPop Cases</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>KeyPop Stream</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>0</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-3xl font-bold'>249</span>
                    <span className='text-xs'>Comm Cases</span>
                </div>
                <div className='py-2 flex justify-between items-baseline'>
                    <span className='text-[10px]'>Comm Stream</span>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>0</span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HTSPOSLeadIndicators