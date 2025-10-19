import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/homeLayout/LeftAside';
import RightAside from '../Component/homeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div>
            <header>
                <Header/>
                <section className='mx-auto w-11/12'>
                <LatestNews/>
                </section>
                <nav className='mx-auto w-11/12 mt-5'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='mx-auto w-11/12 my-3 grid grid-cols-12 gap-5'>
               <aside className='col-span-3 sticky top-0 h-fit'>
                <LeftAside></LeftAside>
               </aside>
                <section className='main-nav col-span-6'>
                {state == 'loading'?<Loading></Loading>:    <Outlet></Outlet>}
                </section>
               <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;