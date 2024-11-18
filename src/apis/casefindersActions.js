import axios from "./baseUrl2";

export const fetchStateDetail = async ( data, setStateDetail, setError, setLoading ) => {

    setLoading(true);

    try{
        const response  = await axios.post(`public-state-detail`,
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );    

        console.log(response.data);
        setStateDetail(response.data);
    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data);
        }
    }

    setLoading(false);
}

