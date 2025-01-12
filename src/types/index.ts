export type CarouselProps = {
  products: {
    title: string;
    image: string;
    alt: string;
  }[];
};

export type Products = {
  gridCols?: number
  products: {
    title: string
    image: string
  }[]
  title: string
}