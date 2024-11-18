import React, { useEffect, useState } from 'react'
import GoogleMapComponent from '../../common/GoogleMapComponent'
import { fetchTxcurrData, fetchTxhtsposData } from '../../apis/dashboardActions'
import { generateFilledmapMarkers } from '../../apis/functions';
import TopLeftComponentOne from './TopLeftComponentOne';
import TopLeftComponentTwo from './TopLeftComponentTwo';
import HTSPOSComponent from './HTSPOSComponent';
import TSCURRComponent from './TSCURRComponent';
import PVLSComponent from './PVLSComponent';
import HTSPOSLeadIndicators from './HTSPOSLeadIndicators';
import TXCURRLeadIndicators from './TXCURRLeadIndicators';
import PVLSLeadIndicators from './PVLSLeadIndicators';
import { MdArrowCircleUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu';
import { fetchStateDetail } from '../../apis/casefindersActions';

const MainComponent = ({ active }) => {

    const [stateDetail, setStateDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [pmarkers, setPmarkers] = useState();
    const [txcurrdata, setTxcurrdata] = useState(null);
    const [txhtsposdata, setTxhtsposdata] = useState(null);
    const fy = import.meta.env.VITE_FISCAL_YEAR;


    const [closeIndicators, setCloseIndicators] = useState(false);

    const toggleIndicators = () => {
        setCloseIndicators(!closeIndicators);
    }

    useEffect(() => {
        fetchStateDetail({ state: active }, setStateDetail, setError, setLoading);
    }, [])

    useEffect(() => {
        if(stateDetail !== null) {
            setPmarkers(generateFilledmapMarkers(stateDetail));
        }
    }, [active]) 

    useEffect(() => {
        fetchTxcurrData({ state: active, fy }, setTxcurrdata, setError, setFetching);
        fetchTxhtsposData({ state_referred: active, fy }, setTxhtsposdata, setError, setFetching);

        const intervalId = setInterval(() => {
            fetchTxcurrData({ state: active, fy }, setTxcurrdata, setError, setFetching);
            fetchTxhtsposData({ state_referred: active, fy }, setTxhtsposdata, setError, setFetching);
        }, 60000); // 60 seconds
      
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='w-full grid space-y-2'>
            <div className='w-full grid md:flex my-2 md:justify-between space-y-4 md:space-y-0 px-4'>
                <div className='w-full md:flex md:justify-between md:w-[49%]'>
                    <TopLeftComponentOne loc={active} />
                    <TopLeftComponentTwo loc={active} txcurrdata={txcurrdata} txhtsposdata={txhtsposdata} />
                </div>
                <div className='w-full md:w-[49%] border'>
                    <GoogleMapComponent loading={loading} selectedState={active} markers={stateDetail !== null && generateFilledmapMarkers(stateDetail)} />
                </div>
            </div>
            <div className='w-full px-4 grid space-y-4 md:space-y-0 md:flex md:justify-between'>
                <HTSPOSComponent />
                <TSCURRComponent />
                <PVLSComponent />
            </div>
            
            <div className='w-full px-4'>
                <div className='w-full flex space-x-2 items-center mt-4 border-b border-gray-300 dark:border-gray-700 p-1'>
                {
                    closeIndicators ?
                        <LuPlusCircle size={20} className='cursor-pointer' onClick={() => toggleIndicators()} />
                        :
                        <LuMinusCircle size={20} className='cursor-pointer' onClick={() => toggleIndicators()} />
                }
                    <span className='text-lg'>Lead Indicators</span>
                </div>
            {
                !closeIndicators && 
                    <div className='w-full grid space-y-4 md:space-y-0 md:flex md:justify-between'>
                        <HTSPOSLeadIndicators />
                        <TXCURRLeadIndicators />
                        <PVLSLeadIndicators />
                    </div>
            }
            </div>
        </div>
    )
}

export default MainComponent