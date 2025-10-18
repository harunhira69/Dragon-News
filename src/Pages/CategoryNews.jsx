import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if(id=="0"){
            setCategoryNews(data)
           
            return;
        }
        else if(id=="1"){
              const filterdData = data.filter((news) => 
                news.others.is_today_pick == true)
        setCategoryNews(filterdData)

        }
        else{
             const filterdData = data.filter((news) => news.category_id == id)
        setCategoryNews(filterdData)

        }
       
    }, [data, id])


    console.log(id)
    return (
        <div>
        <h2 className='font-bold mb-5'>Total <span className='text-secondary'>
            {categoryNews.length} </span>Found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news)=>(
                         <NewsCard id ={news.id} news={news}></NewsCard>
                    )
                       
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;