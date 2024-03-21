import React from "react";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import { customFetch } from "../utils";
export const loader = async ({ request }) => {
  const url=new URL(request.url);
  const search=url.searchParams.get('search');
  const response=await customFetch('/profile?search='+search);
  return(response.data);
};
export default function Profile() {
  return (
    <div className="bg-gray-300 h-screen">
      <SearchBar action={"profile"} hint={"Enrollment No."} id={"search"} />
      <UserProfile />
    </div>
  );
}
