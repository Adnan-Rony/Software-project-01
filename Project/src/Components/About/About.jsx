import React, { useEffect, useState } from 'react';
import img from '../../assets/205970_175.jpg'


const About = () => {
  const [countdownValues, setCountdownValues] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 57,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownValues(prevValues => {
        // Handle countdown logic here
        // For simplicity, let's decrement each value by 1 second
        const newValues = { ...prevValues };
        if (newValues.seconds > 0) {
          newValues.seconds -= 1;
        } else {
          if (newValues.minutes > 0) {
            newValues.minutes -= 1;
            newValues.seconds = 59;
          } else {
            if (newValues.hours > 0) {
              newValues.hours -= 1;
              newValues.minutes = 59;
              newValues.seconds = 59;
            } else {
              if (newValues.days > 0) {
                newValues.days -= 1;
                newValues.hours = 23;
                newValues.minutes = 59;
                newValues.seconds = 59;
              } else {
                // Countdown reached zero, you may want to handle this case
                clearInterval(interval);
              }
            }
          }
        }

        return newValues;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (


 
    <div>
      <div className="hero min-h-screen text-white bg-[#171717]  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 lg:relative'>
            <img src={img} className="lg:w-3/4 rounded-lg shadow-2xl" />
            <img src={img} className="lg:w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
          </div>
          <div className='lg:w-1/2 space-y-5 p-4'>
            <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
            <h1 className="text-xl font-bold"> conference is a formal meeting where individuals gather to discuss a particular topic, share information, and exchange ideas. Conferences can cover a wide range of subjects, including academic research, business, technology, science, arts, and more.</h1>


            <div className='flex gap-10 justify-center items-center py-20'>
              <div>
              <p className="font-bold">COUNT EVERY SECOND <br /> UNTIL THE EVENT</p>
              </div>

              <div className="grid lg:grid-flow-col gap-5 text-center auto-cols-max">
      {Object.entries(countdownValues).map(([unit, value]) => (
        <div key={unit} className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": value < 10 ? `0${value}` : value }}></span>
          </span>
          {unit}
        </div>
      ))}
    </div>
            </div>


            <button className="btn bg-red-700 text-white border-none">Get More Info</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;