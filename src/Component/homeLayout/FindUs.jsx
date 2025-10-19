import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';

const FindUs = () => {
    return (
        <div>
          <h2 className='font-bold mb-5'>Find Us</h2>
          <div>
            <div className="join join-vertical w-full">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="join-item w-full"
              >
                <button className="btn bg-base-100 justify-start w-full">
                  <FaFacebookF /> Facebook
                </button>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="join-item w-full"
              >
                <button className="btn bg-base-100 justify-start w-full">
                  <IoLogoTwitter /> Twitter
                </button>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="join-item w-full"
              >
                <button className="btn bg-base-100 justify-start w-full">
                  <IoLogoInstagram /> Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
    );
};

export default FindUs;
