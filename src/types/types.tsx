export interface Character  {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface ComponentProps {
  info: PageInfo; 
  result: Character[];
}
export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface PageProps {
  info: PageInfo;
  result: Character[];
}

export interface SingleCharacterProps {
  character: Character;
}