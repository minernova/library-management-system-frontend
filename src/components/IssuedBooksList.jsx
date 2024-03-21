import React from "react";
import { getIssueDate, getReturnDate } from "../utils";
export default function IssuedBooksList({ books }) {
  return (
    <div className="bg-white w-3/5 mx-auto p-3 overflow-y-auto max-h-96 h-full shadow-sm rounded-xl">
      <div className="grid grid-cols-4">
        <div>
          <div className=" flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="mx-auto tracking-wide">S. NO.</span>
          </div>
          <ul className="list-inside text-center space-y-2">
            {books?.map((book, idx) => {
              return (
                <li key={idx} className="mx-auto">
                  {idx + 1}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="tracking-wide">Book</span>
          </div>
          <ul className="list-inside items-center space-y-2">
            {books?.map((book, idx) => {
              return (
                <li key={idx}>
                  {book.name.length > 20
                    ? book.name.substring(0, 20) + "..."
                    : book.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="tracking-wide">Issue-Date</span>
          </div>
          <ul className="list-inside items-center space-y-2">
            {books?.map((book, idx) => {
              return (
                <li key={idx}>
                  {getIssueDate(book.issue_date)}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="tracking-wide">Return-Date</span>
          </div>
          <ul className="list-inside items-center space-y-2">
          {books?.map((book, idx) => {
              return (
                <li key={idx}>
                  {getReturnDate(book.issue_date)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
