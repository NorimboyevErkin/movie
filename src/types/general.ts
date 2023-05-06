export type SocialsListType = {
  icon: React.ReactNode;
  link: string;
  name: string;
};

export type CardListType = {
  id: number;
  modulId: number;
  cardType: string;
  poster: string;
  title: string;
  title_en: string;
  year: number;
  quality: string;
  age_limit: number;
  is_serial: boolean;
  isNew: boolean;
  isFree:boolean;
  isFavourite: boolean;
  genres: Array<{
    id: number;
    title: string;
    order_position: string;
  }>;
};
