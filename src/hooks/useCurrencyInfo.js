import axios from 'axios';
import { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
  const [data , setData] = useState({});
  useEffect(()=>{
    axios(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=> {
      setData(res.data[currency]);
  })
  },[currency])
  // console.log(data)
  
  return data;
}

export default useCurrencyInfo
