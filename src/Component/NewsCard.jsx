import React from "react";
import { FaStar, FaRegEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, details, rating, total_view, thumbnail_url, tags } = news;

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200 relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex items-center gap-3 text-gray-500 text-lg cursor-pointer">
          <FaBookmark className="hover:text-secondary transition" />
          <FaShareAlt className="hover:text-secondary transition" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold leading-snug hover:text-secondary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-[220px] object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3">
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.slice(0, 220)}...
          <span className="text-secondary font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>
      </div>

      {/* Tags */}
      <div className="px-4 py-2">
        <p className="text-xs text-gray-500">
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </p>
      </div>

      {/* Footer */}
      <div className="card-actions flex items-center justify-between px-4 py-3 border-t text-sm text-gray-500">
        {/* ⭐ Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-800 font-medium ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* 👁️ Total Views */}
        <div className="flex items-center gap-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
