import React from 'react'
import BarChart from '../../charts/BarChart'
import LineChart from '../../charts/LineChart'

const HTSPOSComponent = () => {
    return (
        <div className='w-full md:w-[33%] space-y-1 shadow-xl rounded-md'>
            <div className='w-full grid space-y-1 border-l-2 border-green-500 p-2'>
                <span className='text-extralight'>1st 95 Primary Indicator</span>
                <span className='text-4xl font-light uppercase'>hts_pos</span>
            </div>
            <div className='w-full flex px-1'>
                <div className='w-full md:w-1/2'>
                    <span className='text-xs text-extralight'>HTS_POS vs rolling, COP targets</span>
                    <div className='mt-6'>
                        <BarChart />
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <span className='text-xs text-extralight'>Monthy HTS_POS trends</span>
                    <div className='mt-6'>
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTSPOSComponent