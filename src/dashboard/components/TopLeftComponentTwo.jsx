import React from 'react'
import { BsCapsulePill } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa6'
import { LuMicroscope } from 'react-icons/lu'

const TopLeftComponentTwo = ({ loc, txcurrdata, txhtsposdata }) => {

    const tx_gap= txcurrdata !== null ? (txcurrdata?.percentTxCurr?.tx_cur - txcurrdata?.percentTxCurr?.total_targets) : '000000';
    const case_finding_gap = txhtsposdata !== null ? (parseInt(txhtsposdata?.tx_new) - parseInt(txhtsposdata?.total_hts_pos_target)) : '000000';

    return (
        <div className='w-full md:w-[48%] md:space-y-5'>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-3 rounded-md'>
                <BsCapsulePill size={80} className='text-gray-300 dark:text-gray-600' />
                <div className='grid text-end'>
                    <span className={`text-4xl ${txcurrdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : 'text-green-600'}`}>
                        {txcurrdata !== null ? txcurrdata?.percentTxCurr?.tx_cur : '000000'}
                    </span>
                    <span className='font-extralight'>TX_CURR</span>
                    <span className={`font-extralight text-xs ${txcurrdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : (parseInt(tx_gap) < 0 ? 'text-red-600' : 'text-green-600')}`}>{tx_gap}</span>
                    <span className='font-extralight text-xs'>TREATMENT GAP</span>
                </div>
            </div>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-3 rounded-md'>
                <FaAward size={80} className='text-gray-300 dark:text-gray-600' />  
                <div className='grid text-end'>
                    <span className={`text-4xl ${txhtsposdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : 'text-green-600'}`}>
                        {txhtsposdata !== null ? txhtsposdata?.tx_new : '000000'}
                    </span>
                    <span className='font-extralight'>TX_HTS_POS</span>
                    <span className={`font-extralight text-xs ${txhtsposdata === null ? 'animate-pulse text-gray-300' : (parseInt(case_finding_gap) < 0 ? 'text-red-600' : 'text-green-600')}`}>{case_finding_gap}</span>
                    <span className='font-extralight text-xs'>CASE FINDING GAP</span>
                </div> 
            </div>
            <div className='w-full flex justify-between items-center shadow-xl px-4 py-3 rounded-md'>
                <LuMicroscope size={80} className='text-gray-300 dark:text-gray-600' />
                <div className='grid text-end animate-pulse'>
                    <span className='text-4xl text-green-600'>84,415</span>
                    <span className='font-extralight'>TX_HTS_TST</span>
                    <span className='font-extralight text-xs'>169,932</span>
                    <span className='font-extralight text-xs'>TESTING GAP</span>
                </div>
            </div>
        </div>
    )
}

export default TopLeftComponentTwo