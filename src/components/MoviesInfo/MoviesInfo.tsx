import Image from "next/image";
import { CardListTypeId } from "@/types/general";

import classes from "./MoviesInfo.module.scss";

type MoviesInfoProps = {
  item: CardListTypeId;
};
function MoviesInfo({ item }: MoviesInfoProps) {
  return (
    <div className={classes.movie_info}>
      <div className={classes.movie_info__left}>
        <Image src={item.poster} width={255} height={362} alt="poster" />
      </div>
      <div className={classes.movie_info__right}>
        <div className={classes.description}>
          <h2>{item.title}</h2>
          <h3>{item.slogan}</h3>
        </div>

        <div className={classes.rating}>
          <div className={classes.age_limit}>{item.ageLimit} +</div>
        </div>

        <div className={classes.meta_block}>
          <div style={{ marginBottom: ".5rem" }}>
            <span className={classes.item_key}>Год:</span>
            <span className={classes.item_value}>{item.year}</span>
          </div>
          <div style={{ marginBottom: ".5rem" }}>
            <span className={classes.item_key}>Страна:</span>
            {item.countries?.map((item , key) => (
              <span className={classes.item_value} key={key}>{item.title}</span>
            ))}
          </div>
          <div style={{ marginBottom: ".5rem" }}>
            <span className={classes.item_key}>Жанр:</span>
            {item.genres?.map((item , key) => (
              <span className={classes.item_value} key={key}>{item.title}</span>
            ))}
          </div>
          <div style={{ marginBottom: ".5rem" }}>
            <span className={classes.item_value}>{item.description}</span>
          </div>

          <div style={{ marginBottom: ".5rem" }}>
            {item.people?.map((item , key) => (
              <div style={{ marginBottom: ".5rem" }} key={key}>
                <span className={classes.item_key}>{item.post}:</span>
                {item.employees?.map((item , index) => (
                  <span className={classes.item_value} key={`${key}-${index}`}>{item.fullName}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={classes.cast}></div>
      </div>
    </div>
  );
}

export default MoviesInfo;
