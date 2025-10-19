import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import Navbar from "../Component/Navbar";
import LeftAside from "../Component/homeLayout/LeftAside";
import RightAside from "../Component/homeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <header className="w-full">
        <Header />
        <section className="mx-auto w-11/12 mt-3">
          <LatestNews />
        </section>
        <nav className="mx-auto w-11/12 mt-5">
          <Navbar />
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto w-11/12 my-5 grid grid-cols-12 gap-5">
        {/* Left Aside */}
        <aside className="col-span-12 sm:col-span-3 sticky sm:top-0 h-fit">
          <LeftAside />
        </aside>

        {/* Main Section */}
        <section className="col-span-12 sm:col-span-6">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>

        {/* Right Aside */}
        <aside className="col-span-12 sm:col-span-3 sticky sm:top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
