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
export type CardListTypeId = {
    id: number;
    poster: string;
    title: string;
    title_en: string;
    description: string;
    moduleId: number;
    movie_slug: string;
    budget: string;
    slogan: string;
    year: number;
    is_favourite: boolean;
    ageLimit: number;
    is_serial: boolean;
    is_free: boolean;
    upload_time: number;
    created_at: string;
    countries: Array<{
      id: number;
      title: string;
    }>;
    genres: Array<{
      id: number;
      title: string;
    }>;
    kp_rating: number;
    imdb_rating: number;
    people: Array<{
      post: string;
      employees: Array<{
        id: number;
        fullName: string;
        fullNameEn: string;
        photo: string;
      }>
    }>;
    actors: Array<{
      id: number;
      photo: string;
      fullName:string;
      fullNameEn:string;
    }>
}