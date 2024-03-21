import React from "react";

export default function BookCard({
  title,
  authors,
  available,
  total,
  location,
}) {
  return (
    <div className="h-full mt-20 mx-5">
      <div className="w-full max-w-sm p-4 bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-baseline text-gray-900 ">
          <span className="text-xl font-extrabold tracking-tight">{title}</span>
        </div>
        <h5 className="mb-4  font-medium text-gray-500 ">{authors}</h5>
        <div className="flex items-center w-full ">
          <span className="ml-0 mr-auto">
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Location:
            </span>
            <span className="text-base font-bold leading-tight text-gray-500">
              {" " + location}
            </span>
          </span>
          <span>
            <span className="text-base font-normal leading-tight text-gray-500 ">
              Available:
            </span>
            <span className="text-base font-bold leading-tight text-gray-500 ">
              {" " + available}/{total}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
