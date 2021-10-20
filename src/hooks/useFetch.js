import { useEffect, useState } from 'react';

const useFetch = () => {
    const [details, setDetails]= useState();
     useEffect( ()=>{
         fetch('/features.json')
         .then(res => res.json())
         .then(data => setDetails(data))

     },[])
     return[details]
    
};

export default useFetch;