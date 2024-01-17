import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); //This line indicates that the result of calling useLoaderData() is assigned to the data constant.
  //   useLoaderData(): This suggests that useLoaderData is a custom hook or a function being used to fetch data. The name of the hook implies it might be associated with loading data during the server rendering process.
  // If it's a custom hook, it might be defined somewhere in your codebase or provided by a library.
  // If it's a function, it's being called to retrieve some data.

  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/amngairola")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      github Followers:{data.followers}
      <img
        className="rounded-3"
        src={data.avatar_url}
        alt="git profile"
        width={300}
      />
      .
    </div>
  );
}

export default Github;

//optimize way of calling api
export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/amngairola");
  return response.json();
};
