import axios from "./baseUrl";

export const fetchStatesSummary = async ( token, data, setStatesSummary, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`states-summary`,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setStatesSummary(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchTxcurrData = async ( data, setTxcurrdata, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-tx-curr-trend`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTxcurrdata(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchHtsposData = async ( data, setTxhtsposdata, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-positive-cases`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTxhtsposdata(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchHtststData = async ( data, setHtststdata, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-htst-gap`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setHtststdata(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchPvlsData = async ( data, setPvlsdata, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch_PVLS_and_percentage`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setPvlsdata(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchHtsPosindicators = async ( data, setHtsposindicators, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`primary_indicator_hts_pos`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setHtsposindicators(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}


export const fetchTotalindex = async ( data, setTotalindex, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-index`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotalindex(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTotalpitc = async ( data, setTotalpitc, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-pitc`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotalpitc(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTotalkeypop = async ( data, setTotalkeypop, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-keypop`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotalkeypop(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTotalcomm = async ( data, setTotalcomm, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-community`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotalcomm(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTotalpmtct = async ( data, setTotalpmtct, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-pmtc`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotalpmtct(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTotalIIT = async ( data, setTotaliit, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-total-IIT`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTotaliit(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchEligibles = async ( data, setEligibles, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-vl-eligible-percentage`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setEligibles(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchReturned = async ( data, setReturned, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-tx-rtt`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setReturned(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchTestingTATDays = async ( data, setTestingtatdays, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-testing-tat-days`,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setTestingtatdays(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchStateLgas = async ( token, data, setLgas, setError ) => {
    try{
        const response  = await axios.post(`state-lgas`,
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );    

        console.log(response.data);
        setLgas(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }
}


export const getTotalTests = (arr) => {
    let num = 0;
    arr.map(obj => num += parseInt(obj?.total_entries));
    return num;
}

export const getTotalPositives = (arr) => {
    let num = 0;
    arr.map(obj => num += parseInt(obj?.confirmed));
    return num;
}

export const getTotal28Tests = (arr) => {
    let num = 0;
    arr.map(obj => num += parseInt(obj?.last_28_days_count));
    return num;
}

export const getTotal28Positives = (arr) => {
    let num = 0;
    arr.map(obj => num += parseInt(obj?.confirmed_last_28_days));
    return num;
}


export const fetchPostBiweeklyLGAyeilds = async ( data, setYields, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`lga-yields`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setYields(response.data?.secondPageChartData);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}

export const fetchLGAdata = async ( data, setLgachartdata, setError, setFetching ) => {

    setFetching(true);

    try{
        const response  = await axios.post(`fetch-second-page-data`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setLgachartdata(response.data?.secondPageData);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setFetching(false);
}