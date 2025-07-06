export interface ImageQuestion {
  id: number;
  reliableImage: string;
  unreliableImage: string;
}

export const imageQuestions: ImageQuestion[] = [
  {
    id: 1,
    reliableImage: "/images/reliable/image_1.png",
    unreliableImage: "/images/unreliable/u_image3.png"
  },
  {
    id: 2,
    reliableImage: "/images/reliable/image_6.avif",
    unreliableImage: "/images/unreliable/u_image4.png"
  },
  {
    id: 3,
    reliableImage: "/images/reliable/image_7.avif",
    unreliableImage: "/images/unreliable/u_image5.png"
  },
  {
    id: 4,
    reliableImage: "/images/reliable/image_8.png",
    unreliableImage: "/images/unreliable/u_image6.png"
  },
  {
    id: 5,
    reliableImage: "/images/reliable/image_13.avif",
    unreliableImage: "/images/unreliable/u_image7.png"
  },
  {
    id: 6,
    reliableImage: "/images/reliable/image_15.png",
    unreliableImage: "/images/unreliable/u_image8.png"
  },
  {
    id: 7,
    reliableImage: "/images/reliable/image_55.png",
    unreliableImage: "/images/unreliable/u_image9.png"
  }
]; 