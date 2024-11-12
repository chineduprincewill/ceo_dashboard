import React, { useState } from 'react'
import MainComponent from './components/MainComponent'
import StatsComponent from './components/StatsComponent';


const Dashboard = () => {
    const [currpage, setCurrpage] = useState('main');
    const url = window.location.href;
    const stateval = url.split('#')[1];
    const [currstate, setCurrstate] = useState(stateval ? stateval : 'Benue')

    let view =  currpage === 'main' ? <MainComponent active={currstate} /> : <StatsComponent  active={currstate} />

    return (
        <div className='w-full m-0'>
            {view}
        </div>
    )
}

export default Dashboard