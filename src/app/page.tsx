"use client";

import useQueryHook from "@/hooks/useQueryHook";
import React, { useEffect } from "react";
import MovieSlider from "@/components/MovieSlider";
import Card from "@/components/Card";

import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";

export default function Home() {
  const [page, setPage] = React.useState<number>(2);

  const { data, isLoading, isFetching, error, refetch } = useQueryHook(
    `/movie-list?page=${page}&items=20`
  );

  useEffect(() => {
    refetch({});
  }, [page]);

  const list = (data?.data?.data || {})?.movies || [];
  const total = (data?.data?.data || {})?.lastPage || 0;

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <main
      style={{
        maxWidth: 1200,
        marginInline: "auto",
        padding: "100px 20px 20px 20px",
      }}
    >
      <div style={{ marginBottom: "100px" }}>
        <MovieSlider />
      </div>
      {/* <Loading/> */}
      {isLoading || isFetching ? (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
              gridGap: "1.5rem",
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton
                key={item}
                animation="wave"
                variant="rectangular"
                width={180}
                height={270}
                sx={{ bgcolor: "grey.900" }}
              />
            ))}
          </div>
        </>
      ) : data ? (
        <>
          <h1>All Movie</h1>
          <br />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
              gridGap: "1.5rem",
            }}
          >
            {list?.map((user: any, key: number) => (
              <Card item={user} key={key} />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "3rem 0",
            }}
          >
            <Pagination
              variant="outlined"
              shape="rounded"
              color="primary"
              count={total}
              page={page}
              onChange={handleChangeRowsPerPage}
            />
          </div>
        </>
      ) : null}
    </main>
  );
}
