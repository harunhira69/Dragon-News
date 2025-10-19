import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json').then((res)=>res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    // console.log(categories)
    return (
        <div>
            <h3 className='font-bold'>
            All Categories:{categories.length}</h3>
              <div className='grid grid-cols-1 gap-5 mt-5 '>
                {
                    categories.map((category)=>
                    <NavLink 
                    key={categories.id}
                    className="btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"
                    to={`/category/${category.id}`}
                    >
                        {category.name}

                    </NavLink>
                    )
                }
            
        </div>
        </div>
      
    );
};

export default Categories;