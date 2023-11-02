import { useEffect, useState } from 'react';

import axios from 'axios';
import Spot from './Spot';
import { useLoaderData } from 'react-router-dom';


const Spots = () => {

    const spots = useLoaderData()

    // const [spots, setSpots] = useState([])

    // useEffect(()=>{
    //     axios({
    //         method: 'get',
    //         url: 'http://localhost:3000/spots',
    //         responseType: 'stream'
    //       })
    //         .then(
    //             response => {
    //                 console.log(response.data)
    //                 setSpots(response.data)
    //             }
    //         )
    // },[])

    return (
        <div className=' grid grid-cols-5 gap-3 items-center justify-center px-10 py-5 border-3 border-red'>
            {
                spots.map(spot=>(
                    <Spot key={spot._id} spot={spot}></Spot>
                ))
            }
        </div>
    );
};

export default Spots;