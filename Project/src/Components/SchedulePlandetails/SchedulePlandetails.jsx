/* eslint-disable no-undef */
import React from 'react';

const SchedulePlandetails = () => {

    
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
            
        </div>
    );
};

export default SchedulePlandetails;