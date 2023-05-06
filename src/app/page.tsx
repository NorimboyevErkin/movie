"use client";

import useQueryHook from "@/hooks/useQueryHook";
import React, { useEffect } from "react";
import MovieSlider from "@/components/MovieSlider";
import Card from "@/components/Card";

import Pagination from "@mui/material/Pagination";
import Skeleton from "@mui/material/Skeleton";
import Container from "@/components/Container";
import classes from "./page-style.module.scss";

export default function Home() {
  const [page, setPage] = React.useState<number>(1);

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
    <main>
      <Container>
        <div style={{ marginBottom: "100px" }}>
          <MovieSlider />
        </div>
        {/* <Loading/> */}
        {isLoading ? (
          <>
            <div className={classes.grid}>
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
            <div className={classes.grid}>
              {list?.map((user: any, key: number) => (
                <Card item={user} key={key} />
              ))}
            </div>
            <div className={classes.pegination}>
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
      </Container>
    </main>
  );
}
