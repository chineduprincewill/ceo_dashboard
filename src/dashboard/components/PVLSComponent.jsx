import React from 'react'
import LineChart from '../../charts/LineChart'
import PVLSLineChart from '../../charts/PVLSLineChart'

const PVLSComponent = ({ pvlsperc, pvlstrend }) => {
    return (
        <div className='w-full md:w-[32%] space-y-1 shadow-xl rounded-md'>
            <div className='w-full flex justify-between items-baseline border-l-2 border-green-500 p-2'>
                <span className='text-4xl font-light uppercase'>pvls</span>
                <span className='text-extralight text-gray-400'>3rd 95 Primary Indicator</span>
            </div>
            <div className='w-full flex px-4'>
                <div className='w-full md:w-1/3 space-y-4'>
                    <span className='text-xs text-extralight'>Percent PVLS</span>
                    <div>
                        <div className='flex border-4 border-green-500 rounded-full px-3 py-4 max-w-max'>
                        <span className={`text-4xl ${pvlsperc ? '' : 'text-gray-300 animate-pulse'}`}>{pvlsperc ? pvlsperc : '00'}</span>
                            <span className='text-xs xl:text-lg'>%</span>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <span className='text-xs text-extralight'>Monthly PVLS trend</span>
                    <div>
                        <PVLSLineChart trend={pvlstrend} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PVLSComponent