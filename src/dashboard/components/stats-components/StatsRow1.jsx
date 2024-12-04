import React, { useEffect } from 'react'
import StatsLineChart from './StatsLineChart'

const StatsRow1 = ({ activedata, fetching}) => {

  return (
    <div className='w-full grid md:flex md:justify-between md:
    items-center space-y-4 md:space-y-0'>
        <div className='w-full md:w-[17%] rounded-md py-6 pl-6 pr-4 space-y-6'>
          <div className='w-full flex space-x-2 items-center pb-2'>
            <img src='/assets/apinlogo.png' alt='logo' width='40px' />
            <div className='grid pl-2 border-l-2 border-[#005072] dark:border-white uppercase text-sm'>
              <span>situation room</span>
            </div>
          </div>
          <div className='w-full flex justify-start'>
            <div className='max-w-max grid py-4 space-y-4'>
              <div className='grid'>
                <span className='uppercase font-bold'>{activedata ? activedata?.infoBox?.lga : <span className='text-gray-300 dark:text-gray-500 animate-pulse'>lga...</span>}</span>
                <span className='text-sm'>L G A</span>
              </div>
              <div className='grid'>
                <span className='text-4xl font-semibold'>{activedata ? activedata?.infoBox?.total_test : <span className='text-gray-300 dark:text-gray-500 animate-pulse'>00000</span>}</span>
                <span className='text-sm'>TOTAL HTS-TST</span>
              </div>
              <div className='grid'>
                <span className='text-4xl font-semibold'>{activedata ? activedata?.infoBox?.confirmed : <span className='text-gray-300 dark:text-gray-500 animate-pulse'>00000</span>}</span>
                <span className='text-sm'>TOTAL HTS-POS</span>
              </div>
              <div className='grid'>
                <span className='text-4xl font-semibold'>{activedata ? activedata?.infoBox?.yield+'%' : <span className='text-gray-300 dark:text-gray-500 animate-pulse'>0.00%</span>}</span>
                <span className='text-sm'>TOTAL YIELD</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-[82%] shadow-md rounded-md p-2'>
          <StatsLineChart labels={activedata && activedata?.labels} data={activedata && activedata?.data} targets={activedata && activedata?.targets} />
        </div>
    </div>
  )
}

export default StatsRow1