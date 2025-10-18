import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Qzone from '../Component/homeLayout/Qzone';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const[news,setNews] = useState({});
    useEffect(()=>{
        const NewsDetails = data.find((singleNews)=>singleNews.id==id);
        setNews(NewsDetails)
    },[data,id])

    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
            <section className='col-span-9'>
             <h2 className='font-semibold text-2xl'>Dragon News</h2>
             <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <Qzone></Qzone>
            </aside>
           </main>
        </div>
    );
};

export default NewsDetails;