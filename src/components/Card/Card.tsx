import { HiStar } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import classes from "./Card.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { CardListType } from "@/types/general";

type CardProps = {
  item: CardListType;
};
function Card({ item }: CardProps) {
  return (
    <Link href={`/movies/${item.id}`}>
    <div className={classes.card}>
      {!item.isFree && (
        <div className={classes.card__rating}>
          <h4 className={classes.card__rating}>Pullik</h4>
        </div>
      )}

      <div className={classes.card__image}>
        <Image           src={item.poster}
          alt={item.title} width={180} height={240}/>
      </div>
      <div className={classes.card__details}>
        <h4>{item.title}</h4>
        <div className={classes.card__footer}>
          <p>{item.year}</p>
          <button className={classes.favorite}>
            <AiFillHeart style={item.isFavourite ? { color: "red" } : {}} />
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;
