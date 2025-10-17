import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';

const FindUs = () => {
    return (
        <div>
          <h2 className='font-bold mb-5'>Find Us</h2>
          <div>
<div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start  join-item">
   <FaFacebookF /> Facebook</button>
  <button className="btn bg-base-100 justify-start  join-item">
   <IoLogoTwitter /> Twitter</button>
  <button className="btn bg-base-100 justify-start  join-item">
  <IoLogoInstagram />  Instagram</button>
</div>
          </div>
        </div>
    );
};

export default FindUs;