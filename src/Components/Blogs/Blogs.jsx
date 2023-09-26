import React from 'react';

const Blogs = ({blog}) => {
    const {blogTitle,id,blogDescription,blogImage,blogNewsLink}=blog
    return (
        <div>
                 <div className="container mx-auto pt-20">
            
            <div className="">
              
              <div>
                <div className="card h-[480px] bg-base-100 shadow-xl">
                  <figure><img src={blogImage} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">{blogTitle}</h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      
                    </div>

                    <div className="flex gap-2 items-center">
                     


                    </div>
                  </div>
                    <p>{blogDescription}</p>
                    <div className="card-actions justify-center">
                      <button className="btn text-white hover:bg-blue-500 rounded-full text-3xl bg-black">see more</button>
                    </div>
                  </div>
                </div>

              </div>
           

            </div>
          </div>
        </div>
    );
};

export default Blogs;