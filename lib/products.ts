export interface Product {
  id: number
  name: string
  price: number
  img: string
  stock: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Starter Tee",
    price: 19,
    img: "/comfortable-cotton-t-shirt.png",
    stock: 12,
    category: "Apparel",
  },
  {
    id: 2,
    name: "Hoodie Pro",
    price: 49,
    img: "/premium-hoodie-sweatshirt.png",
    stock: 5,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Mug",
    price: 12,
    img: "/ceramic-coffee-mug.png",
    stock: 30,
    category: "Home",
  },
  {
    id: 4,
    name: "Sticker Pack",
    price: 5,
    img: "/colorful-sticker-collection.png",
    stock: 100,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Cap",
    price: 25,
    img: "/baseball-cap-hat.png",
    stock: 8,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Notebook",
    price: 15,
    img: "/placeholder-b4zak.png",
    stock: 20,
    category: "Stationery",
  },
]
