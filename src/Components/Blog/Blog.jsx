import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';

const Blog = () => {
    const blog=useLoaderData();
    console.log(blog);
    return (
        <div className=' container mx-auto pt-8 pb-10'>
          <div className="space-y-4">
              <h1 className="text-5xl font font-semibold text-center text-white">Upcomming Event</h1>
            

            </div>
        
          <div className='grid space-x-8 lg:grid-cols-3 grid-cols-1 mt-10'>
          {
            blog.map((blogs,index)=><Blogs blog={blogs} key={index}></Blogs>)
          }
          </div>
        </div>
    );
};

export default Blog;