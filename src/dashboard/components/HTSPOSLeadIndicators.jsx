import React from 'react'

const HTSPOSLeadIndicators = () => {
    return (
        <div className='w-full md:w-[33%] md:flex md:justify-between py-4'>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-lg'>192</span>
                <span className='text-xs'>Index Cases</span>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-lg'>214</span>
                <span className='text-xs'>PITC</span>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-lg'>55</span>
                <span className='text-xs'>Key Pop</span>
            </div>
            <div className='w-full grid md:w-[23%] p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <span className='text-lg'>226</span>
                <span className='text-xs'>Community</span>
            </div>
        </div>
    )
}

export default HTSPOSLeadIndicators