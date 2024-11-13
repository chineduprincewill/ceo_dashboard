import React from 'react'

const HTSPOSLeadIndicators = () => {
    return (
        <div className='w-full md:w-[33%] md:flex md:justify-between py-4'>
            <div className='w-full flex md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid'>
                    <span className='text-xl font-bold'>192</span>
                    <span className='text-xs'>Index Cases</span>
                </div>
                <div className='border-l border-gray-300 dark:border-gray-700 pl-1 grid'>
                    <span className='flex p-1 rounded-full shadow-md'>
                        <span className='text-xl font-bold'>13</span>
                        <span className='text-xs'>%</span>
                    </span>
                    <span className='text-xs'>Index Stream</span>
                </div>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-xl font-bold'>214</span>
                <span className='text-xs'>PITC</span>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-xl font-bold'>55</span>
                <span className='text-xs'>Key Pop</span>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-xl font-bold'>226</span>
                <span className='text-xs'>Community</span>
            </div>
        </div>
    )
}

export default HTSPOSLeadIndicators