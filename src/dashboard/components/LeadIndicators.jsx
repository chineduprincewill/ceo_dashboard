import { formatNumber } from 'chart.js/helpers'
import React from 'react'

const LeadIndicators = ({ totalindex, totalpitc, totalkeypop, totalcomm, totalpmtct, txhtsposdata, totaliit, eligibles, returned, testingtatdays }) => {

    return (
        <div className='w-full md:flex md:justify-between md:items-center space-y-2 md:space-y-0 py-4'>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totalindex ? formatNumber(totalindex?.totalIndex?.data) : <span className='text-gray-300 animate-pulse'>00</span>}
                    </span>
                    <span className='text-xs'>Index Cases</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Index Stream</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'>
                            { totalindex ? totalindex?.totalIndex?.percentage : <span className='text-gray-300 animate-pulse'>00</span>}
                        </span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totalpitc ? formatNumber(totalpitc.totalPitc?.data) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>PITC Cases</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>PITC Stream</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'><span className='text-gray-300 animate-pulse'>00</span></span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totalkeypop ? formatNumber(totalkeypop.totalKeypop?.total_keypop_cases) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>KeyPop Cases</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>KeyPop Stream</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'><span className='text-gray-300 animate-pulse'>00</span></span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totalcomm ? formatNumber(totalcomm?.totalCommunity?.data) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>Comm. Cases</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Comm. Stream</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'><span className='text-gray-300 animate-pulse'>00</span></span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totalpmtct ? formatNumber(totalpmtct?.totalPmtc?.total_pmtct_cases) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>PMTCT</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>PMTCT Stream</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'><span className='text-gray-300 animate-pulse'>00</span></span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { txhtsposdata ? formatNumber(txhtsposdata?.tx_new) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>TX_NEW</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Linkage rate</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'>
                            { txhtsposdata ? Math.ceil(txhtsposdata?.linkage_rate_percentage) : <span className='text-gray-300 animate-pulse'>00</span> }
                        </span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { totaliit ? formatNumber(totaliit?.totalIIT) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>IIT</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Retention rate</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'>
                            { totaliit ? Math.ceil(totaliit?.retentionRate) : <span className='text-gray-300 animate-pulse'>00</span> }
                        </span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { returned ? formatNumber(returned?.Returned) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>Returned</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Return rate</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'>
                            <span className='text-gray-300 animate-pulse'>00</span>
                        </span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        { eligibles ? formatNumber(eligibles?.total_eligibles) : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-xs'>Eligibles</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>% Eligibles covered</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'>
                            { eligibles ? Math.ceil(eligibles?.Percentage) : <span className='text-gray-300 animate-pulse'>00</span> }
                        </span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid border-b border-gray-300 dark:border-gray-700 py-1'>
                    <span className='text-xl xl:text-3xl font-bold'>
                        <span className='text-gray-300 animate-pulse'>00</span>
                    </span>
                    <span className='text-xs'>Sample Result</span>
                </div>
                <div className='py-2 grid xl:flex xl:justify-between xl:items-baseline'>
                    <span className='text-[10px]'>Sample result rate</span>
                    <span className='flex p-1 rounded-full shadow-md max-w-max'>
                        <span className='text-xl font-bold'><span className='text-gray-300 animate-pulse'>00</span></span>
                        <span className='text-xs'>%</span>
                    </span>
                </div>
            </div>
            <div className='w-full grid md:w-1/12 p-2 rounded-md shadow-xl border border-gray-300 dark:border-gray-700'>
                <div className='grid dark:border-gray-700 py-1 space-y-1'>
                    <span className='text-6xl text-center'>
                        {testingtatdays ? testingtatdays?.testingTATDays?.testing_TAT : <span className='text-gray-300 animate-pulse'>00</span> }
                    </span>
                    <span className='text-sm uppercase text-center'>days</span>
                    <span className='text-sm text-center'>Testing TAT</span>
                </div>
            </div>
        </div>
    )
}

export default LeadIndicators