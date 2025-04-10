// Define an interface for the card data
export interface Room {
    title: string;
    sizex: number;
    sizey: number;
    price: number;
    bedrooms: number;
    bathrooms: number;
    room_status: string;
    img_url: string;
  }
  
  export default class Card implements Room {
    title: string;
    sizex: number;
    sizey: number;
    price: number;
    bedrooms: number;
    bathrooms: number;
    room_status: string;
    img_url: string;
  
    constructor(
      title: string,
      sizex: number,
      sizey: number,
      price: number,
      bedrooms: number,
      bathrooms: number,
      room_status: string,
      img_url: string
    ) {
      this.title = title;
      this.sizex = sizex;
      this.sizey = sizey;
      this.price = price;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.room_status = room_status;
      this.img_url = img_url;
    }
  }
  