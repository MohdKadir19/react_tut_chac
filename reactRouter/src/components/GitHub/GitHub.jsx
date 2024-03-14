import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
 const data = useLoaderData(); 
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mohd")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center bg-gray-900 p-4 text-white flex items-center">
      <img src={data.avatar_url} className="mr-3 h-60" />

      <div>
        <p className=" uppercase">Name : {data.login}</p>
        <p className=" uppercase">Git Followers : {data.followers}</p>
      </div>
    </div>
  );
};

export default GitHub;

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/mohd");  
   return response.json();
}
