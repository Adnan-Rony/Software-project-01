
import img1 from '../../assets/1 (1).png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/a1.png'
import img5 from '../../assets/a2.png'
import img6 from '../../assets/a3.png'
import img7 from '../../assets/a4.png'
import img8 from '../../assets/a5.png'
const Sponser = () => {
    return (
        <div className=' bg-[#171717] '>
            <div className=' py-20 text-white container mx-auto'>

               <div className='my-20'>
               <div className='my-10 text-center space-y-5'>
                    <p className='text-5xl font-bold'>      <span className='text-red-700'>Event</span> Sponsors</p>
                    <p>Check who make this event possible</p>
                </div>
                <div className='mt-10'>
                    <p className='text-center text-2xl font-semibold'>Gold Sponsors</p>
                    
                </div>
                <div className='grid grid-cols-3 gap-5 my-5 items-center'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>

                <div className='my-10'>
                    <p className='text-center text-2xl font-semibold'>Silver Sponsors</p>
                    
                </div>

                <div className='grid grid-cols-5 gap-5 my-5 items-center'>
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />

                </div>
               </div>


            </div>
        </div>
    );
};

export default Sponser;