import React from "react";
import IssuedBooksList from "./IssuedBooksList";
import UserDetails from "./UserDetails";
import { useLoaderData } from "react-router-dom";

export default function UserProfile() {
  const { student } = useLoaderData();
  return (
    <div>
      <div className="container rounded-5xl mx-auto mt-5 p-5">
        <div className="rounded-5xl no-wrap mx-auto ">
          <UserDetails
            firstName={student?.name || 'N/A'}
            booksIssued={student?.books_issued.length || 'N/A'}
            email={student?.email|| 'N/A'}
            enrollNo={student?.enrollment_no|| 'N/A'}
          />
          <IssuedBooksList books={student?.books_issued}/>
        </div>
      </div>
    </div>
  );
}
