import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
   const {category_id,image_url,title,details} = news;
    return (
        <div className='space-y-5'>
          <img className='h-[350px] w-full object-cover' src={image_url} alt="" />
          <h2 className='text-2xl'>{title}</h2>
          <p>{details}</p>
          <Link className='w-full btn btn-secondary' to={`/category/${category_id}`}>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;