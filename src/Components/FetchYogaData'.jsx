import React from 'react'
import UseFetch from './UseFetch';
const FetchYogaData = () => {
      const [data]=UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
      console.log(data);
  return (
   <>
        <ul className='list_data_main'>
    {data && data.map(e=>(
        <>
        <li className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Name: </strong>{e.name}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time_duration: </strong>{e.time_duration}</p>
            </li>
        </>
    ))}
    </ul>

   </>
  )
}
export default FetchYogaData