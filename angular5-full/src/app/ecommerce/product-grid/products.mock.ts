const products = [{
    id: 0,
    starred: true,
    image: 'assets/products/product1.jpg',
    title: 'TRAINERS',
    subtitle: 'Trainers In White',
    price: 76,
    isSale: false,
    rating: 4.7,
  },
  {
    id: 1,
    starred: false,
    label: 'Sale',
    image: 'assets/products/product5.jpeg',
    title: 'BOOTS',
    subtitle: 'Trainers In Blue',
    price: {
      old: 56,
      new: 45,
      percents: 20,
    },
    isSale: true,
    rating: 4.5,
  },
  {
    id: 2,
    starred: false,
    label: 'New',
    image: 'assets/products/product4.jpeg',
    title: 'FLAT SANDALS',
    subtitle: 'Trainers In Black',
    price: 55,
    isSale: false,
    rating: 5.0,
  },
  {
    id: 3,
    starred: false,
    image: 'assets/products/product7.jpg',
    title: 'TRAINERS',
    subtitle: 'Trainers In White',
    price: {
      old: 101,
      new: 70,
      percents: 30,
    },
    isSale: true,
    rating: 4.8,
  },
  {
    id: 4,
    starred: false,
    image: 'assets/products/product6.jpg',
    title: 'TRAINERS',
    subtitle: 'Trainers In White',
    price: 76,
    isSale: false,
    rating: 4.9,
  },
  {
    id: 5,
    starred: true,
    label: 'New',
    image: 'assets/products/product3.jpg',
    title: 'BOOTS',
    subtitle: 'Trainers In Orange',
    price: {
      old: 56,
      new: 45,
      percents: 20,
    },
    isSale: true,
    rating: 4.2,
  },
  {
    id: 6,
    starred: false,
    label: 'Sale',
    image: 'assets/products/product8.jpg',
    title: 'TRAINERS',
    subtitle: 'Trainers In White',
    price: {
      old: 101,
      new: 70,
      percents: 30,
    },
    isSale: true,
    rating: 4.0,
  },
  {
    id: 7,
    starred: false,
    label: 'New',
    image: 'assets/products/product2.jpg',
    title: 'TRAINERS',
    subtitle: 'Trainers In White',
    price: 55,
    isSale: false,
    rating: 4.9,
  },
];

export default products;

export function toggle(id) {
   const product = this.products.find((p) => p.id === id);
   const isAlreadyStarred = product.starred;

   product.starred = !isAlreadyStarred;
}
