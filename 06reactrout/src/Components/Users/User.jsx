import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  // Using the useParams hook from react-router-dom to extract the 'id' parameter from the route
  const { id } = useParams(); // we can directly accesss the id, passed in component url.

  // Returning a JSX element with the extracted 'id' parameter
  return <div className="p-4 text-gray-500">User: {id}</div>;
}
