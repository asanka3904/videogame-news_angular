export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publisher: Array<Publisher>;
  screenshots: Array<Screenshots>;
  trailer: Array<Trailer>;
}

export interface APIResponse<T> {
  results: Array<T>;
}

export interface Genre {
  name: string;
}

export interface Publisher {
  name: string;
}

export interface Rating {
  id: number;
  count: number;
  title: string;
}

export interface ParentPlatform {
  platform: {
    name: string;
    slug: string; //add
  };
}

export interface Screenshots {
  image: string;
}

export interface Trailer {
  data: {
    max: string;
  };
}
