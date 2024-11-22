import React from 'react'
import BarChart from '../../charts/BarChart'
import LineChart from '../../charts/LineChart'

const TSCURRComponent = ({ txcurrperc, txcurrtrend }) => {
    return (
        <div className='w-full md:w-[32%] space-y-1 shadow-xl rounded-md'>
            <div className='w-full flex justify-between items-baseline space-y-1 border-l-2 border-green-500 p-2'>
                <span className='text-4xl font-light uppercase'>tx_curr</span>
                <span className='text-extralight text-gray-400'>2nd 95 Primary Indicator</span>
            </div>
            <div className='w-full flex px-4'>
                <div className='w-full md:w-1/3 space-y-4'>
                    <span className='text-xs text-extralight'>Percent TX_CURR</span>
                    <div>
                        <div className='flex border-4 border-green-500 rounded-full px-3 py-4 max-w-max'>
                            <span className={`text-4xl ${txcurrperc ? '' : 'text-gray-300 animate-pulse'}`}>{txcurrperc ? Math.ceil(txcurrperc) : '00'}</span>
                            <span className='text-xs xl:text-lg'>%</span>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <span className='text-xs text-extralight'>Monthly TX_CURR trend</span>
                    <div>
                        <LineChart trend={txcurrtrend} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TSCURRComponent