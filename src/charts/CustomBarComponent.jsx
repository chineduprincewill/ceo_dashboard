import { formatNumber } from 'chart.js/helpers'
import React from 'react'

const CustomBarComponent = ({ indicators }) => {
    return (
        <div className='py-4 pr-2'>
            <div className='w-full grid space-y-1 px-2 border-r border-gray-400'>
                <div 
                    className='w-full flex justify-between items-baseline'
                >
                    <span className='w-[40%] text-wrap text-xs text-gray-500'>Achievement</span>
                    <span className='max-w-max border-b border-[#8ba3c9]'>
                        { indicators ? formatNumber(indicators?.FYTotalTestedPositives?.data[0]): <span className='text-gray-300 animate-pulse'>00</span>}
                    </span>
                </div>
                <div 
                    className='w-full flex justify-between items-baseline'
                >
                    <span className='w-[40%] text-wrap text-xs text-gray-500'>Expectation</span>
                    <span className='max-w-max border-b border-[#8ba3c9]'>
                        { indicators ? formatNumber(indicators?.HTSPosTarget?.current_expectation?.y): <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                </div>
                <div 
                    className='w-full flex justify-between items-baseline'
                >
                    <span className='w-[40%] text-wrap text-xs text-gray-500'>FY25</span>
                    <span className='max-w-max border-b border-[#8ba3c9]'>
                        { indicators ? formatNumber(indicators?.HTSPosTarget?.FY23?.y): <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CustomBarComponent