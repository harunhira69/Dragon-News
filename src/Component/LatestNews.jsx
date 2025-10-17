import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3 gap-5'>
            <p className='text-base-100 px-3 py-2 bg-secondary'>Latest</p>
           <Marquee className='flex gap-5 cursor-pointer ' pauseOnHover={true} speed={60}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores suscipit praesentium eum ipsam?</p>
               <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores suscipit praesentium eum ipsam?</p>
                 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores suscipit praesentium eum ipsam?</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;