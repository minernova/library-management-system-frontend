import React from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

export const loader =async ({request}) => {
  const url=new URL(request.url)
  const search=url.searchParams.get('search')||''
  const response=await customFetch('/books?search='+search);
  return {books:response.data.books,searchTerm:response.data.search};
}
export default function Books() {
  // const {books,searchTerm}=useLoaderData();
  // console.log(books);
  return (
    <div className="bg-gray-300 h-screen">
        {/* <SearchBar/> */}
        <SearchBar action={'books'} hint='Search Books' id={'search'}/>
        <BookList/>
    </div>
  );
}
