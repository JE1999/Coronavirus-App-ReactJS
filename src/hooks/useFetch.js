import { useState, useEffect } from 'react';
import axios from 'axios'

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true,
        error: false
    })
  
    useEffect(() => {

        (async () =>{
            try {
                const request = await axios.get(url)
                setState({
                    data: request.data,
                    loading: false,
                    error: false
                })
                
            } catch (error) {
                console.log(error.response)
                setState({
                    data: [],
                    loading: false,
                    error: true
                })
            }
        })()

    },[url])
  
    return state
}
