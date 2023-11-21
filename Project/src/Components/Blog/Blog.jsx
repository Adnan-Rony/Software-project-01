import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';


const Blog = () => {


  // const blog=useLoaderData();
  // console.log(blog);
  const [blogs, setblogs] = useState([]);
  const [datalength, setdatalength] = useState(3)
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('Blog.json')
      .then(res => res.json())
      .then(data => setblogs(data))
  }, [])


  const handleSeeAllClick = () => {
    if (showAll) {
      // If already showing all, go back to showing 3 cards
      setdatalength(3);
    } else {
      // If not showing all, set dataLength to show all cards
      setdatalength(blogs.length);
    }
    // Toggle the showAll state
    setShowAll(!showAll);
  };


  return (
    <div className=' container mx-auto  py-10'>
      <div className="space-y-4">
        <h1 className="text-5xl font font-semibold text-center text-white">Upcoming <span className='text-red-700'>Event</span></h1>


      </div>





      <div className='grid space-x-8 lg:grid-cols-3 grid-cols-1 mt-10'>
        {
          blogs.slice(0, datalength).map((blogs, index) => <Blogs blog={blogs} key={index}></Blogs>)
        }
      </div>




      <div className='flex justify-center my-10 '>
        <button onClick={handleSeeAllClick} className='btn bg-red-700 text-white'>
          {showAll ? 'SHOW LESS' : 'SEE ALL'

          }

        </button>
      </div>













    </div>
  );
};

export default Blog;