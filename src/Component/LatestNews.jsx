import React, { use } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

// preload all news data
const newsPromise = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const newsData = use(newsPromise);

  // filter only breaking news (today's pick)
  const breakingNews = newsData.filter(
    (news) => news.others?.is_today_pick === true
  );

  return (
    <div className="flex flex-col sm:flex-row sm:items-center bg-base-200 p-3 gap-3 sm:gap-5 w-full">
      {/* Label */}
      <p className="text-base-100 text-sm sm:text-base px-3 py-1 sm:py-2 bg-secondary rounded-md text-center sm:text-left">
        Latest
      </p>

      {/* Marquee */}
      <div className="flex-1 w-full overflow-hidden">
        <Marquee
          pauseOnHover={true}
          speed={60}
          gradient={true}
          gradientWidth={50}
          className="cursor-pointer"
        >
          {breakingNews.length > 0 ? (
            breakingNews.map((news) => (
              <Link
                key={news.id}
                to={`/news-details/${news.id}`}
                className="font-semibold text-sm sm:text-base mx-3 sm:mx-5 whitespace-nowrap hover:text-secondary transition-colors"
              >
                📰 {news.title}
              </Link>
            ))
          ) : (
            <p className="font-semibold text-gray-500">
              No breaking news available.
            </p>
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
