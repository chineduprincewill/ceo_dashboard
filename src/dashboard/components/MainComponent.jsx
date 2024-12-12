import React, { useEffect, useState } from 'react'
import GoogleMapComponent from '../../common/GoogleMapComponent'
import { fetchEligibles, fetchHtsposData, fetchHtsPosindicators, fetchHtststData, fetchLGAdata, fetchPostBiweeklyLGAyeilds, fetchPvlsData, fetchReturned, fetchTestingTATDays, fetchTotalcomm, fetchTotalIIT, fetchTotalindex, fetchTotalkeypop, fetchTotalpitc, fetchTotalpmtct, fetchTxcurrData } from '../../apis/dashboardActions'
import { generateFilledmapMarkers } from '../../apis/functions';
import TopLeftComponentOne from './TopLeftComponentOne';
import TopLeftComponentTwo from './TopLeftComponentTwo';
import HTSPOSComponent from './HTSPOSComponent';
import TSCURRComponent from './TSCURRComponent';
import PVLSComponent from './PVLSComponent';
import HTSPOSLeadIndicators from './LeadIndicators';
import TXCURRLeadIndicators from './TXCURRLeadIndicators';
import PVLSLeadIndicators from './PVLSLeadIndicators';
import { MdArrowCircleUp, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu';
import { fetchStateDetail } from '../../apis/casefindersActions';
import LeadIndicators from './LeadIndicators';

const MainComponent = ({ active }) => {

    const [stateDetail, setStateDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [pmarkers, setPmarkers] = useState();
    const [txcurrdata, setTxcurrdata] = useState(null);
    const [txhtsposdata, setTxhtsposdata] = useState(null);
    const [htststdata, setHtststdata] = useState(null);
    const [pvlsdata, setPvlsdata] = useState(null);
    const [htsposindicators, setHtsposindicators] = useState(null);
    const [totalindex, setTotalindex] = useState(null);
    const [totalpitc, setTotalpitc] = useState(null);
    const [totalkeypop, setTotalkeypop] = useState(null);
    const [totalcomm, setTotalcomm] = useState(null);
    const [totalpmtct, setTotalpmtct] = useState(null);
    const [totaliit, setTotaliit] = useState(null);
    const [eligibles, setEligibles] = useState(null);
    const [returned, setReturned] = useState(null);
    const [testingtatdays, setTestingtatdays] = useState(null);
    const [yields, setYields] = useState(null);
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
        fetchHtsposData({ state_referred: active, fy }, setTxhtsposdata, setError, setFetching);
        fetchHtststData({ state: active, fy }, setHtststdata, setError, setFetching);
        fetchPvlsData({ state: active, fy}, setPvlsdata, setError, setFetching);
        fetchHtsPosindicators({ state: active, fy}, setHtsposindicators, setError, setFetching);
        fetchTotalindex({ state: active, fy }, setTotalindex, setError, setFetching);
        fetchTotalpitc( { state: active, fy }, setTotalpitc, setError, setFetching);
        fetchTotalkeypop( { state: active, fy }, setTotalkeypop, setError, setFetching);
        fetchTotalcomm( { state: active, fy }, setTotalcomm, setError, setFetching);
        fetchTotalpmtct( { state: active, fy }, setTotalpmtct, setError, setFetching);
        fetchTotalIIT( { state: active, fy }, setTotaliit, setError, setFetching);
        fetchEligibles( { state: active, fy }, setEligibles, setError, setFetching);
        fetchReturned( { state: active, fy }, setReturned, setError, setFetching);
        //fetchTestingTATDays( setTestingtatdays, setError, setFetching);
        

        const intervalId = setInterval(() => {
            fetchTxcurrData({ state: active, fy }, setTxcurrdata, setError, setFetching);
            fetchHtsposData({ state_referred: active, fy }, setTxhtsposdata, setError, setFetching);
            fetchHtststData({ state: active, fy }, setHtststdata, setError, setFetching);
            fetchPvlsData({ state: active, fy}, setPvlsdata, setError, setFetching);
            fetchHtsPosindicators({ state: active, fy}, setHtsposindicators, setError, setFetching);
            fetchTotalindex({ state: active, fy }, setTotalindex, setError, setFetching);
            fetchTotalpitc( { state: active, fy }, setTotalpitc, setError, setFetching);
            fetchTotalkeypop( { state: active, fy }, setTotalkeypop, setError, setFetching);
            fetchTotalcomm( { state: active, fy }, setTotalcomm, setError, setFetching);
            fetchTotalpmtct( { state: active, fy }, setTotalpmtct, setError, setFetching);
            fetchTotalIIT( { state: active, fy }, setTotaliit, setError, setFetching);
            fetchEligibles( { state: active, fy }, setEligibles, setError, setFetching);
            fetchReturned( { state: active, fy }, setReturned, setError, setFetching);
            //fetchTestingTATDays( setTestingtatdays, setError, setFetching);
        }, 60000); // 60 seconds
      
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='w-full grid space-y-4'>
            <div className='w-full grid md:flex my-2 md:justify-between space-y-4 md:space-y-0 px-4'>
                <div className='w-full md:flex md:justify-between md:w-[49%]'>
                    <TopLeftComponentOne loc={active} />
                    <TopLeftComponentTwo 
                        loc={active} 
                        txcurrdata={txcurrdata} 
                        txhtsposdata={txhtsposdata} 
                        htststdata={htststdata}
                    />
                </div>
                <div className='w-full md:w-[49%] border'>
                    <GoogleMapComponent loading={loading} selectedState={active} markers={stateDetail !== null && generateFilledmapMarkers(stateDetail)} />
                </div>
            </div>
            <div className='w-full px-4 grid space-y-4 md:space-y-0 md:flex md:justify-between'>
                <HTSPOSComponent labels={pvlsdata?.pvlsChart} indicators={htsposindicators?.primaryIndicators} />
                <TSCURRComponent txcurrperc={txcurrdata?.percentTxCurr?.percent_tx_curr} txcurrtrend={txcurrdata?.txCurrTrend}  />
                <PVLSComponent pvlsperc={pvlsdata?.TXPVLSPercentage} pvlstrend={pvlsdata?.pvlsChart} />
            </div>
            
            <div className='w-full px-4'>
                <div className='w-full flex space-x-2 items-center mt-2 border-b border-gray-300 dark:border-gray-700 p-1'>
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
                    <LeadIndicators 
                        totalindex={totalindex} 
                        totalpitc={totalpitc}
                        totalkeypop={totalkeypop}
                        totalcomm={totalcomm}
                        totalpmtct={totalpmtct}
                        txhtsposdata={txhtsposdata}
                        totaliit={totaliit}
                        eligibles={eligibles}
                        returned={returned}
                        testingtatdays={testingtatdays}
                    />
            }
            </div>
        </div>
    )
}

export default MainComponent