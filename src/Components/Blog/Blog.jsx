import React from 'react';

const Blog = () => {
    return (
        <div className='h-screen'>
             <div className="container mx-auto pt-20">
            <div className="space-y-4">
              <h1 className="text-3xl font font-semibold text-center text-white">OUR BLOG</h1>
              <h1 className="text-5xl font font-semibold text-center text-white">LATEST NEWS</h1>

            </div>
            <div className="grid space-x-8 lg:grid-cols-3 grid-cols-1 mt-10">
              
              <div>
                <div className="card h-[512px] bg-base-100 shadow-xl">
                  <figure><img src="https://i.ibb.co/4WX7x4B/Oath2.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">AUAP </h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      
                    </div>

                    <div className="flex gap-2 items-center">
                     


                    </div>
                  </div>
                    <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                    <div className="card-actions justify-center">
                      <button className="btn text-white hover:bg-blue-500 rounded-full text-3xl bg-black">see more</button>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className="card h-[512px]  bg-base-100 shadow-xl">
                  <figure><img src="https://i.ibb.co/rchfF3C/startup-3267505-1280.webp" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">10 Strategies For Success In The Corporate Environment
</h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                     
                    </div>

                    <div className="flex gap-2 items-center">
                      


                    </div>
                  </div>
                    <p>In the corporate world, maintaining a professional appearance is crucial. Whether you’re dealing with clients, lawyers, or corporate managers, dressing impeccably is a sign of respect and organizational prowess.</p>
                    <div className="card-actions justify-center">
                    <a href="https://blog.daffodilvarsity.edu.bd/10-strategies-for-success-in-the-corporate-environment/
                    ">

<button className="btn text-white hover:bg-blue-500 rounded-full text-3xl bg-black">see more</button>
                    </a>
                    </div>
                  </div>
                </div>

              </div>
              <div>
                <div className="card h-[512px] bg-base-100 shadow-xl">
                  <figure><img src="https://i.ibb.co/r5vYdQn/Networking-as-Your-Trump-Card.webp" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Networking As Your Trump Card: Unlocking Opportunities And Success</h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                     
                    </div>

                    <div className="flex gap-2 items-center">
                     


                    </div>
                  </div>
                    <p>In today’s fast-paced and highly competitive world, success often hinges on more than just talent and hard work. While these qualities are undoubtedly essential, there’s another invaluable asset that can elevate your career.</p>
                    <div className="card-actions justify-center">
                    
                    <a href="https://blog.daffodilvarsity.edu.bd/networking-as-your-trump-card-unlocking-opportunities-and-success/">
                    <button className="btn text-white hover:bg-blue-500 rounded-full text-3xl bg-black">see more</button>

                    </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
    );
};

export default Blog;