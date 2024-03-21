import React from "react";
import BookCard from "./BookCard";
import { useLoaderData } from "react-router-dom";

export default function BookList() {
  const { books, searchTerm } = useLoaderData();
  console.log(books,searchTerm);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {books.map((book) => {
          return (
              <BookCard
                key={book._id}
                title={
                  book.title.length > 23
                    ? book.title.substring(0, 23) + "..."
                    : book.title
                }
                authors={book.authors.length>36? book.authors.substring(0,36)+'...':book.authors}
                location={book.location}
                available={book.available_count}
                total={book.total_count}
              />
          );
        })}
      </div>
    </div>
  );
}
