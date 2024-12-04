import React, { act, useEffect, useState } from 'react'
import StatsRow1 from './stats-components/StatsRow1'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import StatsRow2 from './stats-components/StatsRow2'
import { fetchLGAdata, fetchPostBiweeklyLGAyeilds } from '../../apis/dashboardActions'

const StatsComponent = ({ active }) => {

    const [lgachartdata, setLgachartdata] = useState(null);
    const [yields, setYields] = useState(null);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [activeid, setActiveid] = useState(1);
    const [activedata, setActivedata] = useState();

    const goForward = () => {
        lgachartdata !== null && (
            lgachartdata?.lga_information.length === activeid ?
                setActiveid(1)
                :
                setActiveid(activeid + 1)
        )
    }

    const goBackward = () => {
        lgachartdata !== null && (
            activeid === 1 ?
                setActiveid(lgachartdata?.lga_information.length)
                :
                setActiveid(activeid - 1)
        )
    }

    useEffect(() => {
        fetchLGAdata({ state: active }, setLgachartdata, setError, setFetching);
        fetchPostBiweeklyLGAyeilds({ state: active }, setYields, setError, setFetching);

        const intervalId = setInterval(() => {
            fetchLGAdata({ state: active }, setLgachartdata, setError, setFetching);
            fetchPostBiweeklyLGAyeilds({ state: active }, setYields, setError, setFetching);
        }, 60000); // 60 seconds

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        setActiveid(activeid);

        const intervalId = setInterval(() => {
            lgachartdata !== null && 
                (activeid === lgachartdata?.lga_information.length ? 
                    setActiveid(1) : setActiveid(activeid + 1))
        }, 10000); // 10 seconds

        return () => clearInterval(intervalId);
    }, [activeid, lgachartdata])

    useEffect(() => {

        activeid && 
            lgachartdata?.lga_information.filter(lginfo => {
                lginfo?.id ===  activeid && setActivedata(lginfo);
            } )

    }, [activeid])

    return (
        <div className='w-full grid px-8 pt-2 pb-12 space-y-4'>
            <div className='flex space-x-3 items-center'>
                <div 
                    className='max-w-max rounded-sm cursor-pointer hover:bg-gray-100'
                    onClick={() => goBackward()}
                >
                    <MdOutlineArrowBackIos size={30} />
                </div>
                <StatsRow1 activedata={activedata} fetching={fetching} active={active} />
                <div 
                    className='max-w-max rounded-sm cursor-pointer hover:bg-gray-100'
                    onClick={() => goForward()}
                >
                    <MdOutlineArrowForwardIos size={30} />
                </div>
            </div>
            <div className='w-full pt-1'>
                <span className='uppercase font-semibold'>Post Bi-weekly Yield Assessment</span>
            </div>
            <StatsRow2 yields={yields} fetching={fetching} />
        </div>
    )
}

export default StatsComponent 