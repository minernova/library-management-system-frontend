import axios from "axios";

export const customFetch = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

export const getIssueDate = (iso) => {
  const date = new Date(iso);

  // Extract individual date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");

  const simpleDateString = `${year}/${month}/${day}`;

  return simpleDateString;
};

export const getReturnDate = (iso) => {
  const date = new Date(iso);
  date.setMonth(date.getMonth() + 3);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const day = date.getDate().toString().padStart(2, "0");

  const simpleDateString = `${year}/${month}/${day}`;

  return simpleDateString;
};