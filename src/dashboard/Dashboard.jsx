import React, { useEffect, useState } from 'react'
import MainComponent from './components/MainComponent'
import StatsComponent from './components/StatsComponent';


const Dashboard = () => {
    const [currpage, setCurrpage] = useState('main');
    const url = window.location.href;
    const stateval = url.split('#')[1];
    const [currstate, setCurrstate] = useState(stateval ? stateval : 'Benue')

    useEffect(() => {
        //currpage !== 'main' ? setCurrpage('main') : setCurrpage('stats');

        const intervalId = setInterval(() => {
            currpage !== 'main' ? setCurrpage('main') : setCurrpage('stats');
        }, 300000); // 60 seconds
      
        return () => clearInterval(intervalId);
    }, [currpage])

    //let view =  currpage === 'main' ? <MainComponent active={currstate} /> : <StatsComponent  active={currstate} />

    return (
        <div className='w-full grid m-0'>
            <div className={`w-full ${currpage !== 'main' && 'hidden'}`}>
                <MainComponent active={currstate} />
            </div>
            <div className={`w-full ${currpage !== 'stats' && 'hidden'}`}>
                <StatsComponent  active={currstate} />
            </div>
        </div>
    )
}

export default Dashboard