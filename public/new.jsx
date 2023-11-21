<div className="space-y-3 text-white my-5">
<h1 className="text-3xl font-bold text-center">Our Speakers</h1>
<h1 className="text-5xl font-bold text-center">WHO’S SPEAKING</h1>
</div>
<div className='grid lg:grid-cols-3 gap-5 container mx-auto mt-8 pb-20'>

{
  sperkers.slice(0,datalength). map((sperker,index)=><Speakers key={index} sperkers={sperker}></Speakers>)
}
</div>


<div className='flex justify-center items-center mb-10'>
<div className={datalength===sperkers.length && "hidden"}>

<button onClick={()=> setdatalength(sperkers.length)} className='btn btn-ghost bg-red-700 text-white'>See All Speakers</button>

</div>
</div>


<div className='bg-[#171717] pt-16 pb-16'>
<div className="space-y-5 pt-8 pb-8 text-white mt-">
<h1 className="text-3xl text-center">OUR TIMETABLE</h1>
<h1 className="text-5xl font-bold text-center">SCHEDULE PLAN</h1>

</div>
{/* <Schedule></Schedule> */}
<div className='space-y-5'>
{
  sperkers.slice(0,5). map((sperker,index)=><Schedule  key={index} sperkers={sperker}></Schedule>)
}
</div>
</div>