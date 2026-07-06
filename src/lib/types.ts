export type Movie = {
  id?: string;
  title: string;
  description: string;
  genre: string;
  language: string;
  year: string;
  posterUrl: string;
  videoUrl: string;
  source: string;
  featured?: boolean;
  createdAt?: any;
};
