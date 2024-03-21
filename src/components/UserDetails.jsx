import React from "react";

export default function UserDetails({firstName,booksIssued,email,enrollNo}) {
  return (
    <div className="w-1/2 mx-auto mb-5">
      <div className="bg-white p-3 shadow-sm rounded-lg">
        <div className=" mx-auto mb-5  items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span clas="flex text-green-500 mb-5">
            <svg
              className="h-5 w-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
        </div>
        <hr></hr>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-3">
              <div className="px-4 py-2 font-semibold">Name</div>
              <div className="px-4 py-2">{firstName}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="px-4 py-2 font-semibold">E-mail</div>
              <div className="px-4 py-2">{email}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="px-4 py-2 font-semibold">Enroll. No.</div>
              <div className="px-4 py-2">{enrollNo}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="px-4 py-2 font-semibold">Books Issued</div>
              <div className="px-4 py-2">{booksIssued}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
