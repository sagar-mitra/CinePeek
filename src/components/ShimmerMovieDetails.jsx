import React from "react";

const ShimmerMovieDetails = () => {
  return (
    <div className="pt-20 sm:pt-16 lg:pt-22 max-w-screen min-h-screen text-white px-4 sm:px-8">
      {/* Main Grid */}
      <div className="grid gap-5 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_1.7fr]">
        {/* Left - Poster & Button */}
        <div className="flex flex-col items-center justify-center animate-pulse">
          {/* Poster Skeleton */}
          <div className="rounded-lg bg-gray-800 w-[270px] xs:w-[300px] lg:w-full xl:w-[470px] h-[400px] xs:h-[460px] lg:h-[600px] xl:h-[700px] mb-7"></div>

          {/* Button Skeleton */}
          <div className="rounded bg-gray-700 w-[270px] xs:w-[300px] lg:w-full xl:w-[470px] h-[50px]"></div>
        </div>

        {/* Right - Info */}
        <div className="sm:px-12 lg:px-1 animate-pulse">
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
          {/* Subtitle Skeleton */}
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-6"></div>

          {/* Overview Text Skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-700 rounded w-4/6"></div>
          </div>

          {/* Cast Skeleton */}
          <div className="flex space-x-3 overflow-x-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-[80px]">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-700 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Movie Images Skeleton */}
      <div className="mt-10 sm:px-12 lg:px-1 animate-pulse">
        <div className="flex space-x-3 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-[180px] h-[120px] rounded-lg bg-gray-700"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerMovieDetails;
