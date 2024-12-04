import React from 'react'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { TbAlertSquareRoundedFilled } from 'react-icons/tb';

const StatsRow2 = ({ yields, fetching }) => {

    return (
        <div 
            className={`w-full flex flex-wrap items-center bg-[#005072] text-white shadow-md rounded-md p-2 ${ fetching && 'animate-pulse' }`}
        >
        {
            yields !== null && yields.length > 0 && yields.map(yld => {
                return <div key={yld?.infoBox?.id} className='p-2 grid w-full md:w-[10%] text-white pr-6  border-[#256b89] mb-2'>
                    <div className='text-sm'>{yld?.infoBox?.lga}</div>
                    <div className='flex justify-between items-center'>
                        <span>{yld?.infoBox?.yieldChange === "No change" ? '0%': yld?.infoBox?.yieldChange}</span>
                    {
                        yld?.infoBox?.yieldChange.includes('+') && <BiSolidUpArrow size={15} className='text-green-500' />
                    }
                    {
                        yld?.infoBox?.yieldChange.includes('-') && <BiSolidDownArrow size={15} className='text-red-500' />
                    }
                    {
                        yld?.infoBox?.yieldChange === '0.00%' && <TbAlertSquareRoundedFilled size={15} className='text-gray-500' />
                    }
                    </div>
                </div>
            }) 
        }
        </div>
    )
}

export default StatsRow2