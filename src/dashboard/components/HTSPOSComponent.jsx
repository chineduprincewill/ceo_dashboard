import React from 'react'
import BarChart from '../../charts/BarChart'
import LineChart from '../../charts/LineChart'
import HTSPOSLineChart from '../../charts/HTSPOSLineChart'
import CustomBarComponent from '../../charts/CustomBarComponent'

const HTSPOSComponent = ({ labels, indicators }) => {
    return (
        <div className='w-full md:w-[33%] space-y-1 shadow-xl rounded-md'>
            <div className='w-full flex justify-between items-baseline space-y-1 border-l-2 border-green-500 p-2'>
                <span className='text-4xl font-light uppercase'>hts_pos</span>
                <span className='text-extralight text-gray-400'>1st 95 Primary Indicator</span>
            </div>
            <div className='w-full flex px-1'>
                <div className='w-full md:w-2/5'>
                    <span className='text-xs text-extralight'>HTS_POS vs rolling, COP</span>
                    <CustomBarComponent indicators={indicators} />
                </div>
                <div className='w-full md:w-3/5'>
                    <span className='text-xs text-extralight'>Monthy HTS_POS trends</span>
                    <div>
                        <HTSPOSLineChart labels={labels} indicators={indicators} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HTSPOSComponent