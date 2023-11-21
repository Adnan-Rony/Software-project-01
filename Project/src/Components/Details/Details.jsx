import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsShow from '../DetailsShow/DetailsShow';

const Details = () => {

    const [carddetails,setcarddetails]=useState();

    const detailsCard=useLoaderData();
    // console.log(detailsCard);



    const {id}=useParams();
    // console.log(id);

    useEffect(()=>{
        const details=detailsCard ?.find(carddetails=>carddetails.id==id)


            // console.log(details);
        setcarddetails(details)

    },[id,detailsCard])

console.log(carddetails);


    return (
        <div>
           <DetailsShow show={carddetails}></DetailsShow>
        </div>
    );
};

export default Details;