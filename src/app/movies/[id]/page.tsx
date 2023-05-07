"use client";
import Container from "@/components/Container";
import MoviesInfo from "@/components/MoviesInfo";
import VideoPlayer from "@/components/VideoPlayer";
import useQueryHook from "@/hooks/useQueryHook";
import Skeleton from "@mui/material/Skeleton";

import classes from "./styles.module.scss";

function MovieId({ params, searchParams }: any) {
  const { data, isLoading, isFetching, error, refetch } = useQueryHook(
    `/movie-detail?id=${params.id}`
  );

  const list = data?.data?.data || [];

  return (
    <main>
      <Container>
        {isLoading ? (
          <>
            <div className={classes.warpper}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={255}
                height={382}
                sx={{ bgcolor: "grey.900" }}
              />
              <div>
                {[1, 2, 3].map((item) => (
                  <Skeleton
                    key={item}
                    animation="wave"
                    height={82}
                    sx={{ bgcolor: "grey.900" }}
                  />
                ))}
              </div>
            </div>

            <div className={classes.grid_actior}>
              {[1, 2, 3, 4, 5].map((item: any) => (
                <Skeleton
                  key={item}
                  animation="wave"
                  height={128}
                  width={85}
                  sx={{ bgcolor: "grey.900" }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <VideoPlayer/>
            <MoviesInfo item={list} />
            <div className={classes.grid_actior}>
              {list.actors.map((item: any) => (
                item.photo && <img
                  key={item?.id}
                  src={item?.photo}
                  alt={item?.fullName}
                  width={85}
                  height={128}
                />
              ))}
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
export default MovieId;
