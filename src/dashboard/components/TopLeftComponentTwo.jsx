import { formatNumber } from 'chart.js/helpers'
import React from 'react'
import { BsCapsulePill } from 'react-icons/bs'
import { FaAward } from 'react-icons/fa6'
import { LuMicroscope } from 'react-icons/lu'
import { TfiTimer } from 'react-icons/tfi'

const TopLeftComponentTwo = ({ loc, txcurrdata, txhtsposdata, htststdata }) => {

    const tx_gap= txcurrdata !== null ? (txcurrdata?.percentTxCurr?.tx_cur - txcurrdata?.percentTxCurr?.total_targets) : parseInt('000000');
    const case_finding_gap = txhtsposdata !== null ? (parseInt(txhtsposdata?.tx_new) - parseInt(txhtsposdata?.total_hts_pos_target)) : parseInt('000000');

    const endOfFy = new Date('2025-10-01T00:00:00');

    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = endOfFy - currentDate;

    // Convert the difference to days
    const daysToCopEnd = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return (
        <div className='w-full grid md:flex md:justify-between md:w-[66%]'>
            <div className='w-full md:w-[48%] md:space-y-3'>  
                <div className='w-full shadow-xl px-4 py-6 bg-[#005072] dark:bg-gray-300 rounded-md'>
                    <div className='grid space-y-2'>
                        <span className='text-6xl text-gray-200 dark:text-[#005072]'>{daysToCopEnd}</span>
                        <span className='uppercase text-gray-200 dark:text-[#005072] text-sm'>days to cop end</span>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center shadow-xl px-4 py-6 rounded-md'>
                    <FaAward size={60} className='text-gray-300 dark:text-gray-600' />  
                    <div className='grid text-end'>
                        <span className={`text-4xl ${txhtsposdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : 'text-green-600'}`}>
                            {txhtsposdata !== null ? formatNumber(txhtsposdata?.tx_new) : '000000'}
                        </span>
                        <span className='font-extralight'>HTS_POS</span>
                        <span className={`font-extralight text-xs ${txhtsposdata === null ? 'animate-pulse text-gray-300' : (parseInt(case_finding_gap) < 0 ? 'text-red-600' : 'text-green-600')}`}>{formatNumber(case_finding_gap)}</span>
                        <span className='font-extralight text-xs'>CASE FINDING GAP</span>
                    </div> 
                </div>
            </div>
            <div className='w-full md:w-[48%] md:space-y-3'>   
                <div className='w-full flex justify-between items-center shadow-xl px-4 py-5 rounded-md'>
                    <BsCapsulePill size={80} className='text-gray-300 dark:text-gray-600' />
                    <div className='grid text-end'>
                        <span className={`text-4xl ${txcurrdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : 'text-green-600'}`}>
                            {txcurrdata !== null ? formatNumber(txcurrdata?.percentTxCurr?.tx_cur) : '000000'}
                        </span>
                        <span className='font-extralight'>TX_CURR</span>
                        <span className={`font-extralight text-xs ${txcurrdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : (parseInt(tx_gap) < 0 ? 'text-red-600' : 'text-green-600')}`}>{formatNumber(tx_gap)}</span>
                        <span className='font-extralight text-xs'>TREATMENT GAP</span>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center shadow-xl px-4 py-6 rounded-md'>
                    <LuMicroscope size={80} className='text-gray-300 dark:text-gray-600' />
                    <div className='grid text-end'>
                        <span className={`text-4xl ${htststdata === null ? 'animate-pulse text-gray-300 dark:text-gray-700' : 'text-green-600'}`}>
                            {htststdata !== null ? formatNumber(htststdata?.htstGap?.total_hts_tst) : '000000'}
                        </span>
                        <span className='font-extralight'>HTS_TST</span>
                        <span className={`font-extralight text-xs ${htststdata === null ? 'animate-pulse text-gray-300' : (parseInt(htststdata?.htstGap?.test_gap) < 0 ? 'text-red-600' : 'text-green-600')}`}>
                            {htststdata !== null ? formatNumber(htststdata?.htstGap?.test_gap) : '000000'}
                        </span>
                        <span className='font-extralight text-xs'>TESTING GAP</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeftComponentTwo