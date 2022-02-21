export interface Game {
  imgurl: PrismicResponse[];
  price: PrismicResponse[];
  title1: PrismicResponse[];
}

export interface PrismicResponse {
  spans: Span[];
  text: string;
  type: string;
}

export interface Span {
  data: {
    link_type: string;
    url: string;
  };
  end: number;
  start: number;
  type: string;
}
