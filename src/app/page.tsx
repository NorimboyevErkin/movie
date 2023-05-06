"use client";

// import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import useQueryHook from "@/hooks/useQueryHook";
import React from "react";
import axios from "axios";
import MovieSlider from "@/components/MovieSlider";
import Loading from "@/components/Loading";
import Card from "@/components/Card";

// async function getUsers() {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(res , "res");

//   return [];
// }

export default function Home() {
  const { data, isLoading, isFetching, error } = useQueryHook(
    "/movie-list?page=1&items=20"
  );

  const list = (data?.data?.data || {})?.movies || [];

  console.log(list , "list");
  
  return (
    <main
      style={{
        maxWidth: 1200,
        marginInline: "auto",
        padding: "100px 20px 20px 20px",
      }}
    >
      <MovieSlider />
      {/* <Loading/> */}
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
            gridGap: "1rem"
          }}
        >
          {list?.map((user: any , key:number) => (
            <Card item={user}  key={key}/>
          ))}
        </div>
      ) : null}
    </main>
  );
}
